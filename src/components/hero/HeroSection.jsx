import React from 'react'
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  TrendingUp,
  Activity,
  CheckCircle2,
  Bot,
  DollarSign,
  ShoppingCart,
  Store,
} from 'lucide-react'
import { heroData } from '@/data/heroData'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { scrollToSection } from '@/lib/utils'

export function HeroSection({ onOpenPackageModal, onOpenDemoModal }) {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      style={{
        background: 'linear-gradient(165deg, #fdfbfe 0%, #f4effa 45%, #eef2fb 100%)',
      }}
    >
      {/* Soft ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-purple-200/30 via-purple-100/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Text */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-4">
            <Badge variant="gradient" size="md">
              <Sparkles size={15} className="text-[#8E238F] animate-pulse" />
              <span>{heroData.badge}</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight md:leading-[1.2]">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-[#8E238F] via-[#632a93] to-[#412283] bg-clip-text text-transparent">
              {heroData.headingGradient}
            </span>
          </h1>

          {/* Short Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            {heroData.description}
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => onOpenPackageModal ? onOpenPackageModal('enterprise') : scrollToSection('#packages')}
              className="w-full sm:w-auto text-base"
            >
              <span>{heroData.ctaButtons.primary.label}</span>
              <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onOpenDemoModal ? onOpenDemoModal() : scrollToSection('#contact')}
              className="w-full sm:w-auto text-base"
            >
              <PlayCircle size={18} className="text-[#8E238F]" />
              <span>{heroData.ctaButtons.secondary.label}</span>
            </Button>
          </div>

          {/* Key Stats Strip */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-5 rounded-2xl bg-white/95 border border-purple-100 shadow-[0_10px_30px_rgba(65,34,131,0.06)]">
            {heroData.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-2 text-center border-r last:border-r-0 border-slate-100">
                <span className="text-2xl sm:text-3xl font-bold text-[#412283]">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Visual Previews */}
        <div className="mt-14 relative">
          <div className="relative rounded-2xl md:rounded-3xl border border-purple-200/80 bg-white shadow-[0_20px_60px_rgba(65,34,131,0.12)] p-4 sm:p-6 overflow-hidden">
            {/* Window title bar */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-5 px-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs sm:text-sm text-slate-500 font-mono hidden sm:inline">
                  https://app.fluxone.com/admin/dashboard
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  8 Branches Synchronized
                </span>
              </div>
            </div>

            {/* Dashboard Mockup Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left metrics and telemetry */}
              <div className="lg:col-span-8 space-y-4">
                {/* Metric Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-slate-600 font-bold">Multi-Branch Sales</span>
                      <div className="p-1.5 rounded-lg bg-purple-100 text-[#8E238F]">
                        <DollarSign size={16} />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-2">
                      {heroData.dashboardPreview.totalRevenue}
                    </div>
                    <span className="text-xs sm:text-sm text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                      <TrendingUp size={14} /> {heroData.dashboardPreview.revenueGrowth} this week
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-slate-600 font-bold">POS Orders</span>
                      <div className="p-1.5 rounded-lg bg-sky-100 text-sky-700">
                        <ShoppingCart size={16} />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-2">
                      {heroData.dashboardPreview.totalOrders}
                    </div>
                    <span className="text-xs sm:text-sm text-sky-700 font-semibold flex items-center gap-1 mt-1">
                      <Activity size={14} /> Live POS Terminal Sync
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-slate-600 font-bold">Stock Availability</span>
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                        <Store size={16} />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-2">
                      {heroData.dashboardPreview.inventoryHealth}
                    </div>
                    <span className="text-xs sm:text-sm text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                      <CheckCircle2 size={14} /> 0 Stockout Disruptions
                    </span>
                  </div>
                </div>

                {/* Real-time Transaction Ledger */}
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                      Live Multi-Branch Sales Feed
                    </h4>
                    <span className="text-xs text-[#8E238F] font-semibold bg-purple-50 px-2.5 py-0.5 rounded border border-purple-100">
                      Sync: Realtime WebSocket
                    </span>
                  </div>
                  <div className="space-y-2">
                    {heroData.dashboardPreview.recentTransactions.map((tx) => (
                      <div
                        key={tx.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-50/90 border border-slate-100 text-xs sm:text-sm hover:bg-purple-50/40 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-[#8E238F] font-bold">{tx.id}</span>
                          <span className="text-slate-800 font-semibold">{tx.branch}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-900">{tx.amount}</span>
                          <span className="text-xs text-slate-400">{tx.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side: AI Business Assistant Preview widget */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-2 rounded-xl bg-gradient-to-tr from-[#8E238F] to-[#412283] text-white shadow-sm">
                      <Bot size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{heroData.aiAssistantPreview.title}</h4>
                      <p className="text-xs text-[#8E238F] font-semibold">{heroData.aiAssistantPreview.status}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-3">
                    {heroData.aiAssistantPreview.suggestions.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white border border-purple-100 shadow-2xs text-xs sm:text-sm"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <Badge variant="purple" size="sm">
                            {item.tag}
                          </Badge>
                          <span className="text-xs text-[#8E238F] font-bold font-mono">
                            {item.confidence} accuracy
                          </span>
                        </div>
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{item.message}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-purple-100 flex items-center justify-between text-xs sm:text-sm text-slate-600">
                  <span className="font-medium">FluxOne AI Copilot</span>
                  <span className="text-[#8E238F] font-bold cursor-pointer hover:underline">
                    Auto-Approve Restock →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Businesses Section */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-500 font-bold mb-5">
            {heroData.trustedBy.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {heroData.trustedBy.logos.map((logo, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#8E238F] hover:border-purple-300 shadow-2xs transition-all cursor-default"
              >
                {logo.symbol}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
