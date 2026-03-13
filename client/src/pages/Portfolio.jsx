import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const filters = ['All', 'Full Ecosystem', 'SEO', 'Meta Ads', 'Web Dev', 'Google Ads']

const cases = [
  {
    client: 'The SuperC',
    url: 'https://www.thesuperc.com/',
    category: ['SEO', 'Meta Ads'],
    tags: ['SEO', 'Meta Ads'],
    icon: '⚡',
    color: '#D300E5',
    description: 'Full SEO strategy and Meta Ads management driving massive search visibility and low-cost leads.',
    results: [
      { label: 'Total Impressions', value: '1.3M+' },
      { label: 'Total Clicks', value: '28.2K' },
      { label: 'Avg CTR', value: '2.2%' },
      { label: 'Meta Ads CPL', value: '₹49.2' },
    ],
    metrics: { da: 3, pa: 15, domain: '4Y 5M' },
  },
  {
    client: 'Zentrail',
    url: '#',
    category: ['Full Ecosystem'],
    tags: ['Full Ecosystem', 'SEO', 'Meta Ads'],
    icon: '🏔️',
    color: '#7600C4',
    description: 'Built from scratch — logo, brand, GMB, social, UI/UX, MERN web development, SEO and Meta Ads.',
    results: [
      { label: 'Meta ROAS', value: '18x' },
      { label: 'Keywords Ranked', value: '300+' },
      { label: 'Domain Authority', value: 'DA 7' },
      { label: 'Backlinks', value: '123' },
    ],
    metrics: { da: 7, pa: 15, domain: 'New' },
  },
  {
    client: 'Madhuban Eco Retreat',
    url: '#',
    category: ['SEO', 'Google Ads'],
    tags: ['SEO', 'Google Ads', 'Web Dev'],
    icon: '🌿',
    color: '#4CFFE7',
    description: 'MERN website development with advanced SEO and Google Ads management for a premium eco resort.',
    results: [
      { label: 'Total Clicks', value: '1.63K' },
      { label: 'Impressions', value: '24.4K' },
      { label: 'Avg CTR', value: '6.7%' },
      { label: 'Avg Position', value: '5.1' },
    ],
    metrics: { da: 14, pa: 16, domain: 'Active' },
  },
  {
    client: 'Poornam Events',
    url: 'https://www.poornamevents.com/',
    category: ['Full Ecosystem'],
    tags: ['Full Ecosystem', 'SEO', 'Meta Ads'],
    icon: '🎉',
    color: '#D300E5',
    description: 'Complete digital ecosystem from logo to MERN web development, SEO, social media and Meta Ads.',
    results: [
      { label: 'Impressions', value: '456K' },
      { label: 'Total Clicks', value: '5.66K' },
      { label: 'Meta Ads CPL', value: '₹65.6' },
      { label: 'Avg Position', value: '7.1' },
    ],
    metrics: { da: 3, pa: 17, domain: '8M' },
  },
  {
    client: 'Jaiswal Piles Clinic',
    url: 'https://www.jaiswalpilesclinic.com/',
    category: ['Full Ecosystem'],
    tags: ['Full Ecosystem', 'SEO', 'Meta Ads'],
    icon: '🏥',
    color: '#7600C4',
    description: 'Full digital ecosystem for a medical clinic — branding, MERN website, SEO and Meta Ads with strong CPL.',
    results: [
      { label: 'Meta Ads CPL', value: '₹46.9' },
      { label: 'Domain Authority', value: 'DA 1' },
      { label: 'Page Authority', value: 'PA 10' },
      { label: 'Services', value: 'Full Stack' },
    ],
    metrics: { da: 1, pa: 10, domain: 'New' },
  },
  {
    client: 'Fullmoon Holidays',
    url: 'https://www.fullmoonholidays.com/',
    category: ['Web Dev', 'SEO'],
    tags: ['Web Dev', 'SEO'],
    icon: '🌙',
    color: '#4CFFE7',
    description: 'MERN web development with SEO optimization for a travel and holidays brand.',
    results: [
      { label: 'Domain Authority', value: 'DA 9' },
      { label: 'Page Authority', value: 'PA 20' },
      { label: 'Domain Age', value: '1Y 6M' },
      { label: 'SS Score', value: '1' },
    ],
    metrics: { da: 9, pa: 20, domain: '1Y 6M' },
  },
  {
    client: 'Dream Home Styling',
    url: 'https://www.dreamhomestyling.com/',
    category: ['Web Dev', 'Meta Ads'],
    tags: ['Web Dev', 'Meta Ads', 'SEO'],
    icon: '🏠',
    color: '#D300E5',
    description: 'SEO-optimized MERN website, social media management, Meta Ads and GMB for a home styling brand.',
    results: [
      { label: 'Domain Authority', value: 'DA 1' },
      { label: 'Page Authority', value: 'PA 17' },
      { label: 'Services', value: 'Full Stack' },
      { label: 'Platform', value: 'MERN' },
    ],
    metrics: { da: 1, pa: 17, domain: 'Active' },
  },
  {
    client: 'Pallavi Social Healthcare',
    url: 'https://www.pallavisocialhealthcare.in/',
    category: ['Web Dev', 'SEO'],
    tags: ['Web Dev', 'SEO'],
    icon: '💚',
    color: '#4CFFE7',
    description: 'SEO-optimized website for an NGO focused on social healthcare and community welfare.',
    results: [
      { label: 'Type', value: 'NGO' },
      { label: 'Platform', value: 'Wix' },
      { label: 'Domain Authority', value: 'DA 1' },
      { label: 'Page Authority', value: 'PA 1' },
    ],
    metrics: { da: 1, pa: 1, domain: 'Active' },
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? cases : cases.filter(c => c.tags.includes(active))

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">Proof of Work</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6">
            Results That<br />
            <span className="gradient-text">Speak Louder</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every number below is real. Every client is real. This is what happens when strategy meets execution.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f
                  ? 'text-white relative overflow-hidden'
                  : 'glass text-gray-400 hover:text-white border border-[#1A1A2E]'
              }`}
            >
              {active === f && (
                <span className="absolute inset-0 brand-gradient" />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((c, i) => (
              <motion.div
                key={c.client}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(c)}
                className="glass rounded-2xl p-6 cursor-pointer group hover:border-[#7600C440] transition-all relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${c.color}15, transparent 60%)` }}
                />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {c.tags.slice(0, 2).map(t => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[#7600C420] text-[#4CFFE7]">{t}</span>
                        ))}
                      </div>
                      <h3 className="text-white font-bold text-lg group-hover:gradient-text transition-all">{c.client}</h3>
                    </div>
                    <span className="text-3xl">{c.icon}</span>
                  </div>

                  <p className="text-gray-500 text-sm mb-5 leading-relaxed line-clamp-2">{c.description}</p>

                  {/* Results grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {c.results.slice(0, 4).map((r, idx) => (
                      <div key={idx} className="bg-[#0D0D14] rounded-xl p-3">
                        <div className="text-white font-black text-lg">{r.value}</div>
                        <div className="text-gray-600 text-xs mt-0.5">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-gray-600">
                      <span>DA {c.metrics.da}</span>
                      <span>PA {c.metrics.pa}</span>
                    </div>
                    <span className="text-[#4CFFE7] text-xs font-medium group-hover:underline">View details →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 glass rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Let's build your success story. Free strategy session, no commitment required.
          </p>
          <Link
            to="/contact"
            className="relative inline-block px-10 py-4 rounded-xl text-white font-bold text-base overflow-hidden group"
          >
            <span className="absolute inset-0 brand-gradient" />
            <span className="relative z-10">Book a Free Strategy Call →</span>
          </Link>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="glass rounded-3xl p-8 max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white text-2xl leading-none"
              >×</button>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{selected.icon}</span>
                <div>
                  <h3 className="text-white font-black text-2xl">{selected.client}</h3>
                  <div className="flex gap-2 mt-1">
                    {selected.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[#7600C420] text-[#4CFFE7]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">{selected.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {selected.results.map((r, i) => (
                  <div key={i} className="bg-[#0D0D14] rounded-xl p-4">
                    <div className="text-white font-black text-xl">{r.value}</div>
                    <div className="text-gray-500 text-xs mt-1">{r.label}</div>
                  </div>
                ))}
              </div>

              {selected.url !== '#' && (
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full py-3 rounded-xl text-white font-semibold text-center text-sm overflow-hidden"
                >
                  <span className="absolute inset-0 brand-gradient" />
                  <span className="relative z-10">Visit Website →</span>
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}