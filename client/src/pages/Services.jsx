import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🔍',
    title: 'Search Engine Optimization',
    short: 'SEO',
    color: '#D300E5',
    tagline: 'Rank higher. Get found. Grow organically.',
    description: 'We build SEO strategies that compound over time. Technical audits, keyword research, on-page optimization, link building — all data-driven and tailored to Indian markets.',
    deliverables: ['Technical SEO Audit', 'Keyword Strategy', 'On-Page Optimization', 'Link Building', 'Local SEO & GMB', 'Monthly Reporting'],
    results: { metric: '300+', label: 'Keywords Ranked', client: 'Zentrail' },
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    short: 'SMM',
    color: '#7600C4',
    tagline: 'Content that converts. Communities that grow.',
    description: 'Platform-native content strategy and community management across Instagram, Facebook, LinkedIn and more. We handle everything from content creation to engagement.',
    deliverables: ['Content Calendar', 'Graphic Design', 'Caption & Copy', 'Community Management', 'Story & Reels', 'Analytics Reports'],
    results: { metric: '10+', label: 'Brands Managed', client: 'Multiple Clients' },
  },
  {
    icon: '🎯',
    title: 'Meta Ads',
    short: 'Meta Ads',
    color: '#D300E5',
    tagline: 'Every rupee accountable. Every lead counted.',
    description: 'Facebook & Instagram ad campaigns engineered for ROI. From creative strategy to pixel setup, audience targeting, A/B testing and scaling — we make your ad spend work harder.',
    deliverables: ['Campaign Strategy', 'Creative & Copy', 'Audience Targeting', 'Pixel & Conversion Setup', 'A/B Testing', 'ROAS Optimization'],
    results: { metric: '18x', label: 'ROAS Achieved', client: 'Zentrail' },
  },
  {
    icon: '🔎',
    title: 'Google Ads',
    short: 'Google Ads',
    color: '#7600C4',
    tagline: 'Show up when it matters most.',
    description: 'Search, Display, Performance Max and YouTube campaigns built to capture high-intent traffic and convert. We manage bidding, quality scores and landing page alignment.',
    deliverables: ['Search Campaigns', 'Display Network', 'Performance Max', 'Keyword Bidding', 'Landing Page Advice', 'Conversion Tracking'],
    results: { metric: '6.7%', label: 'Avg CTR', client: 'Madhuban Eco Retreat' },
  },
  {
    icon: '💻',
    title: 'Web Development',
    short: 'Web Dev',
    color: '#4CFFE7',
    tagline: 'Fast. Scalable. SEO-ready. Built on MERN.',
    description: 'Custom websites and web applications built on the MERN stack (MongoDB, Express, React, Node.js). Every site we build is optimized for speed, SEO and conversions from day one.',
    deliverables: ['MERN Stack Development', 'SEO-Ready Architecture', 'Admin Panel / CMS', 'API Integration', 'Cloud Deployment', 'Performance Optimization'],
    results: { metric: '10+', label: 'MERN Sites Launched', client: 'Multiple Clients' },
  },
  {
    icon: '📲',
    title: 'App Development',
    short: 'App Dev',
    color: '#D300E5',
    tagline: 'Mobile-first experiences your users will love.',
    description: 'Android and iOS apps built with React Native. We handle UI/UX, backend APIs, push notifications, app store submissions and post-launch support.',
    deliverables: ['React Native Development', 'UI/UX Design', 'Backend API', 'Push Notifications', 'App Store Submission', 'Post-Launch Support'],
    results: { metric: 'Cross', label: 'Platform Apps', client: 'Android & iOS' },
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    short: 'UI/UX',
    color: '#7600C4',
    tagline: 'Design that thinks before it looks.',
    description: 'Figma-first design systems built for real users. We conduct UX research, create wireframes, design high-fidelity prototypes and build component libraries that developers love.',
    deliverables: ['UX Research', 'Wireframing', 'High-Fidelity Design', 'Design System', 'Prototyping', 'Figma Handoff'],
    results: { metric: '100%', label: 'Custom Designs', client: 'No Templates' },
  },
  {
    icon: '✏️',
    title: 'Graphic Design',
    short: 'Design',
    color: '#4CFFE7',
    tagline: 'Visuals that stop the scroll.',
    description: 'Brand identity, social media creatives, marketing collateral, presentations and more. We create design assets that are on-brand, conversion-focused and built to scale.',
    deliverables: ['Logo & Brand Identity', 'Social Media Creatives', 'Marketing Collateral', 'Presentations', 'Print Design', 'Brand Guidelines'],
    results: { metric: '500+', label: 'Creatives Delivered', client: 'Multiple Clients' },
  },
  {
    icon: '🛠️',
    title: 'IT Support',
    short: 'IT',
    color: '#D300E5',
    tagline: 'Your tech backbone. Always on.',
    description: 'End-to-end IT support for businesses — hosting, domain management, email setup, server maintenance, security audits and technical troubleshooting.',
    deliverables: ['Hosting Management', 'Domain Setup', 'Email Configuration', 'Server Maintenance', 'Security Audits', 'Tech Consulting'],
    results: { metric: '24/7', label: 'Support Ready', client: 'All Clients' },
  },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your business, goals, audience and current digital presence.' },
  { step: '02', title: 'Strategy & Scope', desc: 'We map out a clear plan, timeline and transparent pricing. No hidden costs.' },
  { step: '03', title: 'Execution', desc: 'Agile sprints with regular check-ins, updates and measurable milestones.' },
  { step: '04', title: 'Launch & Grow', desc: 'Go live with confidence. Then we optimize, iterate and scale continuously.' },
]

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">What We Do</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-6">
            One Roof.<br />
            <span className="gradient-text">Every Service.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stop juggling multiple agencies. We handle your entire digital ecosystem — strategy, design, development and marketing — as one unified team.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setActive(active?.title === s.title ? null : s)}
              className="glass rounded-2xl p-6 cursor-pointer group hover:border-[#7600C440] transition-all relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${s.color}12, transparent 60%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{s.icon}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#7600C420] text-[#4CFFE7]">{s.short}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-[#4CFFE7] text-xs font-medium mb-3">{s.tagline}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{s.description}</p>

                {/* Result pill */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-white font-black text-lg">{s.results.metric}</div>
                  <div>
                    <div className="text-gray-400 text-xs">{s.results.label}</div>
                    <div className="text-gray-600 text-xs">{s.results.client}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#4CFFE7] text-xs font-medium">
                    {active?.title === s.title ? 'Hide details ↑' : 'See deliverables ↓'}
                  </span>
                </div>

                {/* Expandable deliverables */}
                <AnimatePresence>
                  {active?.title === s.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-[#1A1A2E]">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Deliverables</p>
                        <div className="grid grid-cols-2 gap-2">
                          {s.deliverables.map((d, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                              <span className="w-1 h-1 rounded-full bg-[#4CFFE7] flex-shrink-0" />
                              {d}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase gradient-text">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Simple. Structured.<br /><span className="gradient-text">Accountable.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 relative"
              >
                <div className="text-5xl font-black gradient-text mb-4">{p.step}</div>
                <h3 className="text-white font-bold mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#7600C4] text-xl z-10">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 brand-gradient" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Book a free 30-min strategy call. We'll audit your current digital presence and recommend exactly what will move the needle for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="relative px-8 py-4 rounded-xl text-white font-bold overflow-hidden">
                <span className="absolute inset-0 brand-gradient" />
                <span className="relative z-10">Book Free Strategy Call →</span>
              </Link>
              <Link to="/portfolio" className="px-8 py-4 rounded-xl border border-[#1A1A2E] text-white font-semibold hover:border-[#7600C440] transition-all">
                See Our Results First
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}