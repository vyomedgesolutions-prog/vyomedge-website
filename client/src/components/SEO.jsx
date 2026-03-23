import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-default.jpg",
  ogType = "website",
  ogImageAlt,
  article = {},
}) => {
  const siteName  = "VyomEdge";
  const baseUrl   = "https://www.vyomedge.com";
  const twitter   = "@VyomedgeS";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  // Handle both absolute URLs (blog featured images) and relative paths
  const imageUrl = ogImage?.startsWith('http')
    ? ogImage
    : `${baseUrl}${ogImage}`;

  const imageAlt = ogImageAlt || fullTitle;

  return (
    <Helmet>
      {/* ── Basic ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content={ogType} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:site_name"   content={siteName} />
      <meta property="og:image"       content={imageUrl} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"   content={imageAlt} />
      <meta property="og:locale"      content="en_IN" />

      {/* ── Article specific (blog posts) ── */}
      {ogType === "article" && article.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {ogType === "article" && article.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {ogType === "article" && article.author && (
        <meta property="article:author" content={article.author} />
      )}
      {ogType === "article" && article.section && (
        <meta property="article:section" content={article.section} />
      )}
      {ogType === "article" && article.tags?.map((tag, i) => (
        <meta key={i} property="article:tag" content={tag} />
      ))}

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content={twitter} />
      <meta name="twitter:creator"     content={twitter} />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={imageUrl} />
      <meta name="twitter:image:alt"   content={imageAlt} />

      {/* ── Local SEO ── */}
      <meta name="geo.region"    content="IN-MP" />
      <meta name="geo.placename" content="Bhopal" />
      <meta name="geo.position"  content="23.2599;77.4126" />
      <meta name="ICBM"          content="23.2599, 77.4126" />
    </Helmet>
  );
};

export default SEO;
