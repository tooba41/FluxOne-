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
} from 'lucide-react'
import { coreFeaturesData } from '@/data/coreFeaturesData'
import { Badge } from '@/components/ui/Badge'

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
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {coreFeaturesData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {coreFeaturesData.subtitle}
          </p>
        </div>

        {/* 9 Core Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeaturesData.features.map((feature) => {
            const IconComponent = iconMap[feature.iconName] || Boxes
            return (
              <div
                key={feature.id}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-purple-300 hover:shadow-[0_16px_40px_rgba(65,34,131,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105 shrink-0"
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
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#8E238F] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feature.shortDescription}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {feature.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2
                          size={16}
                          className="text-[#8E238F] mt-0.5 flex-shrink-0"
                        />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
