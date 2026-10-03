import React, { useState, useEffect, useRef } from 'react'
import {
  ArrowRight,
  PlayCircle,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  Bot,
  Activity,
} from 'lucide-react'
import { heroData } from '@/data/heroData'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function HeroSection({ onOpenPackageModal, onOpenDemoModal }) {
  const [revenueCount, setRevenueCount] = useState(0)
  const [ordersCount, setOrdersCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Hero number count-up animation on load
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
        setOrdersCount(targetOrders)
      }
    }

    requestAnimationFrame(animateCounts)
  }, [hasAnimated])

  return (
    <section
      id="hero"
      className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-white"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 2-COLUMN SPLIT GRID: Left Content & Right Interactive Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Actions */}
          <div className="lg:col-span-6 text-left space-y-5">
            
            {/* Badge */}
            <div className="hero-animate-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-[#8E238F]">
              <Sparkles size={13} className="text-[#8E238F]" strokeWidth={1.5} />
              <span>AI-Powered Business Management</span>
            </div>

            {/* Headline: Large, tight letter-spacing (-0.03em), line-height ~1.05 */}
            <h1 className="hero-animate-2 text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold tracking-[-0.03em] leading-[1.08] text-slate-900">
              Intelligent Business Management for{' '}
              <span className="text-[#8E238F]">Modern Enterprises</span>
            </h1>

            {/* Subheadline: Muted, max-width about 560px */}
            <p className="hero-animate-3 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-[540px]">
              Manage retail stores, restaurants, pharmacies, supermarkets & wholesale branches with unified point of sale, live multi-warehouse sync, and automated AI insights.
            </p>

            {/* Action Buttons */}
            <div className="hero-animate-4 pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                size="md"
                variant="primary"
                onClick={() =>
                  onOpenPackageModal ? onOpenPackageModal('enterprise') : scrollToSection('#packages')
                }
                className="flux-primary-btn text-xs sm:text-sm font-semibold h-11 px-5 rounded-lg justify-center shadow-sm"
              >
                <span>Get Started Free</span>
                <ArrowRight size={15} strokeWidth={1.5} />
              </Button>
              <Button
                size="md"
                variant="secondary"
                onClick={() => (onOpenDemoModal ? onOpenDemoModal() : scrollToSection('#contact'))}
                className="flux-secondary-btn text-xs sm:text-sm font-semibold h-11 px-5 rounded-lg justify-center"
              >
                <PlayCircle size={16} className="text-[#8E238F]" strokeWidth={1.5} />
                <span>Request Live Demo</span>
              </Button>
            </div>

            {/* Trust Items */}
            <div className="hero-animate-5 pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" strokeWidth={1.5} />
                No Credit Card Required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#8E238F] shrink-0" strokeWidth={1.5} />
                99.98% Cloud SLA
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award size={14} className="text-slate-600 shrink-0" strokeWidth={1.5} />
                10,000+ Active Terminals
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Dashboard Preview & AI Business Assistant Preview */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl border border-slate-200/90 bg-white shadow-lg shadow-purple-900/5 overflow-hidden">
              
              {/* Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 border-b border-slate-200 text-xs">
                <div className="flex items-center gap-3">
                  {/* Window dots */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="font-semibold text-slate-700 text-xs">
                    Multi-Branch Command Center
                  </span>
                </div>

                {/* Live Status */}
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-mono text-slate-600 text-[11px] font-medium">8 Stores Live</span>
                </div>
              </div>

              {/* DASHBOARD CONTENT */}
              <div className="p-4 sm:p-5 bg-slate-50/40 space-y-4">
                
                {/* 3 Metrics KPI Cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">
                      Total Revenue
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 block tracking-tight">
                      ${revenueCount.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold inline-flex items-center gap-0.5">
                      <TrendingUp size={11} strokeWidth={2} /> +24.6%
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">
                      Total Orders
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 block tracking-tight">
                      {ordersCount.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Today across 8 stores
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">
                      Sync SLA
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#8E238F] mt-0.5 block tracking-tight">
                      99.98%
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      12ms latency
                    </span>
                  </div>
                </div>

                {/* Real-Time Telemetry Throughput Chart */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <Activity size={14} className="text-[#8E238F]" strokeWidth={1.5} />
                      <span className="font-semibold text-slate-800">Real-Time Multi-Store Throughput</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">Sync: Realtime</span>
                  </div>
                  <div className="h-16 w-full">
                    <svg className="w-full h-full" viewBox="0 0 400 60" fill="none">
                      <defs>
                        <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8E238F" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#8E238F" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 45 Q 50 20, 100 35 T 200 15 T 300 28 T 400 10 L 400 60 L 0 60 Z"
                        fill="url(#heroGradient)"
                      />
                      <path
                        d="M 0 45 Q 50 20, 100 35 T 200 15 T 300 28 T 400 10"
                        fill="none"
                        stroke="#8E238F"
                        strokeWidth="2"
                        className="animate-chart-line"
                      />
                    </svg>
                  </div>
                </div>

                {/* AI Business Assistant Preview */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-50 via-white to-purple-50/50 border border-purple-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#8E238F]">
                      <Bot size={15} strokeWidth={1.5} className="text-[#8E238F]" />
                      <span>AI Business Assistant</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#8E238F] bg-white px-2 py-0.5 rounded-full border border-purple-200/70 shadow-2xs">
                      Live Prediction
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-snug">
                    "Detected +28% weekend demand surge for Downtown branch. Automated restock PO for 120 units has been prepared."
                  </p>
                </div>

                {/* Live Transactions Feed */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">Live Branch Feed</span>
                    <span className="text-[10px] text-slate-400 font-mono">Automated Ledger</span>
                  </div>
                  <div className="space-y-1.5">
                    {heroData.dashboardPreview.recentTransactions.slice(0, 3).map((tx) => (
                      <div
                        key={tx.id}
                        className="flex items-center justify-between text-xs py-1 border-b last:border-0 border-slate-100"
                      >
                        <div className="truncate pr-2">
                          <span className="font-semibold text-slate-900">{tx.branch}: </span>
                          <span className="text-slate-500">{tx.item}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-semibold text-slate-900">{tx.amount}</span>
                          <span className="text-[9px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                            {tx.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* TRUSTED BY ROW: Clean quiet row with text wordmarks */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-slate-200/80">
          <p className="text-center text-xs uppercase tracking-wider text-slate-400 font-semibold mb-5">
            {heroData.trustedBy.title}
          </p>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-8 sm:gap-12">
              {[...heroData.trustedBy.logos, ...heroData.trustedBy.logos].map((logo, idx) => (
                <div key={idx} className="shrink-0 select-none">
                  <span className="text-sm font-semibold tracking-tight text-slate-400 hover:text-slate-600 transition-colors whitespace-nowrap">
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
