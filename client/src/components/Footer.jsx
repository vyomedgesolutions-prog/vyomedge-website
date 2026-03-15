import { Link } from "react-router-dom"

const year = new Date().getFullYear()

const services = [
  { name: "SEO", path: "/services#seo" },
  { name: "Social Media Management", path: "/services#smm" },
  { name: "Meta Ads", path: "/services#meta-ads" },
  { name: "Google Ads", path: "/services#google-ads" },
  { name: "Web Development", path: "/services#web-dev" },
  { name: "App Development", path: "/services#app-dev" },
  { name: "UI/UX Design", path: "/services#ui-ux" },
  { name: "Graphic Design", path: "/services#graphic-design" },
  { name: "IT Support", path: "/services#it-support" },
]

const company = [
  { name: "About", path: "/about" },
  { name: "Work", path: "/portfolio" },
  { name: "Resources", path: "/resources" },
  { name: "Tools", path: "/tools" },
  { name: "Contact", path: "/contact" },
]

const socials = [
  { name: "Facebook", url: "https://www.facebook.com/vyomedge/" },
  { name: "Instagram", url: "https://www.instagram.com/vyomedge_official/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/vyom-edge/" },
  { name: "Pinterest", url: "https://www.pinterest.com/vyomedge/" },
  { name: "Twitter", url: "https://x.com/VyomedgeS" },
]

export default function Footer() {
  return (
    <footer className="border-t border-t-border bg-t-bg pt-20 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">

            <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
              <img
                src="/logo.png"
                alt="VyomEdge"
                loading="lazy"
                className="h-10 w-auto"
                onError={(e) => { e.target.style.display = "none" }}
              />

              <span className="text-t-text font-black text-xl">
                Vyom<span className="gradient-text">Edge</span>
              </span>
            </Link>

            <p className="text-t-secondary text-sm leading-relaxed max-w-sm mb-6">
              Your full-stack digital growth partner based in Bhopal, India.
              We design, develop and market your entire digital ecosystem — under one roof.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-xs text-t-muted hover:text-[#4CFFE7] transition-colors border border-t-border hover:border-[#4CFFE730] px-3 py-1.5 rounded-full"
                >
                  {s.name}
                </a>
              ))}
            </div>

          </div>

          {/* Services */}
          <div>

            <h4 className="text-t-text font-semibold text-sm mb-4">
              Services
            </h4>

            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    to={s.path}
                    className="text-t-muted text-sm hover:text-[#4CFFE7] transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Company */}
          <div>

            <h4 className="text-t-text font-semibold text-sm mb-4">
              Company
            </h4>

            <ul className="space-y-2 mb-8">
              {company.map((c) => (
                <li key={c.name}>
                  <Link
                    to={c.path}
                    className="text-t-muted text-sm hover:text-[#4CFFE7] transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-t-text font-semibold text-sm mb-3">
              Contact
            </h4>

            <div className="space-y-2 text-sm text-t-muted">

              <p>FF-12, SRP Arcade, E-5 Arera Colony</p>
              <p>Bhopal, MP 462016, India</p>

              <a
                href="tel:+917974186754"
                className="block hover:text-[#4CFFE7] transition-colors"
              >
                +91 79741 86754
              </a>

              <a
                href="mailto:info@vyomedge.com"
                className="block hover:text-[#4CFFE7] transition-colors"
              >
                info@vyomedge.com
              </a>

              <a
                href="https://www.vyomedge.com"
                className="block hover:text-[#4CFFE7] transition-colors"
              >
                vyomedge.com
              </a>

            </div>

          </div>

        </div>

        {/* Bottom bar */}

        <div className="border-t border-t-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-t-faint text-xs">
            &copy; {year} VyomEdge. All rights reserved.
          </p>

          <p className="text-t-faint text-xs">
            From Bhopal to the digital universe — crafted by VyomEdge.
          </p>

        </div>

      </div>
    </footer>
  )
}