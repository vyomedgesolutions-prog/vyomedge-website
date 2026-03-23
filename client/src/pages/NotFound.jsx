import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const glitchLines = ['404', '4Ø4', '4!4', '404']

const suggestions = [
  { label: 'Home',      to: '/',          icon: '🏠' },
  { label: 'Our Work',  to: '/portfolio', icon: '📊' },
  { label: 'Services',  to: '/services',  icon: '⚡' },
  { label: 'Contact',   to: '/contact',   icon: '💬' },
]

export default function NotFound() {
  const navigate   = useNavigate()
  const glitchRef  = useRef(null)
  const frameRef   = useRef(null)
  const idxRef     = useRef(0)

  // Glitch number animation
  useEffect(() => {
    let t
    const cycle = () => {
      idxRef.current = (idxRef.current + 1) % glitchLines.length
      if (glitchRef.current) glitchRef.current.textContent = glitchLines[idxRef.current]
      t = setTimeout(cycle, idxRef.current === 0 ? 2400 : 120)
    }
    t = setTimeout(cycle, 1800)
    return () => clearTimeout(t)
  }, [])

  // Floating particle canvas
  useEffect(() => {
    const canvas = frameRef.current
    if (!canvas) return
    const ctx    = canvas.getContext('2d')
    let raf
    const W = canvas.width  = canvas.offsetWidth
    const H = canvas.height = canvas.offsetHeight

    const dots = Array.from({ length: 38 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.5 + 0.15,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      dots.forEach(d => {
        d.x += d.dx; d.y += d.dy
        if (d.x < 0) d.x = W
        if (d.x > W) d.x = 0
        if (d.y < 0) d.y = H
        if (d.y > H) d.y = 0
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(76,255,231,${d.o})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-6">

      {/* Particle canvas background */}
      <canvas ref={frameRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(118,0,196,0.18) 0%, transparent 70%)' }} />

      <div className="relative z-10 text-center max-w-2xl mx-auto">

        {/* Glitch 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-2"
        >
          <span
            ref={glitchRef}
            className="font-black gradient-text select-none"
            style={{ fontSize: 'clamp(100px, 22vw, 180px)', lineHeight: 1, letterSpacing: '-0.04em' }}
          >
            404
          </span>
        </motion.div>

        {/* Dialogue headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-black text-white mb-4"
        >
          Houston, this page went{' '}
          <span className="gradient-text">off the grid.</span>
        </motion.h1>

        {/* Witty sub-copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="glass rounded-2xl p-6 mb-8 text-left space-y-3"
        >
          <p className="text-gray-300 text-sm leading-relaxed">
            <span className="text-[#4CFFE7] font-semibold">VyomEdge AI:</span>{' '}
            "I've scanned every corner of the digital universe and this URL doesn't exist.
            Either it moved, got deleted, or you just invented a new page — which, honestly,
            is very entrepreneurial of you."
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            <span className="text-[#D300E5] font-semibold">Also us:</span>{' '}
            "We build entire digital ecosystems for a living and somehow this one page
            slipped through. Ironic? Maybe. Fixable? Absolutely."
          </p>
        </motion.div>

        {/* Quick nav suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          {suggestions.map((s, i) => (
            <Link
              key={s.to}
              to={s.to}
              className="glass rounded-xl p-4 flex flex-col items-center gap-2 group hover:border-[#7600C440] transition-all"
            >
              <span style={{ fontSize: 22 }}>{s.icon}</span>
              <span className="text-gray-400 text-xs font-medium group-hover:text-[#4CFFE7] transition-colors">{s.label}</span>
            </Link>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate(-1)}
            className="glass px-8 py-3 rounded-xl text-gray-300 text-sm font-semibold border border-[#1A1A2E] hover:text-white hover:border-[#7600C440] transition-all"
          >
            ← Go Back
          </button>
          <Link
            to="/"
            className="relative px-8 py-3 rounded-xl text-white text-sm font-bold overflow-hidden"
          >
            <span className="absolute inset-0 brand-gradient" />
            <span className="relative z-10">Take Me Home →</span>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}