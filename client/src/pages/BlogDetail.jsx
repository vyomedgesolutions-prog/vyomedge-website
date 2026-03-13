import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getBlogById } from '../services/api'

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

function Skeleton() {
  return (
    <div className="max-w-3xl mx-auto animate-pulse space-y-6 pt-32 px-6">
      <div className="h-8 bg-[#1A1A2E] rounded w-3/4" />
      <div className="h-5 bg-[#1A1A2E] rounded w-1/2" />
      <div className="h-64 bg-[#1A1A2E] rounded-2xl" />
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-4 bg-[#1A1A2E] rounded" style={{ width: `${70 + Math.random() * 30}%` }} />
      ))}
    </div>
  )
}

export default function BlogDetail() {
  const { uid } = useParams()
  const [blog, setBlog]     = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState(null)

  useEffect(() => {
    setLoading(true)
    getBlogById(uid)
      .then(data => {
        if (data?.blog || data) setBlog(data?.blog || data)
        else setError('Blog not found.')
      })
      .catch(() => setError('Could not load blog.'))
      .finally(() => setLoading(false))
  }, [uid])

  if (loading) return <Skeleton />

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20">
      <div className="text-6xl mb-4">😕</div>
      <p className="text-gray-400 mb-6">{error}</p>
      <Link to="/resources" className="text-[#4CFFE7] hover:underline">← Back to Resources</Link>
    </div>
  )

  if (!blog) return null

  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="relative pt-28 pb-16 dot-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080F] via-transparent to-[#08080F] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link to="/" className="hover:text-[#4CFFE7] transition-colors">Home</Link>
              <span>→</span>
              <Link to="/resources" className="hover:text-[#4CFFE7] transition-colors">Resources</Link>
              <span>→</span>
              <span className="text-gray-400 line-clamp-1">{blog.title}</span>
            </div>

            {/* Category & date */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {blog.category?.name && (
                <span className="text-xs px-3 py-1 rounded-full bg-[#7600C420] text-[#4CFFE7]">
                  {blog.category.name}
                </span>
              )}
              <span className="text-gray-500 text-xs">{formatDate(blog.createdAt)}</span>
              <span className="text-gray-500 text-xs">· By {blog.authorName}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Meta description */}
            {blog.meta?.description && (
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{blog.meta.description}</p>
            )}

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((t, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full border border-[#1A1A2E] text-gray-500">
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.featuredImage?.url && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto px-6 mb-12"
        >
          <img
            src={blog.featuredImage.url}
            alt={blog.featuredImage.altText || blog.title}
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
        {/* Blog body */}
        <div
          className="prose-content text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

        {/* FAQs */}
        {blog.faq?.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {blog.faq.map((f, i) => (
                <div key={i} className="glass rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">{f.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 glass rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 brand-gradient" />
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-3">Need Help With Your Digital Growth?</h3>
            <p className="text-gray-400 text-sm mb-6">Talk to our team. Free strategy session, no commitment.</p>
            <Link to="/contact" className="relative inline-block px-8 py-3 rounded-xl text-white font-bold text-sm overflow-hidden">
              <span className="absolute inset-0 brand-gradient" />
              <span className="relative z-10">Book Free Call →</span>
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link to="/resources" className="text-[#4CFFE7] text-sm hover:underline">← Back to all blogs</Link>
        </div>
      </motion.div>
    </div>
  )
}