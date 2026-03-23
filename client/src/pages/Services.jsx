import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import SEO from "../components/SEO"
<SchemaMarkup type="services" />

const services = [
  { id:'seo',icon:'🔍',title:'Search Engine Optimization',short:'SEO',tagline:'Rank higher. Get found. Grow organically.',
    deliverables:['Technical SEO Audit','Keyword Strategy','On-Page Optimization','Link Building','Local SEO & GMB','Monthly Reporting'] },

  { id:'smm',icon:'📱',title:'Social Media Management',short:'SMM',tagline:'Content that converts. Communities that grow.',
    deliverables:['Content Calendar','Graphic Design','Caption & Copy','Community Management','Story & Reels','Analytics Reports'] },

  { id:'meta-ads',icon:'🎯',title:'Meta Ads',short:'Meta Ads',tagline:'Every rupee accountable. Every lead counted.',
    deliverables:['Campaign Strategy','Creative & Copy','Audience Targeting','Pixel & Conversion Setup','A/B Testing','ROAS Optimization'] },

  { id:'google-ads',icon:'🔎',title:'Google Ads',short:'Google Ads',tagline:'Show up when it matters most.',
    deliverables:['Search Campaigns','Display Network','Performance Max','Keyword Bidding','Landing Page Advice','Conversion Tracking'] },

  { id:'web-dev',icon:'💻',title:'Web Development',short:'Web Dev',tagline:'Fast. Scalable. SEO-ready.',
    deliverables:['MERN Development','SEO Architecture','Admin Panel','API Integration','Cloud Deployment','Performance Optimization'] },

  { id:'app-dev',icon:'📲',title:'App Development',short:'App Dev',tagline:'Mobile-first experiences.',
    deliverables:['React Native','UI/UX Design','Backend API','Push Notifications','App Store Submission','Post-Launch Support'] },

  { id:'ui-ux',icon:'🎨',title:'UI/UX Design',short:'UI/UX',tagline:'Design that thinks.',
    deliverables:['UX Research','Wireframes','High Fidelity Design','Design System','Prototyping','Figma Handoff'] },

  { id:'graphic-design',icon:'✏️',title:'Graphic Design',short:'Design',tagline:'Visuals that stop the scroll.',
    deliverables:['Brand Identity','Social Creatives','Marketing Collateral','Presentations','Print Design','Brand Guidelines'] },

  { id:'it-support',icon:'🛠️',title:'IT Support',short:'IT',tagline:'Your tech backbone.',
    deliverables:['Hosting','Domain Setup','Email Setup','Server Maintenance','Security Audits','Tech Consulting'] }
]

export default function Services(){

  const location = useLocation()
  const [active,setActive] = useState(null)
  const serviceRefs = useRef({})

  useEffect(() => {

    if (!location.hash) return

    const id = location.hash.replace("#", "")

    const service = services.find(s => s.id === id)

    if (service) {
      setActive(service)
    }

    const element = serviceRefs.current[id]

    if (element) {

      setTimeout(() => {

        const offset = 120

        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          offset

        window.scrollTo({
          top: y,
          behavior: "smooth"
        })

      }, 200)

    }

  }, [location])

  return(

    <div className="min-h-screen pt-28 pb-20">
      <SEO
        title="Digital Marketing Services in Bhopal | SEO, Web Dev, Ads"
        description="Explore VyomEdge's digital marketing services: SEO, web development, Meta Ads, social media marketing & branding. Results-driven solutions for Bhopal businesses."
        keywords="digital marketing services Bhopal, SEO services, web development, Meta Ads, Google Ads, social media marketing, branding agency"
        canonical="/services"
        ogImage="/og-services.jpg"
      />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">

          {services.map((s,i)=>{

            return(

              <motion.div
                id={s.id}
                key={s.id}
                ref={(el)=>{ serviceRefs.current[s.id] = el }}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:i*0.06}}
                onClick={()=>setActive(active?.id===s.id?null:s)}
                className="glass rounded-2xl p-6 cursor-pointer"
              >

                <div className="flex items-start justify-between mb-4">

                  <span className="text-4xl">{s.icon}</span>

                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-cyan-700 dark:bg-[#7600C420] dark:text-[#4CFFE7]">
                    {s.short}
                  </span>

                </div>

                <h3 className="text-t-text font-bold text-lg mb-1">
                  {s.title}
                </h3>

                <p className="text-cyan-700 dark:text-[#4CFFE7] text-xs font-medium mb-3">
                  {s.tagline}
                </p>

                <AnimatePresence>

                  {active?.id===s.id &&(

                    <motion.div
                      initial={{height:0,opacity:0}}
                      animate={{height:"auto",opacity:1}}
                      exit={{height:0,opacity:0}}
                    >

                      <div className="mt-4 pt-4 border-t border-t-border">

                        {s.deliverables.map((d,idx)=>(
                          <div key={idx} className="text-sm text-t-secondary mb-1">
                            • {d}
                          </div>
                        ))}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            )

          })}

        </div>

        <div className="text-center">

          <Link
            to="/contact"
            className="px-8 py-4 rounded-xl brand-gradient text-white font-bold"
          >
            Book Free Strategy Call →
          </Link>

        </div>

      </div>

    </div>

  )

}