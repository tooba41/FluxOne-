import React, { useState } from 'react'
import { Menu, X, ArrowRight, LogIn, Sparkles } from 'lucide-react'
import { navigationData } from '@/data/navigationData'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { BrandLogo } from '@/components/shared/BrandLogo'

export function Navbar({ onOpenPackageModal }) {
  const { isScrolled } = useScrollPosition(15)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      scrollToSection(href)
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'flux-glass-nav py-3 shadow-[0_4px_30px_rgba(65,34,131,0.08)]'
          : 'bg-white/70 backdrop-blur-md py-4 border-b border-purple-50/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo with hover scale */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 shrink-0 group transition-transform duration-200 hover:scale-[1.04]"
          >
            <BrandLogo size="sm" className="shadow-sm group-hover:shadow-[0_0_20px_rgba(142,35,143,0.35)] transition-shadow" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-[#8E238F] transition-colors">
                  {navigationData.logo.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-100/80 text-[#8E238F] border border-purple-200/80">
                  AI ERP & POS
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium hidden xl:inline-block">
                {navigationData.logo.slogan}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with animated underline */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navigationData.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm font-semibold text-slate-600 hover:text-[#8E238F] px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#8E238F] to-[#7C3AED] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="/login"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-[#8E238F] px-4 py-2 rounded-xl border border-slate-200/80 hover:border-purple-200 hover:bg-purple-50/50 transition-all shadow-2xs"
            >
              <LogIn size={15} />
              <span>Login</span>
            </a>
            <Button
              size="sm"
              variant="primary"
              onClick={() => onOpenPackageModal ? onOpenPackageModal('enterprise') : scrollToSection('#packages')}
              className="flux-primary-btn px-4.5 py-2 text-sm font-bold"
            >
              <span>Get Started</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              size="sm"
              variant="primary"
              className="sm:hidden text-xs py-1.5 px-3"
              onClick={() => onOpenPackageModal ? onOpenPackageModal('enterprise') : scrollToSection('#packages')}
            >
              Get Started
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#8E238F] hover:bg-purple-50 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-2xl px-4 pt-3 pb-6 space-y-1 animate-slide-up-fade">
          <div className="py-1 px-3 mb-2 border-b border-purple-50 pb-2">
            <p className="text-xs text-[#8E238F] font-bold uppercase tracking-wider">
              {navigationData.logo.slogan}
            </p>
          </div>
          {navigationData.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-sm font-semibold text-slate-700 hover:text-[#8E238F] hover:bg-purple-50 px-3 py-2.5 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="/login"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-slate-700 bg-slate-50 border border-slate-200 text-sm font-semibold"
            >
              <LogIn size={16} />
              Login to Workspace
            </a>
            <Button
              variant="primary"
              size="md"
              className="w-full font-bold"
              onClick={() => {
                setMobileMenuOpen(false)
                if (onOpenPackageModal) onOpenPackageModal('enterprise')
                else scrollToSection('#packages')
              }}
            >
              Get Started with FluxOne
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
