import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getBlogs } from "../services/api";
import SEO from "../components/SEO";

const tabs = ["Case Studies", "Blog", "News"];

const caseStudies = [
  {
    client: "The SuperC",
    icon: "⚡",
    category: "SEO + Meta Ads",
    summary:
      "From zero to 1.3M impressions and 28.2K clicks through advanced SEO and Meta Ads.",
    result: "1.3M Impressions",
    color: "#D300E5",
  },
  {
    client: "Zentrail",
    icon: "🏔️",
    category: "Full Digital Ecosystem",
    summary:
      "Built the entire digital presence from scratch. Achieved 18x ROAS on Meta Ads.",
    result: "18x ROAS",
    color: "#7600C4",
  },
  {
    client: "Madhuban Eco Retreat",
    icon: "🌿",
    category: "SEO + Google Ads",
    summary:
      "MERN website with advanced SEO achieving 6.7% CTR and top 5 average position.",
    result: "6.7% CTR",
    color: "#4CFFE7",
  },
  {
    client: "Poornam Events",
    icon: "🎉",
    category: "Full Digital Ecosystem",
    summary:
      "Complete ecosystem from logo to MERN site. 456K impressions and CPL of ₹65.6.",
    result: "456K Impressions",
    color: "#D300E5",
  },
  {
    client: "Jaiswal Piles Clinic",
    icon: "🏥",
    category: "Full Digital Ecosystem",
    summary:
      "Built full digital presence for medical clinic achieving CPL of ₹46.9 on Meta Ads.",
    result: "₹46.9 CPL",
    color: "#7600C4",
  },
];

const news = [
  {
    title: "VyomEdge Achieves 18x ROAS for Zentrail in Latest Meta Campaign",
    date: "Mar 2026",
    tag: "Achievement",
  },
  {
    title: "Our MERN Stack Framework Now Powers 10+ Business Websites",
    date: "Feb 2026",
    tag: "Milestone",
  },
  {
    title: "VyomEdge Launches Free Rich Text Editor for Small Businesses",
    date: "Jan 2026",
    tag: "Product Launch",
  },
  {
    title:
      "Madhuban Eco Retreat Reaches Top 5 Google Rankings After SEO Overhaul",
    date: "Jan 2026",
    tag: "Case Study",
  },
];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function BlogSkeleton() {
  return (
    <div className="glass rounded-2xl p-6 animate-pulse space-y-3">
      <div className="flex gap-2">
        <div className="h-5 w-24 bg-t-skeleton rounded-full" />
        <div className="h-5 w-16 bg-t-skeleton rounded-full" />
      </div>
      <div className="h-5 w-full bg-t-skeleton rounded" />
      <div className="h-5 w-3/4 bg-t-skeleton rounded" />
      <div className="h-4 w-1/2 bg-t-skeleton rounded" />
    </div>
  );
}

export default function Resources() {
  const [tab, setTab] = useState("Case Studies");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (tab !== "Blog") return;
    setLoading(true);
    setError(null);
    getBlogs()
      .then((data) => {
        if (data?.blogs) setBlogs(data.blogs);
        else setError("Could not load blogs.");
      })
      .catch(() => setError("Could not load blogs."))
      .finally(() => setLoading(false));
  }, [tab]);

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title?.toLowerCase().includes(search.toLowerCase()) ||
      b.category?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEO
        title="Digital Marketing Blog & Resources | SEO Tips & Guides"
        description="Learn digital marketing with VyomEdge's expert resources. Free SEO tips, social media strategies, web development guides & marketing insights for growth."
        keywords="digital marketing blog, SEO tips, marketing resources, case studies, digital marketing guides Bhopal"
        canonical="/resources"
        ogImage="/og-resources.jpg"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">
            Knowledge Hub
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-t-text mt-4 mb-6">
            Resources That
            <br />
            <span className="gradient-text">Actually Help</span>
          </h1>
          <p className="text-t-secondary text-lg max-w-xl mx-auto">
            Case studies, insights and news from the frontlines of digital
            marketing and tech.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-3 justify-center mb-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all relative overflow-hidden ${
                tab === t
                  ? "text-white"
                  : "glass text-t-secondary hover:text-t-text border border-t-border"
              }`}
            >
              {tab === t && (
                <span className="absolute inset-0 brand-gradient" />
              )}
              <span className="relative z-10">{t}</span>
            </button>
          ))}
        </div>

        {/* ── Case Studies ── */}
        {tab === "Case Studies" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {caseStudies.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 group hover:border-[#7600C440] transition-all cursor-pointer relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${c.color}12, transparent 60%)`,
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#7600C420] text-[#4CFFE7]">
                      {c.category}
                    </span>
                    <span className="text-3xl">{c.icon}</span>
                  </div>
                  <h3 className="text-t-text font-bold text-lg mb-2">
                    {c.client}
                  </h3>
                  <p className="text-t-muted text-sm leading-relaxed mb-4">
                    {c.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-t-text font-black text-xl">
                      {c.result}
                    </span>
                    <Link
                      to="/portfolio"
                      className="text-[#4CFFE7] text-xs hover:underline"
                    >
                      Full case →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center border-dashed border-[#7600C440] cursor-pointer hover:border-[#7600C4] transition-all"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-t-text font-bold mb-2">More Coming Soon</h3>
              <p className="text-t-muted text-sm">
                We're documenting more client journeys. Stay tuned.
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* ── Blog (Live from API) ── */}
        {tab === "Blog" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="max-w-xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-t-input border border-t-border rounded-xl px-5 py-3 text-t-text text-sm placeholder-t-faint focus:outline-none focus:border-[#7600C4] transition-colors"
              />
            </div>

            {loading && (
              <div className="space-y-4 max-w-3xl mx-auto">
                {[...Array(4)].map((_, i) => (
                  <BlogSkeleton key={i} />
                ))}
              </div>
            )}

            {error && !loading && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">😕</div>
                <p className="text-t-secondary">{error}</p>
              </div>
            )}

            {!loading && !error && (
              <div className="space-y-4 max-w-3xl mx-auto">
                {filteredBlogs.length === 0 && (
                  <div className="text-center py-12 text-t-muted">
                    No blogs found.
                  </div>
                )}
                {filteredBlogs.map((b, i) => (
                  <motion.div
                    key={b._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {/*
                      ✅ Use b.slug — controller's public single-blog route is:
                         GET /api/blogs/slug/:slug
                      So the React route must be /blog/:slug and BlogDetail
                      must call getBlogBySlug(slug) hitting /api/blogs/slug/:slug
                    */}
                    <Link
                      to={`/blog/${b.slug}`}
                      className="glass rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-[#7600C440] transition-all block"
                    >
                      {b.featuredImage && (
                        <div className="md:w-48 h-40 md:h-auto flex-shrink-0 overflow-hidden">
                          <img
                            src={b.featuredImage}
                            alt={b.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            {b.category && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-[#7600C420] text-[#4CFFE7]">
                                {b.category}
                              </span>
                            )}
                            <span className="text-t-faint text-xs">
                              {formatDate(b.createdAt)}
                            </span>
                            {b.readTime > 0 && (
                              <span className="text-t-faint text-xs">
                                · {b.readTime} min read
                              </span>
                            )}
                          </div>
                          <h3 className="text-t-text font-bold text-base md:text-lg mb-2 group-hover:text-[#4CFFE7] transition-colors line-clamp-2">
                            {b.title}
                          </h3>
                          <p className="text-t-muted text-sm line-clamp-2">
                            {b.excerpt || b.seoDescription}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-t-faint text-xs">
                            By {b.author || "VyomEdge"}
                          </span>
                          <span className="text-[#4CFFE7] text-xs font-medium group-hover:underline">
                            Read more →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* ── News ── */}
        {tab === "News" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            {news.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass rounded-2xl p-6 flex items-center justify-between gap-4 group hover:border-[#7600C440] transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#D300E520] text-[#D300E5]">
                      {n.tag}
                    </span>
                    <span className="text-t-faint text-xs">{n.date}</span>
                  </div>
                  <h3 className="text-t-text font-semibold text-base">
                    {n.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
