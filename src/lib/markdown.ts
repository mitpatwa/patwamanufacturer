// Minimal, dependency-free markdown → HTML renderer for blog article bodies.
// Escapes HTML first, then handles the subset of markdown used in src/data/blog-posts.ts:
// headings, bold, italics, links, bullet/numbered lists, blockquotes, paragraphs.

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function inline(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
}

/**
 * Renders article markdown to HTML.
 * The first `# Heading` is dropped: the page already prints the title as its single H1.
 */
export function renderArticleHtml(markdown: string): string {
  const lines = escapeHtml(markdown).split("\n");
  const out: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let seenTitle = false;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      out.push(`<p>${inline(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  const closeList = () => {
    if (listType) {
      out.push(`</${listType}>`);
      listType = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      flushParagraph();
      closeList();
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const depth = heading[1].length;
      const text = inline(heading[2]);
      if (depth === 1 && !seenTitle) {
        seenTitle = true;
        continue;
      }
      const level = Math.min(Math.max(depth, 2), 4);
      out.push(`<h${level} id="${slugify(heading[2])}">${text}</h${level}>`);
      continue;
    }

    const bullet = line.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      flushParagraph();
      if (listType !== "ul") {
        closeList();
        out.push("<ul>");
        listType = "ul";
      }
      out.push(`<li>${inline(bullet[1])}</li>`);
      continue;
    }

    const numbered = line.match(/^\d+[.)]\s+(.*)$/);
    if (numbered) {
      flushParagraph();
      if (listType !== "ol") {
        closeList();
        out.push("<ol>");
        listType = "ol";
      }
      out.push(`<li>${inline(numbered[1])}</li>`);
      continue;
    }

    if (line.startsWith("&gt;")) {
      flushParagraph();
      closeList();
      out.push(`<blockquote>${inline(line.replace(/^&gt;\s?/, ""))}</blockquote>`);
      continue;
    }

    if (/^(-{3,}|_{3,})$/.test(line)) {
      flushParagraph();
      closeList();
      out.push("<hr/>");
      continue;
    }

    closeList();
    paragraph.push(line);
  }

  flushParagraph();
  closeList();

  return out.join("\n");
}
