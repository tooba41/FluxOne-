import React, { useState, useEffect, useRef } from 'react'
import {
  TrendingUp,
  PackageCheck,
  FileSpreadsheet,
  Megaphone,
  BrainCircuit,
  Sparkles,
  PenTool,
  Activity,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react'
import { aiFeaturesData } from '@/data/aiFeaturesData'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function AiFeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const iconMap = {
    TrendingUp,
    PackageCheck,
    FileSpreadsheet,
    Megaphone,
    BrainCircuit,
    Sparkle: Sparkles,
    PenTool,
    Activity,
  }

  const aiHighlights = [
    'Up to 96% sales & inventory forecast accuracy',
    'Automated FEFO restock warnings before items run dry',
    'Real-time POS cross-sell recommendations at checkout',
    'Executive narrative reports generated in seconds',
  ]

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

  return (
    <section
      id="ai-features"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 relative bg-[#0f172a] text-white border-t border-slate-800 overflow-hidden"
    >
      <div
        className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Heading & Value Proposition */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-semibold">
              <Sparkles size={13} className="text-purple-400" strokeWidth={1.5} />
              <span>Autonomous AI Intelligence</span>
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-tight">
              Intelligent AI Engines Built to{' '}
              <span className="text-purple-300">Outperform the Market</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              FluxOne continuously analyzes transactions, customer retention, and inventory velocity in real time to deliver proactive business decisions.
            </p>

            {/* Feature Highlights List */}
            <div className="space-y-2.5 pt-2">
              {aiHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-slate-800">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('#packages')}
                className="flux-primary-btn font-semibold text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Deploy AI to Your Business</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </Button>
              <p className="text-xs text-slate-400 mt-2 font-normal">
                Included in all plans with zero complex setup.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: 8 AI Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {aiFeaturesData.capabilities.map((item, idx) => {
                const IconComponent = iconMap[item.iconName] || Sparkles

                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors duration-150 flex flex-col justify-between shadow-xs min-h-[220px]"
                  >
                    <div>
                      {/* Top Bar: Icon & Index Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                            <IconComponent size={16} strokeWidth={1.5} />
                          </div>
                          <h3 className="text-sm font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono font-medium text-slate-500">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Clean AI Output Quote (No doubled quotes) */}
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] text-purple-200 flex items-start gap-1.5 leading-snug">
                      <Zap size={13} className="text-amber-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="truncate italic">"{item.demoOutput.replace(/^"|"$/g, '')}"</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AiFeaturesSection
