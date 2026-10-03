import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bot,
  Activity,
  Star,
  CheckCircle2,
  ShieldCheck,
  Award,
} from 'lucide-react'
import { heroData } from '@/data/heroData'
import { scrollToSection } from '@/lib/utils'

export function HeroSection({ onOpenPackageModal, onOpenDemoModal }) {
  const [emailInput, setEmailInput] = useState('')
  const [revenueCount, setRevenueCount] = useState(0)
  const [ordersCount, setOrdersCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Number count-up animation on load
  useEffect(() => {
    if (hasAnimated) return
    setHasAnimated(true)

    const startTime = performance.now()
    const duration = 1200
    const targetRevenue = 148920
    const targetOrders = 4892

    const animateCounts = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)

      setRevenueCount(Math.floor(targetRevenue * ease))
      setOrdersCount(Math.floor(targetOrders * ease))

      if (progress < 1) {
        requestAnimationFrame(animateCounts)
      } else {
        setRevenueCount(targetRevenue)
      }
    }

    requestAnimationFrame(animateCounts)
  }, [hasAnimated])

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (onOpenPackageModal) {
      onOpenPackageModal('enterprise')
    } else {
      scrollToSection('#packages')
    }
  }

  return (
    <section
      id="hero"
      className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden bg-white text-slate-900"
    >
      {/* Background Vertical Grid & Soft Purple Ambient Aura */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_100%] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. TOP GLOWING PILL BADGE */}
        <div className="hero-animate-1 flex justify-center mb-6">
          <div
            onClick={() => scrollToSection('#ai-features')}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/90 border border-purple-200/80 text-[#8E238F] text-xs sm:text-sm font-semibold shadow-xs hover:border-[#8E238F] transition-all cursor-pointer group"
          >
            <Sparkles size={14} className="text-[#8E238F] group-hover:scale-110 transition-transform" />
            <span>Start Your Journey with FluxOne AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E238F] animate-ping" />
          </div>
        </div>

        {/* 2. MAIN HEADLINE */}
        <h1 className="hero-animate-2 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.08] text-slate-900 max-w-4xl mx-auto">
          AI-Powered Business Management{' '}
          <span className="text-[#8E238F] block sm:inline">
            That Grows Your Revenue
          </span>
        </h1>

        {/* 3. SUBHEADLINE */}
        <p className="hero-animate-3 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto mt-4">
          Manage retail stores, restaurants, pharmacies, supermarkets & wholesale branches with unified point of sale, live multi-warehouse sync, and automated AI insights.
        </p>

        {/* 4. EMAIL CAPTURE CAPSULE / ACTION BAR */}
        <div className="hero-animate-4 max-w-md mx-auto mt-8">
          <form
            onSubmit={handleEmailSubmit}
            className="p-1.5 sm:p-2 bg-white border border-slate-300/90 rounded-full flex items-center shadow-lg shadow-purple-900/5 focus-within:border-[#8E238F] focus-within:ring-2 focus-within:ring-purple-100 transition-all"
          >
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your business email"
              className="bg-transparent text-xs sm:text-sm text-slate-900 placeholder-slate-400 pl-4 pr-2 flex-1 focus:outline-none min-w-0 font-medium"
            />
            <button
              type="submit"
              className="px-5 sm:px-6 py-2.5 rounded-full bg-[#8E238F] hover:bg-[#7a1d7b] text-white text-xs sm:text-sm font-bold shadow-md shadow-purple-900/20 active:scale-95 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Quick Demo Sub-action */}
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-500 font-medium">
            <span
              onClick={() => (onOpenDemoModal ? onOpenDemoModal() : scrollToSection('#contact'))}
              className="hover:text-[#8E238F] transition-colors cursor-pointer inline-flex items-center gap-1 underline underline-offset-4 decoration-purple-300"
            >
              Or request a guided live demo →
            </span>
          </div>
        </div>

        {/* 5. SOCIAL PROOF & RATING */}
        <div className="hero-animate-5 mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-600">
          {/* Overlapping Avatars */}
          <div className="flex items-center -space-x-2">
            <div className="w-7 h-7 rounded-full bg-purple-100 text-[#8E238F] border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-xs">
              TA
            </div>
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-xs">
              ER
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-xs">
              HV
            </div>
          </div>

          {/* Stars & Text */}
          <div className="flex items-center gap-2 font-medium">
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
            </div>
            <span className="text-slate-600">
              Well reviewed by <strong className="text-slate-900 font-semibold">1,200+</strong> enterprise customers
            </span>
          </div>
        </div>

        {/* 6. CENTER DASHBOARD PREVIEW & FLOATING CARDS */}
        <div className="relative mt-12 sm:mt-16 max-w-4xl mx-auto">
          
          {/* Main Center Console Frame */}
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 p-5 sm:p-7 text-left overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="font-semibold text-slate-800 ml-2 text-xs">
                  FluxOne Multi-Branch Command Center
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-slate-600 text-[11px] font-medium">8 Stores Synced Live</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
              {/* Metric 1 */}
              <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200">
                <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">
                  Total Revenue
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 mt-1 block tracking-tight">
                  ${revenueCount.toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold inline-flex items-center gap-1 mt-0.5">
                  <TrendingUp size={12} strokeWidth={2} /> +24.6% vs last week
                </span>
              </div>

              {/* Metric 2 */}
              <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200">
                <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">
                  Active Terminals
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-900 mt-1 block tracking-tight">
                  10,000+ Online
                </span>
                <span className="text-[11px] text-[#8E238F] font-medium mt-0.5 block">
                  Sub-second lane settlement
                </span>
              </div>

              {/* Metric 3: AI Assistant Pill */}
              <div className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#8E238F]">
                    <span className="flex items-center gap-1">
                      <Bot size={13} className="text-[#8E238F]" />
                      AI Copilot
                    </span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white text-[#8E238F] border border-purple-200 font-bold">
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-700 mt-1.5 leading-snug line-clamp-2">
                    "Demand spike +28% detected. Automated restock PO ready."
                  </p>
                </div>
              </div>
            </div>

            {/* Sparkline & Live Transactions */}
            <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-6 space-y-1">
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Live Telemetry Throughput</span>
                  <span className="font-mono text-emerald-600 font-medium">99.98% Uptime</span>
                </div>
                <div className="h-10 w-full">
                  <svg className="w-full h-full" viewBox="0 0 400 50" fill="none">
                    <path
                      d="M 0 40 Q 50 15, 100 28 T 200 10 T 300 22 T 400 8"
                      fill="none"
                      stroke="#8E238F"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="md:col-span-6 space-y-1 text-xs">
                <span className="font-semibold text-slate-700 block text-[11px]">Recent Activity</span>
                <div className="flex justify-between text-[11px] text-slate-600 py-0.5">
                  <span className="truncate pr-2">Downtown Flagship: Espresso Blend + Milk</span>
                  <span className="font-semibold text-slate-900 font-mono">$42.50</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-600 py-0.5">
                  <span className="truncate pr-2">Westside Mall: Linen Shirt (Blue)</span>
                  <span className="font-semibold text-slate-900 font-mono">$68.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Floating Decorative Card (Desktop) */}
          <div className="hidden lg:block absolute -left-10 -top-6 -rotate-6 w-48 p-3.5 rounded-xl bg-white border border-slate-200 shadow-lg text-left pointer-events-none">
            <span className="text-[9px] uppercase font-bold text-[#8E238F] block tracking-wider">
              High-Speed POS
            </span>
            <span className="text-sm font-bold text-slate-900 block mt-0.5">
              &lt; 1.4s Checkout
            </span>
            <span className="text-[10px] text-emerald-600 font-medium">Split Tenders Supported</span>
          </div>

          {/* Right Floating Decorative Card (Desktop) */}
          <div className="hidden lg:block absolute -right-10 -top-6 rotate-6 w-48 p-3.5 rounded-xl bg-white border border-slate-200 shadow-lg text-left pointer-events-none">
            <span className="text-[9px] uppercase font-bold text-[#8E238F] block tracking-wider">
              Autonomous AI
            </span>
            <span className="text-sm font-bold text-slate-900 block mt-0.5">
              96% Forecast Accuracy
            </span>
            <span className="text-[10px] text-slate-500 font-medium">8 Integrated Engines</span>
          </div>

        </div>

        {/* 7. TRUSTED BY / PARTNERING ROW */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-slate-200/80">
          <p className="text-center text-xs uppercase tracking-wider text-slate-400 font-semibold mb-6">
            Partnering with top industry leaders & enterprise brands
          </p>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-10 sm:gap-14">
              {[...heroData.trustedBy.logos, ...heroData.trustedBy.logos].map((logo, idx) => (
                <div key={idx} className="shrink-0 select-none">
                  <span className="text-sm sm:text-base font-bold tracking-tight text-slate-400 hover:text-slate-700 transition-colors whitespace-nowrap">
                    {logo.symbol}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
