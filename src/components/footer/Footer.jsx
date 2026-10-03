import React from 'react'
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react'
import { footerData } from '@/data/footerData'
import { scrollToSection } from '@/lib/utils'
import { BrandLogo } from '@/components/shared/BrandLogo'

function SocialIcon({ name, size = 14 }) {
  switch (name) {
    case 'LinkedIn':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    case 'Twitter / X':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    case 'Facebook':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
        </svg>
      )
    case 'YouTube':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77c1.56.42 7.82.42 7.82.42s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
        </svg>
      )
    case 'GitHub':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      )
    default:
      return <Globe size={size} strokeWidth={1.5} />
  }
}

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-10 border-b border-slate-800">
          
          {/* Company Info & Mission (2 cols on lg) */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <BrandLogo size="md" />
              <span className="text-xl font-bold tracking-tight text-white">
                FluxOne
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {footerData.company.slogan}
            </p>

            {/* Direct Contact info */}
            <div className="space-y-2.5 pt-1 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#8E238F] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-snug text-slate-300">{footerData.company.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#8E238F] shrink-0" strokeWidth={1.5} />
                <a href={`tel:${footerData.company.phone1}`} className="hover:text-white transition-colors font-medium">
                  {footerData.company.phone1}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#8E238F] shrink-0" strokeWidth={1.5} />
                <a href={`tel:${footerData.company.phone2}`} className="hover:text-white transition-colors font-medium">
                  {footerData.company.phone2}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#8E238F] shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${footerData.company.email}`} className="hover:text-white transition-colors break-all">
                  {footerData.company.email}
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {footerData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                >
                  <SocialIcon name={social.name} size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* 4 Link Columns (Modules, Industries, Resources, Legal) */}
          {footerData.columns.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                      }}
                      className="text-slate-400 hover:text-white transition-colors inline-block py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>{footerData.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Cookie Preferences
            </span>
            <button
              onClick={handleScrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={13} strokeWidth={1.5} />
              <span className="text-[10px] font-semibold uppercase">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
