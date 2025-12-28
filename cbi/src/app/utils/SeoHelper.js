import { getImageUrl } from "./getImageUrl";
export function SeoHelper(seoData, parentMetadata = {}) {
  // 1. Fallback: If no data, let Layout defaults take over
  if (!seoData) return {};
  // 2. Extract Parent Defaults safely
  const previousOg = parentMetadata.openGraph || {};
  const previousTwitter = parentMetadata.twitter || {};

  return {
    // TITLE & DESC
    ...(seoData.title && { title: seoData.title }),
    ...(seoData.description && { description: seoData.description }),

    // KEYWORDS
    ...(seoData.keywords && {
      keywords: seoData.keywords.split(",").map((k) => k.trim()),
    }),

    // CANONICAL
    ...(seoData.canonicalUrl && {
      alternates: { canonical: seoData.canonicalUrl },
    }),

    // OPEN GRAPH
    openGraph: {
      ...previousOg, // Inherit site name, locale, etc.
      ...(seoData.ogTitle && { title: seoData.ogTitle }),
      ...(seoData.ogDescription && { description: seoData.ogDescription }),
      ...(seoData.canonicalUrl && { url: seoData.canonicalUrl }),
      ...(seoData.image && {
        images: [
          {
            url: getImageUrl(seoData.image.url), // Use Helper
            width: 1200,
            height: 630,
          },
        ],
      }),
    },

    // TWITTER
    twitter: {
      ...previousTwitter,
      ...(seoData.ogTitle && { title: seoData.ogTitle }),
      ...(seoData.ogDescription && { description: seoData.ogDescription }),
      ...(seoData.image && {
        images: [
          {
            url: getImageUrl(seoData.image.url), // Use Helper
            width: 1200,
            height: 630,
          },
        ],
      }),
    },

    // ROBOTS
    // Only add if explicitly defined in Strapi
    ...(seoData.robots !== undefined && {
      robots: {
        index: seoData.robots,
        follow: seoData.robots,
        nocache: false,
        googleBot: {
          index: seoData.robots,
          follow: seoData.robots,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    }),
  };
}
