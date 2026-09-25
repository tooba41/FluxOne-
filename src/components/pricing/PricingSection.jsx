import React, { useState } from 'react'
import { Check, X, Sparkles, HelpCircle, ArrowRight, PhoneCall } from 'lucide-react'
import { pricingData } from '@/data/pricingData'
import { packagesData } from '@/data/packagesData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function PricingSection({ onOpenRequestModal }) {
  const [billingCycle, setBillingCycle] = useState('annual') // 'monthly' | 'annual'

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="purple" size="md">
            {pricingData.badge}
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {pricingData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {pricingData.subtitle}
          </p>

          {/* Billing Toggle (Monthly / Annual) */}
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

        {/* Pricing Cards Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {packagesData.packages.map((pkg) => {
            const price =
              billingCycle === 'annual' ? pkg.annualPrice : pkg.monthlyPrice
            const isEnterprise = pkg.id === 'enterprise'

            return (
              <div
                key={pkg.id}
                className={`p-7 sm:p-8 rounded-3xl border flex flex-col justify-between ${
                  isEnterprise
                    ? 'bg-purple-50/50 border-[#8E238F] shadow-[0_12px_40px_rgba(142,35,143,0.1)]'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                    {pkg.popular && <Badge variant="gradient" size="sm">Recommended</Badge>}
                  </div>
                  <p className="text-xs text-slate-500 mb-6">{pkg.tag}</p>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / month {billingCycle === 'annual' ? '(billed annually)' : ''}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {pkg.id === 'professional'
                      ? 'Ideal for single commercial outlets wanting immediate POS & stock control.'
                      : 'All-inclusive multi-branch enterprise scale with full neural AI engines.'}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200/80">
                  <Button
                    variant={isEnterprise ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                    onClick={() => onOpenRequestModal ? onOpenRequestModal(pkg.id) : scrollToSection('#packages')}
                  >
                    <span>Request Now</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Deep Package Comparison Table */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-[0_16px_50px_rgba(65,34,131,0.06)] overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/70">
            <h3 className="text-xl font-bold text-slate-900">Comprehensive Package Comparison</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
              Side-by-side feature matrix to assist your business selection.
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
              <span>Have custom multi-region franchise requirements?</span>
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
                onClick={() => onOpenRequestModal ? onOpenRequestModal('enterprise') : scrollToSection('#packages')}
              >
                <span>Request Package Now</span>
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
