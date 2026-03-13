import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { name: 'Work',      path: '/portfolio' },
  { name: 'Services',  path: '/services' },
  { name: 'Resources', path: '/resources' },
  { name: 'Tools',     path: '/tools' },
  { name: 'About',     path: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [loc])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-[#1A1A2E] py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="VyomEdge"
            className="h-10 w-auto"
            onError={e => { e.target.style.display = 'none' }}
          />
          {/* Fallback text logo if image missing */}
          <span className="text-white font-black text-xl tracking-tight">
            Vyom<span className="gradient-text">Edge</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-all relative group ${
                loc.pathname === l.path ? 'text-[#4CFFE7]' : 'text-gray-400 hover:text-white'
              }`}
            >
              {l.name}
              <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 brand-gradient ${
                loc.pathname === l.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="relative px-5 py-2.5 rounded-lg text-white text-sm font-semibold overflow-hidden group"
          >
            <span className="absolute inset-0 brand-gradient opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Start a Project →</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[#1A1A2E] px-6 py-6 flex flex-col gap-4"
          >
            {links.map(l => (
              <Link key={l.path} to={l.path}
                className={`text-sm font-medium py-2 ${loc.pathname === l.path ? 'text-[#4CFFE7]' : 'text-gray-400'}`}
              >
                {l.name}
              </Link>
            ))}
            <Link to="/contact"
              className="relative mt-2 px-5 py-3 rounded-lg text-white text-sm font-semibold text-center overflow-hidden"
            >
              <span className="absolute inset-0 brand-gradient" />
              <span className="relative z-10">Start a Project →</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}