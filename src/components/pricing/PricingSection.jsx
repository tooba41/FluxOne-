import React, { useState } from 'react'
import { Check, Sparkles, Building2, Store, ArrowRight, HelpCircle, PhoneCall, ShieldCheck } from 'lucide-react'
import { packagesData } from '@/data/packagesData'
import { pricingData } from '@/data/pricingData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'
import { PackageRequestModal } from '@/components/packages/PackageRequestModal'

export function PricingSection({ onOpenRequestModal }) {
  const [billingCycle, setBillingCycle] = useState('annual') // 'monthly' | 'annual'
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPkgId, setSelectedPkgId] = useState('enterprise')

  const handleOpenModal = (pkgId) => {
    if (onOpenRequestModal) {
      onOpenRequestModal(pkgId)
    } else {
      setSelectedPkgId(pkgId)
      setModalOpen(true)
    }
  }

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-white">
      {/* Anchor for packages */}
      <div id="packages" className="relative -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="purple" size="md">
            {packagesData.badge}
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {packagesData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {packagesData.subtitle}
          </p>

          {/* Billing Cycle Switcher (Monthly / Annual) */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-[#8E238F] to-[#412283] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 2 Packages Cards: Package 1 – Professional & Package 2 – Enterprise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch">
          {packagesData.packages.map((pkg) => {
            const price = billingCycle === 'annual' ? pkg.annualPrice : pkg.monthlyPrice
            const isEnterprise = pkg.id === 'enterprise'

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isEnterprise
                    ? 'bg-white border-2 border-[#8E238F] shadow-[0_20px_50px_rgba(142,35,143,0.14)] scale-[1.02]'
                    : 'bg-white border border-slate-200/90 hover:border-purple-200 shadow-[0_10px_30px_rgba(65,34,131,0.06)]'
                }`}
              >
                {/* Popular Pill */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="gradient" size="md">
                      <Sparkles size={13} className="text-[#8E238F] mr-1" />
                      Recommended for Multi-Branch Growth
                    </Badge>
                  </div>
                )}

                <div>
                  {/* Package Title & Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8E238F]">
                        {pkg.tag}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-1">
                        Package {pkg.id === 'professional' ? '1 – ' : '2 – '}
                        {pkg.name}
                      </h3>
                    </div>
                    <div className="p-3 rounded-2xl bg-purple-50 text-[#8E238F] border border-purple-100">
                      {isEnterprise ? <Building2 size={26} /> : <Store size={26} />}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / month {billingCycle === 'annual' ? '(billed annually)' : '(billed monthly)'}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pkg.targetAudience}
                  </p>

                  {/* Super Admin Form Submission Notice */}
                  <div className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-100 text-xs text-slate-700 mb-6 flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-[#8E238F] mt-0.5 shrink-0" />
                    <span>{pkg.formNote}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Included Package Features:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            feat.included
                              ? 'bg-[#8E238F] text-white shadow-2xs'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {feat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button
                    variant={isEnterprise ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full"
                    onClick={() => handleOpenModal(pkg.id)}
                  >
                    <span>Request {pkg.name} Package</span>
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Side-by-Side Package Comparison Table */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-[0_16px_50px_rgba(65,34,131,0.06)] overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/70">
            <h3 className="text-xl font-bold text-slate-900">Comprehensive Package Comparison</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
              Compare features across Package 1 (Professional) and Package 2 (Enterprise) side by side.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th className="py-4 px-6 font-bold text-slate-900 w-1/2">Module & Capability</th>
                  <th className="py-4 px-6 font-bold text-[#8E238F] w-1/4">Professional</th>
                  <th className="py-4 px-6 font-bold text-[#412283] w-1/4 bg-purple-50/50">
                    Enterprise (Multi-Branch)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingData.comparisonCategories.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-slate-50/80">
                      <td
                        colSpan={3}
                        className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-[#8E238F]"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feat, featIdx) => (
                      <tr
                        key={featIdx}
                        className="hover:bg-purple-50/30 transition-colors"
                      >
                        <td className="py-3.5 px-6 text-xs sm:text-sm font-semibold text-slate-800">
                          {feat.name}
                        </td>
                        <td className="py-3.5 px-6 text-xs sm:text-sm text-slate-600 font-medium">
                          {feat.pro}
                        </td>
                        <td className="py-3.5 px-6 text-xs sm:text-sm text-[#412283] font-bold bg-purple-50/30">
                          {feat.ent}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Actions */}
          <div className="p-6 bg-slate-50/80 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <HelpCircle size={16} className="text-[#8E238F]" />
              <span>Need custom multi-branch franchise provisioning or dedicated SLA?</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="darkOutline"
                size="sm"
                onClick={() => scrollToSection('#contact')}
              >
                <PhoneCall size={14} />
                <span>Contact Sales</span>
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleOpenModal('enterprise')}
              >
                <span>Request Package Now</span>
                <ArrowRight size={14} />
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
