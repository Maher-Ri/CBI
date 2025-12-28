import { Helmet } from "react-helmet-async";

export default function Seo({data}) {
    const base = process.env.REACT_APP_STRAPI_URL;
    console.log("SEO data received:",data.image);
  if (!data) return null;
  const {
    title,
    description,
    keywords,
    slug,
    image,
    canonicalUrl,
    robots,
  } = data;
  const fullUrl = canonicalUrl || `${window.location.origin}/${slug || ""}`;

  return (
    <Helmet>
      {/* --- BASIC TAGS --- */}
      <title key="title">{data.title}</title>
      <meta key="description" content={data.description} />
      <meta key="keywords" content={keywords} />

      {/* --- CANONICAL URL --- */}
      <link rel="canonical" href={canonicalUrl} />

      {/* --- ROBOTS --- */}
      <meta key="robots" content={robots} />

      {/* --- OPEN GRAPH (FACEBOOK, LINKEDIN) --- */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${base}${image.url}`} />

      {/* --- TWITTER --- */}
      <meta key="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" content={title} />
      <meta key="twitter:description" content={description} />
      <meta key="twitter:image" content={image.url} />
    </Helmet>
  );
}
