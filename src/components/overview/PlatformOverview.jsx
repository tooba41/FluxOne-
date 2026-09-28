import React from 'react'
import { Cloud, Building2, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'
import { overviewData } from '@/data/overviewData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function PlatformOverview() {
  const iconMap = {
    Cloud: Cloud,
    Building2: Building2,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
  }

  return (
    <section id="overview" className="py-16 sm:py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <Badge variant="purple" size="md">
            {overviewData.badge}
          </Badge>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {overviewData.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            {overviewData.subtitle}
          </p>
        </div>

        {/* About FluxOne & Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* About Story Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-50/80 via-white to-slate-50 border border-purple-100 shadow-[0_12px_40px_rgba(65,34,131,0.08)] relative overflow-hidden flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#8E238F]">
                Unified B2B Platform
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 mb-3 sm:mb-4">
                {overviewData.about.heading}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                {overviewData.about.description}
              </p>
              <div className="space-y-2.5 sm:space-y-3">
                {overviewData.about.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="mt-0.5 text-emerald-600 flex-shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-purple-100/60">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center"
                onClick={() => scrollToSection('#features')}
              >
                <span>Explore Platform Architecture</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* 4 Pillars (Cloud, Multi-Industry, AI Power, Scalability/Benefits) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {overviewData.pillars.map((pillar) => {
              const IconComp = iconMap[pillar.iconName] || Sparkles
              return (
                <div
                  key={pillar.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-purple-300 hover:shadow-[0_12px_30px_rgba(65,34,131,0.09)] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-purple-50 text-[#8E238F] border border-purple-100 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-[#8E238F] group-hover:to-[#412283] group-hover:text-white transition-all shadow-2xs">
                      <IconComp size={22} />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{pillar.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-[#8E238F] px-2.5 py-1 rounded-md bg-purple-50 border border-purple-100 inline-block self-start">
                    {pillar.stats}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
