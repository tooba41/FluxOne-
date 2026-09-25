import React, { useState } from 'react'
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
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function AiFeaturesSection() {
  const [activeCard, setActiveCard] = useState(null)

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

  return (
    <section id="ai-features" className="py-20 md:py-28 relative bg-[#faf8fd]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-200/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gradient" size="md">
            <Sparkles size={14} className="text-[#8E238F] mr-1" />
            {aiFeaturesData.badge}
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {aiFeaturesData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {aiFeaturesData.subtitle}
          </p>
        </div>

        {/* 8 AI Capabilities Grid (4x2 responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeaturesData.capabilities.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Sparkles
            const isHovered = activeCard === item.id

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`p-6 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(65,34,131,0.04)] hover:shadow-[0_16px_40px_rgba(65,34,131,0.1)] hover:-translate-y-1 ${
                  isHovered ? 'border-[#8E238F]' : 'border-slate-200/80'
                }`}
              >
                <div>
                  {/* Top: Icon + Number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}, #412283)`,
                      }}
                    >
                      <IconComponent size={22} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Real-world AI Output preview pill */}
                  <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs text-slate-800 mb-4 font-sans">
                    <div className="flex items-center justify-between text-[11px] text-[#8E238F] font-bold mb-1">
                      <span className="flex items-center gap-1">
                        <Zap size={12} /> AI Live Recommendation
                      </span>
                    </div>
                    <p className="text-slate-700 italic leading-snug">
                      "{item.demoOutput}"
                    </p>
                  </div>

                  {/* Key ROI Benefit */}
                  <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item.benefit}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-50 via-white to-purple-50 border border-purple-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8E238F] to-[#412283] flex items-center justify-center text-white shadow-md shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Ready to put autonomous AI to work in your stores?
              </h4>
              <p className="text-sm text-slate-600 mt-0.5">
                Included with both Professional & Enterprise plans with zero complex AI setup.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => scrollToSection('#packages')}
            className="shrink-0"
          >
            <span>Explore Packages with AI</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
