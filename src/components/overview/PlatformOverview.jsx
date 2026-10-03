import React, { useEffect, useRef, useState } from 'react'
import { Cloud, Building2, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'
import { overviewData } from '@/data/overviewData'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function PlatformOverview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const iconMap = {
    Cloud: Cloud,
    Building2: Building2,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
  }

  // IntersectionObserver: reveal once on scroll, never replay
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

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 relative bg-slate-50/50 border-t border-slate-200/80"
    >
      <div className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Section Header */}
        <SectionHeading
          badge={overviewData.badge}
          title={overviewData.title}
          subtitle={overviewData.subtitle}
        />

        {/* Story Card + 4 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* About Story Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-[#8E238F]">
                Unified B2B Platform
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 mb-3">
                {overviewData.about.heading}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {overviewData.about.description}
              </p>
              <div className="space-y-3">
                {overviewData.about.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100">
              <Button
                variant="primary"
                size="md"
                className="flux-primary-btn w-full sm:w-auto justify-center text-xs font-semibold px-4 py-2.5 rounded-lg"
                onClick={() => scrollToSection('#features')}
              >
                <span>Explore Platform Architecture</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </Button>
            </div>
          </div>

          {/* 4 Pillars Grid (Uniform in height, padding, icon size) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {overviewData.pillars.map((pillar) => {
              const IconComp = iconMap[pillar.iconName] || Sparkles
              return (
                <div
                  key={pillar.id}
                  className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors duration-150 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-purple-50 text-[#8E238F] border border-purple-100/80 flex items-center justify-center mb-3">
                      <IconComp size={18} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#8E238F] px-2.5 py-1 rounded-md bg-purple-50/70 border border-purple-100/70 inline-block self-start font-mono">
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

export default PlatformOverview
