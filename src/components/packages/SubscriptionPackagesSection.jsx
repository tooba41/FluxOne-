import React, { useState } from 'react'
import { Check, Sparkles, Building2, Store, ArrowRight, ShieldCheck } from 'lucide-react'
import { packagesData } from '@/data/packagesData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PackageRequestModal } from './PackageRequestModal'

export function SubscriptionPackagesSection({ onOpenRequestModal }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPkgId, setSelectedPkgId] = useState('enterprise')

  const handleOpenModal = (pkgId) => {
    setSelectedPkgId(pkgId)
    setModalOpen(true)
  }

  return (
    <section id="packages" className="py-20 md:py-28 relative bg-[#faf8fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" size="md">
            {packagesData.badge}
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {packagesData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {packagesData.subtitle}
          </p>
        </div>

        {/* 2 Packages Grid (Professional & Enterprise) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {packagesData.packages.map((pkg) => {
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
                      Most Popular for High-Growth
                    </Badge>
                  </div>
                )}

                <div>
                  {/* Top Info */}
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

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pkg.targetAudience}
                  </p>

                  {/* Form Submission Callout */}
                  <div className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-100 text-xs text-slate-700 mb-6 flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-[#8E238F] mt-0.5 flex-shrink-0" />
                    <span>{pkg.formNote}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Included Package Capabilities:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feat.included
                              ? feat.highlight
                                ? 'bg-[#8E238F] text-white shadow-2xs'
                                : 'bg-emerald-100 text-emerald-700'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Check size={12} strokeWidth={feat.included ? 3 : 1} />
                        </div>
                        <span
                          className={`text-xs sm:text-sm ${
                            feat.included
                              ? feat.highlight
                                ? 'text-slate-900 font-bold'
                                : 'text-slate-700 font-medium'
                              : 'text-slate-400 line-through'
                          }`}
                        >
                          {feat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA to trigger Package Request Form */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button
                    variant={isEnterprise ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full"
                    onClick={() => handleOpenModal(pkg.id)}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            )
          })}
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
