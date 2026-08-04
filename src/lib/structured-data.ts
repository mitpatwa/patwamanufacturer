// Shared schema.org helpers so every page emits consistent, linked JSON-LD.
// Organization and WebSite are declared once with stable @id values; page-level
// schemas reference those ids instead of repeating the whole node.

export const SITE_URL = "https://patwamanufacturer.lovable.app";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const organizationRef = { "@id": ORGANIZATION_ID };

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Patwa Manufacturer",
  alternateName: ["Patwa Passementerie", "Patwa Trims & Tassels"],
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/patwa-logo.png`,
  },
  image: `${SITE_URL}/lovable-uploads/hero-1-trimmings.png`,
  description:
    "Manufacturer of passementerie in India: tassels, fringes, braids, cords and tie-backs, made to order for interior designers and workrooms.",
  email: "support@patwamanufacturer.com",
  telephone: "+91-9322140480",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9322140480",
      email: "support@patwamanufacturer.com",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
      areaServed: ["Worldwide"],
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Patwa Manufacturer",
  description:
    "Passementerie made in India: tassels, fringes, braids, cords and tie-backs, in stock or made to order.",
  inLanguage: "en",
  publisher: organizationRef,
};

export interface BreadcrumbItem {
  name: string;
  /** Site-relative path, e.g. "/collections/tassels". Omit on the current page. */
  path?: string;
}

/**
 * Builds a BreadcrumbList. "Home" is added automatically as the first crumb,
 * so pass only the trail below it.
 */
export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    ...(item.path ? { item: absoluteUrl(item.path) } : {}),
  })),
});
