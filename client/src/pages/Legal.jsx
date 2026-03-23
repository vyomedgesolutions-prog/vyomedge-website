import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const policies = {
  'privacy-policy': {
    title: 'Privacy Policy',
    seoTitle: 'Privacy Policy | VyomEdge',
    seoDesc: 'Read VyomEdge\'s privacy policy to understand how we collect, use and protect your personal information.',
    lastUpdated: 'March 2026',
    sections: [
      {
        heading: 'Information We Collect',
        content: `When you visit vyomedge.com or contact us, we may collect the following information:
- Name, email address, phone number and business name submitted via contact forms
- Usage data such as pages visited, time spent and browser type
- IP address and location data for analytics purposes
- Any information you voluntarily provide in messages or inquiries`
      },
      {
        heading: 'How We Use Your Information',
        content: `We use the information we collect to:
- Respond to your inquiries and provide the services you request
- Send updates, newsletters or marketing communications (only if you opt in)
- Improve our website and services based on usage patterns
- Comply with legal obligations
We do not sell, trade or rent your personal information to third parties.`
      },
      {
        heading: 'Cookies',
        content: `Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:
- Essential cookies for website functionality
- Analytics cookies to understand how visitors use our site (Google Analytics)
- Preference cookies to remember your settings
You can control cookies through your browser settings at any time.`
      },
      {
        heading: 'Third-Party Services',
        content: `We may use third-party services including Google Analytics, Meta Pixel and other marketing tools. These services have their own privacy policies and may collect data independently. We are not responsible for their privacy practices.`
      },
      {
        heading: 'Data Security',
        content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet is 100% secure.`
      },
      {
        heading: 'Your Rights',
        content: `You have the right to:
- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data
- Opt out of marketing communications at any time
To exercise these rights, contact us at info@vyomedge.com.`
      },
      {
        heading: 'Contact Us',
        content: `For any privacy-related questions or concerns, contact us at:
Email: info@vyomedge.com
Address: FF-12, SRP Arcade, E-5 Arera Colony, Bhopal, MP 462016`
      }
    ]
  },

  'terms': {
    title: 'Terms & Conditions',
    seoTitle: 'Terms & Conditions | VyomEdge',
    seoDesc: 'Read the terms and conditions governing your use of VyomEdge\'s website and services.',
    lastUpdated: 'March 2026',
    sections: [
      {
        heading: 'Acceptance of Terms',
        content: `By accessing and using vyomedge.com, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.`
      },
      {
        heading: 'Services',
        content: `VyomEdge provides digital marketing and IT services including SEO, social media management, paid advertising, web development, app development, UI/UX design and related services. The scope, timeline and deliverables for each project are defined in individual service agreements.`
      },
      {
        heading: 'Intellectual Property',
        content: `All content on this website including text, graphics, logos, images and software is the property of VyomEdge and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works without our express written permission.
Upon full payment, clients receive ownership rights to deliverables as specified in their service agreement.`
      },
      {
        heading: 'Client Responsibilities',
        content: `Clients are responsible for:
- Providing accurate and complete information required for service delivery
- Timely review and feedback on deliverables
- Ensuring they have rights to any content, images or materials provided to VyomEdge
- Payment as per agreed terms`
      },
      {
        heading: 'Payment Terms',
        content: `Payment terms are specified in individual service agreements. Generally:
- A percentage advance is required before work begins
- Remaining payment is due upon project completion or as per milestone schedule
- Late payments may result in work stoppage
- Refunds are subject to the refund policy in your service agreement`
      },
      {
        heading: 'Limitation of Liability',
        content: `VyomEdge shall not be liable for any indirect, incidental, special or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client for the specific service in question. We do not guarantee specific results from digital marketing campaigns as outcomes depend on multiple external factors.`
      },
      {
        heading: 'Termination',
        content: `Either party may terminate services with written notice as per the service agreement. Upon termination, the client will be billed for work completed up to the termination date.`
      },
      {
        heading: 'Governing Law',
        content: `These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Bhopal, Madhya Pradesh.`
      },
      {
        heading: 'Contact',
        content: `For questions about these terms, contact us at info@vyomedge.com`
      }
    ]
  },

  'disclaimer': {
    title: 'Disclaimer',
    seoTitle: 'Disclaimer | VyomEdge',
    seoDesc: 'Read the VyomEdge disclaimer regarding the use of our website and information provided.',
    lastUpdated: 'March 2026',
    sections: [
      {
        heading: 'General Disclaimer',
        content: `The information provided on vyomedge.com is for general informational purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy or reliability of the information on this website.`
      },
      {
        heading: 'No Guarantee of Results',
        content: `Digital marketing results vary significantly based on industry, competition, budget, market conditions and many other factors outside our control. Any case studies, testimonials or examples of results on this website are not guarantees that you will achieve similar results. Past performance does not guarantee future results.`
      },
      {
        heading: 'External Links',
        content: `Our website may contain links to external websites. These links are provided for your convenience. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.`
      },
      {
        heading: 'Professional Advice',
        content: `The content on this website does not constitute professional legal, financial or business advice. You should consult with appropriate professionals before making any business decisions.`
      },
      {
        heading: 'Changes to Information',
        content: `We reserve the right to modify or remove any information on this website at any time without notice. Prices, services and availability are subject to change.`
      }
    ]
  },

  'cookies': {
    title: 'Cookie Policy',
    seoTitle: 'Cookie Policy | VyomEdge',
    seoDesc: 'Learn how VyomEdge uses cookies and how you can control your cookie preferences.',
    lastUpdated: 'March 2026',
    sections: [
      {
        heading: 'What Are Cookies',
        content: `Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences and understand how you use the site. Cookies do not contain personally identifiable information by themselves.`
      },
      {
        heading: 'How We Use Cookies',
        content: `We use cookies for the following purposes:
- Essential cookies: Required for the website to function properly. These cannot be disabled.
- Analytics cookies: Help us understand how visitors interact with our website using tools like Google Analytics.
- Marketing cookies: Used to track visitors across websites for advertising purposes (Meta Pixel, Google Ads).
- Preference cookies: Remember your settings like theme preference (dark/light mode).`
      },
      {
        heading: 'Third-Party Cookies',
        content: `We use third-party services that may set their own cookies:
- Google Analytics — tracks website usage and user behaviour
- Meta Pixel — tracks conversions from Facebook and Instagram ads
- Google Ads — tracks ad campaign performance
These third parties have their own cookie policies.`
      },
      {
        heading: 'Managing Cookies',
        content: `You can control and manage cookies in several ways:
- Browser settings: Most browsers allow you to block or delete cookies through settings
- Opt-out tools: Google provides an opt-out browser add-on at tools.google.com/dlpage/gaoptout
- Meta: You can manage ad preferences at facebook.com/ads/preferences
Note that disabling cookies may affect the functionality of some parts of our website.`
      },
      {
        heading: 'Cookie Consent',
        content: `By continuing to use our website, you consent to the use of cookies as described in this policy. If you do not agree, please adjust your browser settings or stop using the website.`
      },
      {
        heading: 'Contact Us',
        content: `For questions about our cookie policy, email us at info@vyomedge.com`
      }
    ]
  }
}

export default function Legal() {
  const { type } = useParams()
  const policy = policies[type]

  if (!policy) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black text-t-text mb-4">Page Not Found</h1>
          <Link to="/" className="text-[#4CFFE7] hover:underline">← Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEO
        title={policy.seoTitle}
        description={policy.seoDesc}
        canonical={`/legal/${type}`}
      />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          {/* Back link */}
          <Link to="/" className="text-t-muted text-sm hover:text-[#4CFFE7] transition-colors mb-8 block">
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-t-text mb-3">
              {policy.title}
            </h1>
            <p className="text-t-muted text-sm">Last updated: {policy.lastUpdated}</p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {policy.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6"
              >
                <h2 className="text-t-text font-bold text-lg mb-3">{section.heading}</h2>
                <p className="text-t-secondary text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-12 pt-8 border-t border-t-border">
            <p className="text-t-muted text-xs mb-4">Other legal documents:</p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(policies).map(([key, p]) => (
                key !== type && (
                  <Link key={key} to={`/legal/${key}`}
                    className="text-xs px-3 py-1.5 rounded-full border border-t-border text-t-muted hover:text-[#4CFFE7] hover:border-[#4CFFE730] transition-all">
                    {p.title}
                  </Link>
                )
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  )
}