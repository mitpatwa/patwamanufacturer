// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs"
import { resolve } from "path"
import { blogPosts, blogCategories } from "../src/data/blog-posts"

const BASE_URL = "https://patwamanufacturer.lovable.app"

interface SitemapEntry {
  path: string
  lastmod?: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

// Public, indexable routes from src/App.tsx.
// Internal tooling routes (/seo, /analysis, /content-calendar) are intentionally omitted.
const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/passementerie-manufacturer", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/craftsmanship", changefreq: "monthly", priority: "0.7" },
  { path: "/custom-services", changefreq: "monthly", priority: "0.8" },
  { path: "/configurator", changefreq: "monthly", priority: "0.8" },
  { path: "/order-samples", changefreq: "monthly", priority: "0.8" },
  { path: "/trade-program", changefreq: "monthly", priority: "0.7" },
  { path: "/find-designer", changefreq: "monthly", priority: "0.6" },
  { path: "/sustainability", changefreq: "yearly", priority: "0.5" },
  { path: "/support", changefreq: "yearly", priority: "0.5" },
  { path: "/returns-exchanges", changefreq: "yearly", priority: "0.4" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
  { path: "/ai-access", changefreq: "monthly", priority: "0.5" },
]

const collectionSlugs = [
  "tassels",
  "fringes",
  "braids",
  "cords",
  "embelishments",
  "window-treatments",
  "furniture-trims",
  "tie-backs",
  "table-linens",
  "outdoor-fabrics",
  "home-accessories",
  "window-shades",
]

const collectionEntries: SitemapEntry[] = collectionSlugs.map((slug) => ({
  path: `/collections/${slug}`,
  changefreq: "weekly",
  priority: "0.9",
}))

const blogEntries: SitemapEntry[] = [
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  ...blogCategories.map((c) => ({
    path: `/blog/category/${c.slug}`,
    changefreq: "weekly" as const,
    priority: "0.6",
  })),
  // One entry per published article, with its own publish date as lastmod.
  ...blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: p.date,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
]

const entries: SitemapEntry[] = [...staticEntries, ...collectionEntries, ...blogEntries]

function generateSitemap(list: SitemapEntry[]) {
  const urls = list.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)
