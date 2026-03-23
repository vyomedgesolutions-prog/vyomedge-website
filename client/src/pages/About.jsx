import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import SchemaMarkup from '../components/SchemaMarkup'
<SchemaMarkup type="about" />

const timeline = [
  { year: '2021', title: 'VyomEdge Founded', desc: 'Started as a small web development studio in Bhopal with a vision to be a full-stack digital partner for Indian businesses.' },
  { year: '2022', title: 'First 10 Clients', desc: 'Expanded into SEO and social media. Built our first MERN stack websites and started delivering measurable results.' },
  { year: '2023', title: 'Digital Marketing Wing', desc: 'Launched Meta Ads and Google Ads services. Achieved first 10x ROAS for a client. Team grew to 5 members.' },
  { year: '2024', title: 'Full Ecosystem Model', desc: "Introduced the Full Digital Ecosystem offering — logo to launch under one roof. Poornam Events and Jaiswal Piles Clinic built from scratch." },
  { year: '2025', title: 'Scale & Results', desc: 'The SuperC hits 1.3M impressions. Zentrail achieves 18x ROAS. Madhuban Eco Retreat reaches top 5 on Google. 10+ MERN sites live.' },
  { year: '2026', title: 'Building the Future', desc: "Launching free digital tools, expanding into app development and IT support. Growing pan-India with data-first strategies." },
]

const values = [
  { icon: '🎯', title: 'Results First', desc: "We measure everything. If it doesn't move the needle, we change it. No vanity metrics." },
  { icon: '🤝', title: 'One Team', desc: "We work as an extension of your team, not a vendor. Your wins are our wins." },
  { icon: '🔍', title: 'Radical Transparency', desc: 'You see every number, every report, every decision. No black boxes.' },
  { icon: '🚀', title: 'Always Evolving', desc: "Digital changes fast. We stay ahead so you don't have to." },
]

const stats = [
  { value: '10+', label: 'Businesses Built from Scratch' },
  { value: '18x', label: 'Best ROAS Achieved' },
  { value: '1.3M+', label: 'Impressions Generated' },
  { value: '₹46', label: 'Lowest CPL on Meta Ads' },
]

const team = [
  { name: 'Mousam Kourav', role: 'Founder & Digital Strategist', desc: 'Leads strategy, SEO and content. Author of 5+ high-ranking blogs on digital marketing trends.', icon: '👨‍💻' },
  { name: 'Mitali Pawar', role: 'Content & Marketing Lead', desc: 'Drives content strategy, social media and brand storytelling across all client accounts.', icon: '✍️' },
  { name: 'Rajul', role: 'Web Developer', desc: 'Full-stack MERN developer. Has built and launched 10+ custom websites for clients.', icon: '⚡' },
]

const clients = [
  'Zentrail','Poornam Events','Madhuban Eco Retreat','The SuperC',
  'Jaiswal Piles Clinic','Fullmoon Holidays','Shikso','Dream Home Styling',
  'Pallavi Social Healthcare','Authorizenet.biz','Paliwal Caterers','Mithi Sweets',
]

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEO
        title="About VyomEdge | Digital Marketing Experts in Bhopal | Our Story"
        description="Meet the team behind VyomEdge - Bhopal's trusted digital marketing agency. Learn about our mission, values & commitment to helping businesses grow online."
        keywords="about VyomEdge, digital marketing agency Bhopal, digital marketing experts, VyomEdge team, Bhopal marketing company"
        canonical="/about"
        ogImage="/og-about.jpg"
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          className="text-center mb-24"
        >
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">
            Our Story
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-t-text mt-4 mb-6">
            We Practice
            <br/>
            <span className="gradient-text">What We Preach</span>
          </h1>

          <p className="text-t-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            VyomEdge is a full-stack digital growth partner based in Bhopal, India.
            We don&apos;t just advise — we build, market and scale real businesses with real results.
          </p>
        </motion.div>


        {/* STATS */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {stats.map((s,i)=>(
            <div key={i} className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl font-black gradient-text mb-2">
                {s.value}
              </div>
              <div className="text-t-secondary text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>


        {/* MISSION */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="glass rounded-3xl p-10 md:p-14 mb-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 brand-gradient" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-sm font-semibold tracking-widest uppercase gradient-text">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-t-text mt-4 mb-6">
              Every Indian business deserves a strong digital presence — regardless of size.
            </h2>

            <p className="text-t-secondary leading-relaxed text-lg">
              Too many great businesses in India are invisible online.
              They have amazing products and services but no digital voice.
              VyomEdge exists to change that — by combining strategy,
              technology and marketing into one unified growth system that actually works.
            </p>
          </div>
        </motion.div>


        {/* TIMELINE */}
        <div className="mb-24">

          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold tracking-widest uppercase gradient-text">
              Our Journey
            </span>

            <h2 className="text-4xl font-black text-t-text mt-3">
              From Studio to <span className="gradient-text">Growth Partner</span>
            </h2>
          </motion.div>

          <div className="relative">

            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px brand-gradient opacity-20"/>

            <div className="space-y-8">
              {timeline.map((t,i)=>(
                <motion.div
                  key={i}
                  initial={{ opacity:0, x:i%2===0?-30:30 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:i*0.1 }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i%2===0 ? 'md:flex-row':'md:flex-row-reverse'}`}
                >

                  <div className="md:w-1/2 pl-12 md:pl-0">
                    <div className="glass rounded-2xl p-6">
                      <div className="gradient-text font-black text-2xl mb-1">
                        {t.year}
                      </div>

                      <h3 className="text-t-text font-bold text-lg mb-2">
                        {t.title}
                      </h3>

                      <p className="text-t-muted text-sm leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex md:w-1/2"/>

                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full brand-gradient md:-translate-x-2 shadow-lg"/>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        {/* VALUES */}
        <div className="mb-24">

          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold tracking-widest uppercase gradient-text">
              What Drives Us
            </span>

            <h2 className="text-4xl font-black text-t-text mt-3">
              Our <span className="gradient-text">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v,i)=>(
              <motion.div
                key={i}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.1 }}
                className="glass rounded-2xl p-6 text-center hover:border-t-border transition-all"
              >
                <div className="text-4xl mb-4">{v.icon}</div>

                <h3 className="text-t-text font-bold mb-2">
                  {v.title}
                </h3>

                <p className="text-t-muted text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* TEAM */}
        <div className="mb-24">

          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold tracking-widest uppercase gradient-text">
              The Team
            </span>

            <h2 className="text-4xl font-black text-t-text mt-3">
              People Behind <span className="gradient-text">Your Growth</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m,i)=>(
              <motion.div
                key={i}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.1 }}
                className="glass rounded-2xl p-8 text-center hover:border-t-border transition-all"
              >
                <div className="w-16 h-16 rounded-2xl brand-gradient flex items-center justify-center text-3xl mx-auto mb-4">
                  {m.icon}
                </div>

                <h3 className="text-t-text font-bold text-lg mb-1">
                  {m.name}
                </h3>

                <p className="text-t-accent text-sm mb-3">
                  {m.role}
                </p>

                <p className="text-t-muted text-sm leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* CLIENTS */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="mb-24"
        >

          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-widest uppercase gradient-text">
              Trusted By
            </span>

            <h2 className="text-4xl font-black text-t-text mt-3">
              Businesses We&apos;ve <span className="gradient-text">Grown</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {clients.map((c,i)=>(
              <motion.span
                key={i}
                initial={{ opacity:0, scale:0.8 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.05 }}
                className="glass px-4 py-2 rounded-full text-t-secondary text-sm hover:text-t-text hover:border-t-border transition-all cursor-default"
              >
                {c}
              </motion.span>
            ))}
          </div>

        </motion.div>


        {/* CTA */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden"
        >

          <div className="absolute inset-0 opacity-5 brand-gradient"/>

          <div className="relative z-10">

            <h2 className="text-3xl md:text-4xl font-black text-t-text mb-4">
              Ready to Be Our Next
              <br/>
              <span className="gradient-text">Success Story?</span>
            </h2>

            <p className="text-t-secondary mb-8 max-w-md mx-auto">
              Join 12+ businesses who trusted VyomEdge to build and grow their digital presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                to="/contact"
                className="relative px-8 py-4 rounded-xl text-white font-bold overflow-hidden"
              >
                <span className="absolute inset-0 brand-gradient"/>
                <span className="relative z-10">
                  Start Your Journey →
                </span>
              </Link>

              <Link
                to="/portfolio"
                className="px-8 py-4 rounded-xl border border-t-border text-t-text font-semibold hover:border-t-border transition-all"
              >
                See Our Work
              </Link>

            </div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}