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
  ShieldCheck,
} from 'lucide-react'
import { aiFeaturesData } from '@/data/aiFeaturesData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function AiFeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState(null)

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

  return (
    <section id="ai-features" className="py-20 md:py-28 relative bg-[#111827] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout: Heading & Info on Left, Compact Small Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: Heading & Value Proposition ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} className="text-purple-400 animate-pulse" />
              Autonomous AI Intelligence
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-white tracking-tight leading-tight">
              Intelligent AI Engines Built to{' '}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Outperform the Market
              </span>
            </h2>

            <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
              FluxOne continuously analyzes transactions, customer retention, and inventory velocity in real time to deliver proactive business decisions.
            </p>

            {/* Feature Highlights List */}
            <div className="mt-6 space-y-3">
              {aiHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 size={17} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('#packages')}
                className="flux-primary-btn font-bold inline-flex items-center gap-2 shadow-lg shadow-purple-900/30"
              >
                <span>Deploy AI to Your Business</span>
                <ArrowRight size={16} />
              </Button>
              <p className="text-xs text-slate-400 mt-2 font-medium">
                Included in all plans with zero complex setup.
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 8 Compact Small Cards Grid ================= */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiFeaturesData.capabilities.map((item, idx) => {
                const IconComponent = iconMap[item.iconName] || Sparkles
                const isHovered = hoveredCard === item.id

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-4 sm:p-5 rounded-2xl bg-slate-900/85 border transition-all duration-300 flex flex-col justify-between group shadow-md hover:-translate-y-1 ${
                      isHovered
                        ? 'border-purple-500/80 shadow-[0_10px_30px_rgba(142,35,143,0.25)] bg-slate-900'
                        : 'border-slate-800/90 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      {/* Top Bar: Compact Icon, Title & Index Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${item.color}, #412283)`,
                            }}
                          >
                            <IconComponent size={17} />
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 shrink-0">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Crisp Description */}
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Live AI Recommendation Chip */}
                    <div className="p-2.5 rounded-xl bg-slate-950/90 border border-purple-500/20 text-[11px] text-purple-200 flex items-start gap-1.5 leading-snug">
                      <Zap size={13} className="text-amber-400 shrink-0 mt-0.5" />
                      <span className="truncate italic">"{item.demoOutput}"</span>
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
