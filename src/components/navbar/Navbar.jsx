import React, { useState } from 'react'
import { Menu, X, ArrowRight, LogIn } from 'lucide-react'
import { navigationData } from '@/data/navigationData'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { BrandLogo } from '@/components/shared/BrandLogo'

export function Navbar({ onOpenPackageModal }) {
  const { isScrolled } = useScrollPosition()
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
          ? 'bg-white/95 backdrop-blur-md border-b border-purple-100 py-3 shadow-[0_4px_25px_rgba(65,34,131,0.06)]'
          : 'bg-white/90 backdrop-blur-sm border-b border-purple-50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Platform Logo & Brand Title */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 shrink-0 group"
          >
            <BrandLogo size="sm" className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#8E238F] transition-colors">
                  {navigationData.logo.name}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-[#8E238F] border border-purple-200">
                  POS & ERP
                </span>
              </div>
              <span className="text-xs text-slate-500 font-normal hidden xl:inline-block">
                {navigationData.logo.slogan}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navigationData.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-[#8E238F] px-3.5 py-2 rounded-lg hover:bg-purple-50 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons (Login & Get Started) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="/login"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-[#8E238F] px-3.5 py-2 rounded-xl hover:bg-purple-50 transition-colors"
            >
              <LogIn size={16} />
              <span>Login</span>
            </a>
            <Button
              size="sm"
              variant="primary"
              onClick={() => onOpenPackageModal ? onOpenPackageModal('enterprise') : scrollToSection('#packages')}
              className="px-4.5 py-2 text-sm"
            >
              <span>Get Started</span>
              <ArrowRight size={15} />
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-purple-100 shadow-xl px-4 pt-3 pb-6 space-y-1 animate-fade-in">
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
              className="w-full"
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
