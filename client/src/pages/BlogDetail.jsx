import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogById } from "../services/api";
import SEO from "../components/SEO";

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Skeleton() {
  return (
    <div className="max-w-3xl mx-auto animate-pulse space-y-6 pt-32 px-6">
      <div className="h-8 bg-t-skeleton rounded w-3/4" />
      <div className="h-5 bg-t-skeleton rounded w-1/2" />
      <div className="h-64 bg-t-skeleton rounded-2xl" />
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-4 bg-t-skeleton rounded"
          style={{ width: `${70 + Math.random() * 30}%` }}
        />
      ))}
    </div>
  );
}

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getBlogById(slug)
      .then((data) => {
        if (data?.blog || data) setBlog(data?.blog || data);
        else setError("Blog not found.");
      })
      .catch(() => setError("Could not load blog."))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Skeleton />;

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <SEO
          title="Blog Not Found"
          description="The blog post you're looking for could not be found."
          canonical={`/blog/${slug}`}
        />
        <div className="text-6xl mb-4">😕</div>
        <p className="text-t-secondary mb-6">{error}</p>
        <Link to="/resources" className="text-[#4CFFE7] hover:underline">
          ← Back to Resources
        </Link>
      </div>
    );

  if (!blog) return null;

  // ── Schema field mappings ──────────────────────────────────────────────────
  // blog.content          → rich HTML body (was blog.description)
  // blog.seoTitle         → SEO title    (falls back to blog.title)
  // blog.seoDescription   → meta desc    (was blog.meta?.description)
  // blog.seoKeywords      → meta keywords (was blog.tags?.join)
  // blog.canonicalUrl     → canonical URL (was hardcoded /blog/${uid})
  // blog.featuredImage    → plain string URL or base64 (was blog.featuredImage?.url)
  // blog.category         → plain string  (was blog.category?.name)
  // blog.faqs             → array of { question, answer } (was blog.faq)
  // blog.author           → author name  (was blog.authorName)
  // blog.readTime         → read time in minutes (auto-computed by schema)

  return (
    <div className="min-h-screen pb-20">
      <SEO
        title={blog.seoTitle || blog.title}
        description={
          blog.seoDescription ||
          blog.excerpt ||
          `Read ${blog.title} on VyomEdge blog.`
        }
        keywords={
          blog.seoKeywords ||
          blog.tags?.join(", ") ||
          "digital marketing, SEO, VyomEdge blog"
        }
        canonical={blog.canonicalUrl || `/blog/${slug}`}
        ogImage={blog.featuredImage || "/og-blog.jpg"}
        ogType="article"
      />

      {/* Hero */}
      <div className="relative pt-28 pb-16 dot-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-t-bg via-transparent to-t-bg pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-t-muted mb-6">
              <Link to="/" className="hover:text-[#4CFFE7] transition-colors">
                Home
              </Link>
              <span>→</span>
              <Link
                to="/resources"
                className="hover:text-[#4CFFE7] transition-colors"
              >
                Resources
              </Link>
              <span>→</span>
              <span className="text-t-secondary line-clamp-1">
                {blog.title}
              </span>
            </div>

            {/* Category · Date · Author · Read time */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {blog.category && (
                <span className="text-xs px-3 py-1 rounded-full bg-[#7600C420] text-[#4CFFE7]">
                  {blog.category}
                </span>
              )}
              <span className="text-t-muted text-xs">
                {formatDate(blog.createdAt)}
              </span>
              <span className="text-t-muted text-xs">
                · By {blog.author || "VyomEdge"}
              </span>
              {blog.readTime > 0 && (
                <span className="text-t-muted text-xs">
                  · {blog.readTime} min read
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black text-t-text leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Excerpt / SEO description */}
            {(blog.excerpt || blog.seoDescription) && (
              <p className="text-t-secondary text-lg leading-relaxed mb-8">
                {blog.excerpt || blog.seoDescription}
              </p>
            )}

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-t-border text-t-muted"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Featured Image — plain string (base64 or URL) */}
      {blog.featuredImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto px-6 mb-12"
        >
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl"
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto px-6"
      >
        {/* Blog body — schema field is `content` */}
        <div
          className="prose-content text-t-secondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* FAQs — schema field is `faqs` (array of { question, answer }) */}
        {blog.faqs?.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-black text-t-text mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {blog.faqs.map((f, i) => (
                <div key={i} className="glass rounded-2xl p-6">
                  <h3 className="text-t-text font-bold mb-2">{f.question}</h3>
                  <p className="text-t-secondary text-sm leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 glass rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 brand-gradient" />
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-t-text mb-3">
              Need Help With Your Digital Growth?
            </h3>
            <p className="text-t-secondary text-sm mb-6">
              Talk to our team. Free strategy session, no commitment.
            </p>
            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 rounded-xl text-white font-bold text-sm overflow-hidden"
            >
              <span className="absolute inset-0 brand-gradient" />
              <span className="relative z-10">Book Free Call →</span>
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            to="/resources"
            className="text-[#4CFFE7] text-sm hover:underline"
          >
            ← Back to all blogs
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
