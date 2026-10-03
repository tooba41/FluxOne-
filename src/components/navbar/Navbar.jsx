import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navigationData } from '@/data/navigationData'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { BrandLogo } from '@/components/shared/BrandLogo'

export function Navbar({ onOpenPackageModal }) {
  const { isScrolled } = useScrollPosition(10)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Close on window resize above lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      scrollToSection(href)
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 w-full transition-colors duration-200 ${
        isScrolled
          ? 'flux-glass-nav bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-16 flex items-center justify-between relative">
        
        {/* LEFT CORNER: Prominent Logo + Brand Lockup */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 shrink-0 select-none group"
          aria-label="FluxOne Home"
        >
          <BrandLogo size="md" className="group-hover:scale-105 transition-transform duration-200" />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none">
                FluxOne
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-purple-50 text-[#8E238F] text-[10px] sm:text-[11px] font-bold border border-purple-200/70 whitespace-nowrap shadow-2xs">
                AI ERP & POS
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium tracking-normal block mt-0.5">
              All-in-One Business Management
            </span>
          </div>
        </a>

        {/* CENTER: Nav links (centered across the page) */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2"
          aria-label="Main navigation"
        >
          {navigationData.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT CORNER: Login text link + Primary Button */}
        <div className="hidden sm:flex items-center gap-4 xl:gap-5 shrink-0">
          <a
            href="/login"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            Login
          </a>
          <Button
            size="sm"
            variant="primary"
            onClick={() =>
              onOpenPackageModal ? onOpenPackageModal('enterprise') : scrollToSection('#packages')
            }
            className="flux-primary-btn text-xs font-bold px-4.5 py-2 rounded-full shadow-sm"
          >
            <span>Get Started</span>
            <ArrowRight size={14} />
          </Button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            size="xs"
            variant="primary"
            className="flux-primary-btn text-xs py-1.5 px-3 rounded-lg font-bold"
            onClick={() =>
              onOpenPackageModal ? onOpenPackageModal('enterprise') : scrollToSection('#packages')
            }
          >
            Get Started
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white shadow-xl px-4 py-5 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navigationData.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-sm font-semibold text-slate-700 hover:text-[#8E238F] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="/login"
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Login to Workspace
            </a>
            <Button
              variant="primary"
              size="md"
              className="flux-primary-btn w-full justify-center text-sm font-bold rounded-full"
              onClick={() => {
                setMobileMenuOpen(false)
                if (onOpenPackageModal) onOpenPackageModal('enterprise')
                else scrollToSection('#packages')
              }}
            >
              <span>Get Started with FluxOne</span>
              <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
