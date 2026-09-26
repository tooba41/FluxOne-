import React from 'react'
import {
  ReceiptText,
  Boxes,
  Users,
  Globe,
  ShoppingBag,
  UserCheck,
  BadgeDollarSign,
  BarChart3,
  Bot,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { coreFeaturesData } from '@/data/coreFeaturesData'
import { Badge } from '@/components/ui/Badge'
import { scrollToSection } from '@/lib/utils'

export function CoreFeaturesSection() {
  const iconMap = {
    ReceiptText,
    Boxes,
    Users,
    Globe,
    ShoppingBag,
    UserCheck,
    BadgeDollarSign,
    BarChart3,
    Bot,
  }

  return (
    <section id="features" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" size="md">
            {coreFeaturesData.badge}
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {coreFeaturesData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {coreFeaturesData.subtitle}
          </p>
        </div>

        {/* 9 Core Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {coreFeaturesData.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Boxes
            return (
              <div
                key={feature.id}
                className="flux-card p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
                style={{
                  transitionDelay: `${idx * 40}ms`,
                }}
              >
                {/* Subtle top gradient accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${feature.color}, #412283)`,
                  }}
                />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}, #412283)`,
                      }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <Badge variant="purple" size="sm">
                      {feature.badge}
                    </Badge>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#8E238F] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feature.shortDescription}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {feature.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2
                          size={16}
                          className="text-[#8E238F] mt-0.5 shrink-0"
                        />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore module shortcut on hover */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#8E238F] group-hover:text-[#412283] transition-colors cursor-pointer"
                  onClick={() => scrollToSection('#packages')}
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
