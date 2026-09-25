import React, { useState } from 'react'
import {
  ShoppingBag,
  UtensilsCrossed,
  Coffee,
  Pill,
  Store,
  Sparkles,
  Tv,
  Shirt,
  Wrench,
  Truck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { industriesData } from '@/data/industriesData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(null)

  const iconMap = {
    ShoppingBag,
    UtensilsCrossed,
    Coffee,
    Pill,
    Store,
    Sparkles,
    Tv,
    Shirt,
    Wrench,
    Truck,
  }

  return (
    <section id="industries" className="py-20 md:py-28 relative bg-[#f9f7fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" size="md">
            {industriesData.badge}
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {industriesData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {industriesData.subtitle}
          </p>
        </div>

        {/* 10 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {industriesData.industries.map((item) => {
            const IconComponent = iconMap[item.iconName] || Store
            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-300 hover:shadow-[0_12px_32px_rgba(65,34,131,0.08)] transition-all duration-200 flex flex-col justify-between group shadow-2xs hover:-translate-y-1"
              >
                <div>
                  {/* Top Icon and Name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-2xs transition-transform group-hover:scale-105 shrink-0"
                      style={{ backgroundColor: item.color }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#8E238F] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {item.highlights.slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8E238F] flex-shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  type="button"
                  onClick={() => setSelectedIndustry(item)}
                  className="w-full mt-auto pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-[#8E238F] group-hover:text-[#412283] flex items-center justify-between cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Industry Details Modal */}
      {selectedIndustry && (
        <Modal
          isOpen={Boolean(selectedIndustry)}
          onClose={() => setSelectedIndustry(null)}
          title={`${selectedIndustry.name} POS & Operations`}
          subtitle={selectedIndustry.tagline}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-6">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {selectedIndustry.details.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* POS Features */}
              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#412283] mb-3">
                  Tailored POS Workflows
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.details.posFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inventory & Stock Features */}
              <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-900 mb-3">
                  Specialized Stock & Supply
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.details.inventoryFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 size={15} className="text-sky-600 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* All Highlights */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-2">Key Value Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedIndustry.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E238F]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setSelectedIndustry(null)
                  const el = document.getElementById('packages')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get Started with {selectedIndustry.name} Setup
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
