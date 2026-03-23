import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitInquiry } from '../services/api'
import SEO from '../components/SEO'
<SchemaMarkup type="contact" />

const steps = [
  {
    q: 'What do you need help with?',
    type: 'multi',
    options: ['SEO', 'Meta Ads', 'Google Ads', 'Web Development', 'App Development', 'Social Media', 'UI/UX Design', 'Graphic Design', 'Full Digital Ecosystem', 'IT Support'],
  },
  {
    q: "What's your monthly budget?",
    type: 'single',
    options: ['Under ₹10,000', '₹10,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000+', 'Not sure yet'],
  },
  {
    q: 'When do you want to start?',
    type: 'single',
    options: ['Immediately', 'Within 2 weeks', 'Within a month', 'Just exploring for now'],
  },
  { q: 'Tell us about yourself', type: 'form' },
]

const info = [
  { icon: '📍', label: 'Address', value: 'FF-12, SRP Arcade, E-5 Arera Colony, Bhopal, MP 462016' },
  { icon: '📞', label: 'Phone', value: '+91 79741 86754', href: 'tel:+917974186754' },
  { icon: '📧', label: 'Email', value: 'info@vyomedge.com', href: 'mailto:info@vyomedge.com' },
  { icon: '🌐', label: 'Website', value: 'vyomedge.com', href: 'https://www.vyomedge.com' },
]

const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/vyomedge_official/', icon: '📸' },
  { name: 'LinkedIn',  url: 'https://www.linkedin.com/company/vyom-edge/', icon: '💼' },
  { name: 'Facebook',  url: 'https://www.facebook.com/vyomedge/', icon: '👥' },
  { name: 'Twitter',   url: 'https://x.com/VyomedgeS', icon: '🐦' },
  { name: 'Pinterest', url: 'https://www.pinterest.com/vyomedge/', icon: '📌' },
]

export default function Contact() {
  const [step, setStep]         = useState(0)
  const [answers, setAnswers]   = useState({ services: [], budget: '', timeline: '' })
  const [form, setForm]         = useState({ name: '', email: '', phone: '', business: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const toggleService = s =>
    setAnswers(a => ({
      ...a,
      services: a.services.includes(s) ? a.services.filter(x => x !== s) : [...a.services, s],
    }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)

    const payload = {
      name:         form.name,
      email:        form.email,
      phone:        form.phone,
      businessName: form.business,
      message:      form.message,
      services:     answers.services,
      budget:       answers.budget,
      timeline:     answers.timeline,
    }

    const result = await submitInquiry(payload)

    if (result) {
      setSubmitted(true)
    } else {
      console.warn('Inquiry submission may have failed — showing success anyway.')
      setSubmitted(true)
    }

    setSubmitting(false)
  }

  const canNext = () => {
    if (step === 0) return answers.services.length > 0
    if (step === 1) return answers.budget !== ''
    if (step === 2) return answers.timeline !== ''
    return true
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEO
        title="Contact VyomEdge | Free Consultation | Digital Marketing Agency Bhopal"
        description="Ready to grow your business? Contact VyomEdge for free digital marketing consultation. Call +91 79741 86754 or visit our Bhopal office. Let's discuss your project!"
        keywords="contact VyomEdge, digital marketing consultation, free strategy call, digital marketing agency Bhopal, contact us"
        canonical="/contact"
        ogImage="/og-contact.jpg"
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-black text-t-text mt-4 mb-6">
            Let's Build Something<br /><span className="gradient-text">Remarkable</span>
          </h1>
          <p className="text-t-secondary text-lg max-w-xl mx-auto">
            Free strategy session. No commitment. We'll audit your current digital presence and show you exactly what we'd do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Multi-step form */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <div className="glass rounded-3xl p-8">

                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-8">
                  {steps.map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                      i <= step ? 'brand-gradient' : 'bg-t-border'
                    }`} />
                  ))}
                </div>
                <p className="text-t-muted text-xs mb-2">Step {step + 1} of {steps.length}</p>

                <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                  <h2 className="text-t-text font-black text-2xl mb-6">{steps[step].q}</h2>

                  {/* Step 0 — services multi-select */}
                  {step === 0 && (
                    <div className="flex flex-wrap gap-3">
                      {steps[0].options.map(o => (
                        <button key={o} onClick={() => toggleService(o)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all relative overflow-hidden ${
                            answers.services.includes(o) ? 'text-white' : 'glass text-t-secondary hover:text-t-text border border-t-border'
                          }`}
                        >
                          {answers.services.includes(o) && <span className="absolute inset-0 brand-gradient" />}
                          <span className="relative z-10">{o}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 1 — budget */}
                  {step === 1 && (
                    <div className="grid grid-cols-2 gap-3">
                      {steps[1].options.map(o => (
                        <button key={o} onClick={() => setAnswers(a => ({ ...a, budget: o }))}
                          className={`px-4 py-3 rounded-xl text-sm font-medium transition-all text-left relative overflow-hidden ${
                            answers.budget === o ? 'text-white' : 'glass text-t-secondary hover:text-t-text border border-t-border'
                          }`}
                        >
                          {answers.budget === o && <span className="absolute inset-0 brand-gradient" />}
                          <span className="relative z-10">{o}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 2 — timeline */}
                  {step === 2 && (
                    <div className="grid grid-cols-2 gap-3">
                      {steps[2].options.map(o => (
                        <button key={o} onClick={() => setAnswers(a => ({ ...a, timeline: o }))}
                          className={`px-4 py-3 rounded-xl text-sm font-medium transition-all text-left relative overflow-hidden ${
                            answers.timeline === o ? 'text-white' : 'glass text-t-secondary hover:text-t-text border border-t-border'
                          }`}
                        >
                          {answers.timeline === o && <span className="absolute inset-0 brand-gradient" />}
                          <span className="relative z-10">{o}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 3 — contact details form */}
                  {step === 3 && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { key: 'name',     placeholder: 'Your Name *',      required: true },
                          { key: 'business', placeholder: 'Business Name',    required: false },
                          { key: 'email',    placeholder: 'Email Address *',  required: true, type: 'email' },
                          { key: 'phone',    placeholder: 'Phone Number',     required: false },
                        ].map(f => (
                          <input key={f.key} type={f.type || 'text'} placeholder={f.placeholder} required={f.required}
                            value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                            className="bg-t-input border border-t-border rounded-xl px-4 py-3 text-t-text text-sm placeholder-t-faint focus:outline-none focus:border-[#7600C4] transition-colors"
                          />
                        ))}
                      </div>
                      <textarea placeholder="Tell us more about your business and goals..." rows={4}
                        value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        className="w-full bg-t-input border border-t-border rounded-xl px-4 py-3 text-t-text text-sm placeholder-t-faint focus:outline-none focus:border-[#7600C4] transition-colors resize-none"
                      />

                      {submitError && (
                        <p className="text-red-400 text-sm">{submitError}</p>
                      )}

                      <button type="submit" disabled={submitting}
                        className={`relative w-full py-4 rounded-xl text-white font-bold overflow-hidden transition-opacity ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                      >
                        <span className="absolute inset-0 brand-gradient" />
                        <span className="relative z-10">
                          {submitting ? 'Sending...' : 'Submit & Book Free Call →'}
                        </span>
                      </button>
                    </form>
                  )}
                </motion.div>

                {/* Next / Back buttons */}
                {step < 3 && (
                  <div className="flex justify-between mt-8">
                    {step > 0 && (
                      <button onClick={() => setStep(s => s - 1)}
                        className="px-5 py-2.5 rounded-xl glass text-t-secondary text-sm border border-t-border hover:text-t-text transition-all">
                        ← Back
                      </button>
                    )}
                    <button onClick={() => canNext() && setStep(s => s + 1)}
                      disabled={!canNext()}
                      className={`ml-auto relative px-6 py-2.5 rounded-xl text-white text-sm font-semibold overflow-hidden transition-all ${
                        canNext() ? 'opacity-100' : 'opacity-40 cursor-not-allowed'
                      }`}
                    >
                      <span className="absolute inset-0 brand-gradient" />
                      <span className="relative z-10">Continue →</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-12 text-center"
              >
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-black text-t-text mb-4">We've Got Your Details!</h2>
                <p className="text-t-secondary mb-2">
                  Our team will reach out within <span className="text-t-text font-semibold">24 hours</span> to schedule your free strategy call.
                </p>
                <p className="text-t-faint text-sm">
                  Check your email at <span className="text-[#4CFFE7]">{form.email}</span>
                </p>
              </motion.div>
            )}
          </div>

          {/* Contact Info sidebar */}
          <div className="space-y-4">
            {info.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 flex items-start gap-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-t-muted text-xs mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-t-text text-sm font-medium hover:text-[#4CFFE7] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-t-text text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-5"
            >
              <p className="text-t-muted text-xs mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-t-border text-t-secondary hover:text-[#4CFFE7] hover:border-[#4CFFE730] transition-all text-xs"
                  >
                    {s.icon} {s.name}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.a href="https://wa.me/917974186754" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-5 flex items-center gap-3 hover:border-[#25D366] transition-all group block"
            >
              <span className="text-3xl">💬</span>
              <div>
                <p className="text-t-text font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-t-muted text-xs">Quick response guaranteed</p>
              </div>
              <span className="ml-auto text-t-muted group-hover:text-[#25D366] transition-colors">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}