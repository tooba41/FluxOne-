import React, { useState, useEffect, useRef } from 'react'
import { Check, Building2, Store, ArrowRight, HelpCircle, PhoneCall, ShieldCheck } from 'lucide-react'
import { packagesData } from '@/data/packagesData'
import { pricingData } from '@/data/pricingData'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'
import { PackageRequestModal } from '@/components/packages/PackageRequestModal'

export function PricingSection({ onOpenRequestModal }) {
  const [billingCycle, setBillingCycle] = useState('annual') // 'monthly' | 'annual'
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPkgId, setSelectedPkgId] = useState('enterprise')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // IntersectionObserver: reveal once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleOpenModal = (pkgId) => {
    if (onOpenRequestModal) {
      onOpenRequestModal(pkgId)
    } else {
      setSelectedPkgId(pkgId)
      setModalOpen(true)
    }
  }

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 relative bg-slate-50/50 border-t border-slate-200/80"
    >
      <div id="packages" className="relative -top-24" />

      <div
        className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            badge={packagesData.badge}
            title={packagesData.title}
            subtitle={packagesData.subtitle}
            className="mb-6"
          />

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-lg bg-slate-200/80 border border-slate-200">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#8E238F] text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 2 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14 items-stretch">
          {packagesData.packages.map((pkg) => {
            const price = billingCycle === 'annual' ? pkg.annualPrice : pkg.monthlyPrice
            const isEnterprise = pkg.id === 'enterprise'

            return (
              <div
                key={pkg.id}
                className={`relative rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-150 ${
                  isEnterprise
                    ? 'bg-white border-2 border-[#8E238F] shadow-sm'
                    : 'bg-white border border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Popular Pill */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#8E238F] text-white text-[10px] font-semibold uppercase tracking-wider">
                      Recommended for Growth
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Title & Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8E238F]">
                        {pkg.tag}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1">
                        Package {pkg.id === 'professional' ? '1 – ' : '2 – '}
                        {pkg.name}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-purple-50 text-[#8E238F] border border-purple-100 flex items-center justify-center shrink-0">
                      {isEnterprise ? <Building2 size={20} strokeWidth={1.5} /> : <Store size={20} strokeWidth={1.5} />}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-slate-900">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / month {billingCycle === 'annual' ? '(billed annually)' : '(billed monthly)'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {pkg.targetAudience}
                  </p>

                  {/* Form Submission Notice */}
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-5 flex items-start gap-2.5">
                    <ShieldCheck size={15} className="text-[#8E238F] mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span>{pkg.formNote}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                      Included Package Features:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            feat.included
                              ? 'bg-[#8E238F] text-white'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="text-xs text-slate-700 font-medium leading-snug">
                          {feat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Button
                    variant={isEnterprise ? 'primary' : 'secondary'}
                    size="md"
                    className={`w-full justify-center text-xs font-semibold py-2.5 rounded-lg ${
                      isEnterprise ? 'flux-primary-btn' : 'flux-secondary-btn'
                    }`}
                    onClick={() => handleOpenModal(pkg.id)}
                  >
                    <span>Request {pkg.name} Package</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <div className="rounded-xl bg-white border border-slate-200 shadow-xs overflow-hidden max-w-5xl mx-auto">
          <div className="p-6 border-b border-slate-200 bg-slate-50/70">
            <h3 className="text-lg font-bold text-slate-900">Comprehensive Package Comparison</h3>
            <p className="text-xs text-slate-500 mt-1">
              Compare features across Package 1 (Professional) and Package 2 (Enterprise) side by side.
            </p>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full min-w-[480px] sm:min-w-full text-left text-xs sm:text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th className="py-3 px-5 font-semibold text-slate-900 w-1/2">Module & Capability</th>
                  <th className="py-3 px-4 font-semibold text-slate-900 w-1/4">Professional</th>
                  <th className="py-3 px-4 font-semibold text-[#8E238F] w-1/4 bg-purple-50/40">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingData.comparisonCategories.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-slate-50/60">
                      <td
                        colSpan={3}
                        className="py-2 px-5 text-[10px] font-semibold uppercase tracking-wider text-slate-500"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feat, featIdx) => (
                      <tr key={featIdx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-2.5 px-5 text-xs text-slate-800 font-medium">
                          {feat.name}
                        </td>
                        <td className="py-2.5 px-4 text-xs text-slate-600">
                          {feat.pro}
                        </td>
                        <td className="py-2.5 px-4 text-xs font-semibold text-[#8E238F] bg-purple-50/30">
                          {feat.ent}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <HelpCircle size={15} className="text-[#8E238F] shrink-0" strokeWidth={1.5} />
              <span>Need custom multi-branch franchise provisioning or dedicated SLA?</span>
            </div>
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <Button
                variant="secondary"
                size="sm"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border-slate-200"
                onClick={() => scrollToSection('#contact')}
              >
                <PhoneCall size={13} strokeWidth={1.5} />
                <span>Contact Sales</span>
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="flux-primary-btn text-xs font-semibold px-3.5 py-1.5 rounded-lg"
                onClick={() => handleOpenModal('enterprise')}
              >
                <span>Request Package</span>
                <ArrowRight size={13} strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* Package Request Modal */}
      <PackageRequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackageId={selectedPkgId}
      />
    </section>
  )
}

export default PricingSection
