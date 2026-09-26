import React, { useState } from 'react'
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
import { scrollToSection } from './lib/utils'

export function LandingPage() {
  const [packageModalOpen, setPackageModalOpen] = useState(false)
  const [selectedPkgId, setSelectedPkgId] = useState('enterprise')

  const handleOpenPackageModal = (pkgId = 'enterprise') => {
    setSelectedPkgId(pkgId)
    setPackageModalOpen(true)
  }

  const handleOpenDemoModal = () => {
    scrollToSection('#contact')
  }

  return (
    <div className="min-h-screen bg-[#fbf9fd] text-slate-900 font-sans selection:bg-purple-200 selection:text-[#8E238F] relative overflow-x-hidden">
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
