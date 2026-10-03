import React, { useState, useEffect } from 'react'
import { Navbar } from './components/navbar/Navbar'
import { HeroSection } from './components/hero/HeroSection'
import { PlatformOverview } from './components/overview/PlatformOverview'
import { IndustriesSection } from './components/industries/IndustriesSection'
import { CoreFeaturesSection } from './components/features/CoreFeaturesSection'
import { AiFeaturesSection } from './components/ai/AiFeaturesSection'
import { ProductScreenshotsSection } from './components/screenshots/ProductScreenshotsSection'
import { PricingSection } from './components/pricing/PricingSection'
import { PackageRequestModal } from './components/packages/PackageRequestModal'
import { TestimonialsSection } from './components/testimonials/TestimonialsSection'
import { FaqSection } from './components/faq/FaqSection'
import { ContactUsSection } from './components/contact/ContactUsSection'
import { Footer } from './components/footer/Footer'
import { NotFoundPage } from './pages/NotFoundPage'
import { scrollToSection } from './lib/utils'

export function LandingPage() {
  const [packageModalOpen, setPackageModalOpen] = useState(false)
  const [selectedPkgId, setSelectedPkgId] = useState('enterprise')
  const [isNotFound, setIsNotFound] = useState(() => {
    const validPaths = ['/', '', '/index.html']
    return !validPaths.includes(window.location.pathname)
  })

  // Listen for browser popstate/path changes
  useEffect(() => {
    const handleLocationCheck = () => {
      const validPaths = ['/', '', '/index.html']
      setIsNotFound(!validPaths.includes(window.location.pathname))
    }
    window.addEventListener('popstate', handleLocationCheck)
    return () => window.removeEventListener('popstate', handleLocationCheck)
  }, [])

  // Always reset scroll to top (Home) on page load/reload
  useEffect(() => {
    if (!isNotFound) {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

      // If there's a hash from previous session, remove it so user starts at Home
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname)
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }
  }, [isNotFound])

  const handleNavigateHome = (hash = '') => {
    window.history.pushState(null, '', `/${hash}`)
    setIsNotFound(false)
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash)
      }, 100)
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  const handleOpenPackageModal = (pkgId = 'enterprise') => {
    setSelectedPkgId(pkgId)
    setPackageModalOpen(true)
  }

  const handleOpenDemoModal = () => {
    scrollToSection('#contact')
  }

  if (isNotFound) {
    return <NotFoundPage onNavigateHome={handleNavigateHome} />
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-[#8E238F] relative overflow-x-hidden">
      {/* 1. Navigation Bar */}
      <Navbar onOpenPackageModal={handleOpenPackageModal} />

      {/* Main Content */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection
          onOpenPackageModal={handleOpenPackageModal}
          onOpenDemoModal={handleOpenDemoModal}
        />

        {/* 3. Platform Overview */}
        <PlatformOverview />

        {/* 4. Industries We Serve */}
        <IndustriesSection />

        {/* 5. Core Features */}
        <CoreFeaturesSection />

        {/* 6. AI Features Section */}
        <AiFeaturesSection />

        {/* 7. Product Screenshots */}
        <ProductScreenshotsSection />

        {/* 8 & 9. Subscription Packages & Pricing (Unified with Comparison & Form) */}
        <PricingSection onOpenRequestModal={handleOpenPackageModal} />

        {/* 10. Testimonials */}
        <TestimonialsSection />

        {/* 11. FAQ */}
        <FaqSection />

        {/* 12. Contact Us */}
        <ContactUsSection />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Global Package Request Modal */}
      <PackageRequestModal
        isOpen={packageModalOpen}
        onClose={() => setPackageModalOpen(false)}
        selectedPackageId={selectedPkgId}
      />
    </div>
  )
}

export default LandingPage
