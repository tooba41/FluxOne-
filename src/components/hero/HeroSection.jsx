import React, { useState } from 'react'
import {
  ArrowRight,
  PlayCircle,
  TrendingUp,
  Activity,
  CheckCircle2,
  Bot,
  DollarSign,
  ShoppingCart,
  Store,
  Receipt,
  Search,
  Banknote,
  CreditCard,
  QrCode,
  Sparkles,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Award,
} from 'lucide-react'
import { heroData } from '@/data/heroData'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { scrollToSection } from '@/lib/utils'

export function HeroSection({ onOpenPackageModal, onOpenDemoModal }) {
  const [mockupTab, setMockupTab] = useState('pos') // 'pos' | 'dashboard'
  const [posCategory, setPosCategory] = useState('All Items')

  const sampleProducts = [
    { id: 'p1', name: 'Artisan Espresso Beans (500g)', price: 18.00, category: 'Coffee & Tea', stock: '42 in stock' },
    { id: 'p2', name: 'Butter Croissant (Fresh Baked)', price: 4.50, category: 'Fresh Bakery', stock: '28 in stock' },
    { id: 'p3', name: 'Cold Brew Bottled 330ml', price: 6.00, category: 'Coffee & Tea', stock: '19 in stock' },
    { id: 'p4', name: 'Almond Milk 1L Pack', price: 5.20, category: 'Grocery', stock: '64 in stock' },
    { id: 'p5', name: 'Classic Oxford Cotton Shirt', price: 45.00, category: 'Apparel', stock: '15 in stock' },
    { id: 'p6', name: 'Ceramic Espresso Cup Set', price: 24.00, category: 'Apparel', stock: '8 in stock' },
  ]

  const filteredProducts = posCategory === 'All Items'
    ? sampleProducts
    : sampleProducts.filter((p) => p.category === posCategory)

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-center"
      style={{
        background: 'linear-gradient(165deg, #fdfbfe 0%, #f4effa 45%, #eef2fb 100%)',
      }}
    >
      {/* Animated Subtle Background Light */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-purple-200/40 via-[#7C3AED]/15 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Layout: Hero Text Left (lg:col 5), Visuals Right (lg:col 7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left animate-slide-up-fade">
            {/* Badge */}
            <div className="inline-block">
              <Badge variant="gradient" size="md" className="shadow-xs hover:scale-105 transition-transform">
                <Sparkles size={14} className="text-[#8E238F] animate-pulse" />
                <span>AI-Powered Business Management</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight text-slate-900 leading-[1.14]">
              Intelligent Business Management for{' '}
              <span className="bg-gradient-to-r from-[#8E238F] via-[#7C3AED] to-[#0052CC] bg-clip-text text-transparent">
                Modern Enterprises
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Manage retail stores, restaurants, pharmacies, supermarkets & wholesale branches with unified point of sale, live multi-warehouse sync, and automated AI insights.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                variant="primary"
                onClick={() => onOpenPackageModal ? onOpenPackageModal('enterprise') : scrollToSection('#packages')}
                className="flux-primary-btn text-base px-7 py-3.5 font-bold shadow-lg"
              >
                <span>Get Started Free</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => onOpenDemoModal ? onOpenDemoModal() : scrollToSection('#contact')}
                className="text-base px-7 py-3.5 font-bold hover:border-purple-300"
              >
                <PlayCircle size={18} className="text-[#8E238F]" />
                <span>Request Live Demo</span>
              </Button>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-500 border-t border-purple-100/70">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600" />
                No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck size={16} className="text-[#7C3AED]" />
                99.98% Cloud SLA
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <Award size={16} className="text-[#8E238F]" />
                10,000+ Active Terminals
              </span>
            </div>
          </div>

          {/* Right Visual Product Mockup with Floating Elements */}
          <div className="lg:col-span-6 relative animate-slide-up-fade">
            
            {/* Floating Live Badge Top Right */}
            <div className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center gap-2 p-2.5 rounded-2xl bg-white/95 border border-purple-200/80 shadow-[0_12px_35px_rgba(65,34,131,0.12)] backdrop-blur-md animate-float-medium">
              <div className="p-1.5 rounded-xl bg-emerald-100 text-emerald-700">
                <TrendingUp size={16} />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Today Multi-Branch Sales</span>
                <span className="text-sm font-black text-slate-900">$148,920.00 (+24.6%)</span>
              </div>
            </div>

            {/* Floating AI Insight Bottom Left */}
            <div className="absolute -bottom-5 -left-3 z-20 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white/95 border border-purple-200/80 shadow-[0_14px_40px_rgba(65,34,131,0.14)] backdrop-blur-md max-w-xs animate-float-slow">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-[#8E238F] to-[#7C3AED] text-white shrink-0">
                <Bot size={18} />
              </div>
              <div className="text-left text-xs">
                <span className="font-bold text-[#8E238F] block">AI Restock Alert</span>
                <span className="text-slate-600 text-[11.5px] leading-tight block">Espresso stock low at Branch #2. PO auto-drafted.</span>
              </div>
            </div>

            {/* Main Interactive Product Window */}
            <div className="relative rounded-2xl md:rounded-3xl border border-purple-200/90 bg-white shadow-[0_24px_70px_rgba(65,34,131,0.15)] overflow-hidden">
              
              {/* Window Tabs Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 border-b border-slate-200 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="ml-3 flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setMockupTab('pos')}
                      className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                        mockupTab === 'pos'
                          ? 'bg-gradient-to-r from-[#8E238F] to-[#412283] text-white shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                      }`}
                    >
                      🛒 POS Cashier
                    </button>
                    <button
                      type="button"
                      onClick={() => setMockupTab('dashboard')}
                      className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                        mockupTab === 'dashboard'
                          ? 'bg-gradient-to-r from-[#8E238F] to-[#412283] text-white shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                      }`}
                    >
                      📊 Central ERP
                    </button>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-emerald-700 font-bold">Online · Live Sync</span>
                </div>
              </div>

              {/* POS VIEW */}
              {mockupTab === 'pos' && (
                <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[380px]">
                  {/* Product Grid (7 cols) */}
                  <div className="sm:col-span-7 p-3.5 border-r border-slate-100 bg-slate-50/40 flex flex-col justify-between">
                    <div>
                      {/* Search and Category Pills */}
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2.5">
                        {heroData.posPreview.categories.slice(0, 4).map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setPosCategory(cat)}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                              posCategory === cat
                                ? 'bg-[#8E238F] text-white'
                                : 'bg-white text-slate-600 border border-slate-200'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      {/* Product Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {filteredProducts.slice(0, 4).map((p) => (
                          <div
                            key={p.id}
                            className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#8E238F] transition-all flex flex-col justify-between shadow-2xs"
                          >
                            <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{p.name}</h4>
                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-xs font-extrabold text-[#412283]">${p.price.toFixed(2)}</span>
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                                + Add
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Scanner: 🟢 USB Ready</span>
                      <span className="font-mono text-[#8E238F] font-bold">Terminal #01</span>
                    </div>
                  </div>

                  {/* Receipt Slip (5 cols) */}
                  <div className="sm:col-span-5 p-3.5 bg-white flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                        <span className="text-xs font-bold text-slate-900">Order #1042</span>
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">3 Items</span>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        {heroData.posPreview.cartItems.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-slate-700">
                            <span className="truncate pr-1">{item.qty}x {item.name.split('(')[0]}</span>
                            <span className="font-bold text-slate-900 shrink-0">${(item.price * item.qty).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <div className="flex justify-between text-xs font-extrabold text-slate-900">
                        <span>Total Due</span>
                        <span className="text-[#8E238F] text-sm">${heroData.posPreview.total.toFixed(2)}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                        <button className="py-1.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 text-center">Cash</button>
                        <button className="py-1.5 rounded-lg bg-purple-50 text-[#8E238F] font-bold border border-purple-200 text-center">Card</button>
                        <button className="py-1.5 rounded-lg bg-sky-50 text-sky-800 font-bold border border-sky-200 text-center">QR Pay</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DASHBOARD VIEW */}
              {mockupTab === 'dashboard' && (
                <div className="p-4 bg-slate-50/50 space-y-3 min-h-[380px]">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Sales</span>
                      <span className="text-sm font-black text-slate-900">$148,920</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Orders</span>
                      <span className="text-sm font-black text-slate-900">4,892</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Margin</span>
                      <span className="text-sm font-black text-[#8E238F]">38.4%</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">Live Branch Feeds</span>
                    {heroData.dashboardPreview.recentTransactions.slice(0, 3).map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between text-xs py-1 border-b last:border-0 border-slate-50">
                        <div className="truncate">
                          <span className="font-bold text-slate-900">{tx.branch}: </span>
                          <span className="text-slate-500">{tx.item}</span>
                        </div>
                        <span className="font-bold text-[#8E238F] ml-2 shrink-0">{tx.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3️⃣ TRUSTED BY SECTION (Infinite Logo Marquee Slider) */}
        <div className="mt-20 pt-8 border-t border-purple-100/60">
          <p className="text-center text-xs sm:text-sm uppercase tracking-widest text-slate-500 font-bold mb-6">
            {heroData.trustedBy.title}
          </p>

          {/* Infinite Auto-scrolling Marquee with Edge Fades */}
          <div className="relative w-full overflow-hidden mask-gradient">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fdfbfe] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#eef2fb] to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee flex items-center gap-6">
              {[...heroData.trustedBy.logos, ...heroData.trustedBy.logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#8E238F] hover:shadow-sm transition-all duration-200 shrink-0 cursor-default"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#8E238F] transition-colors whitespace-nowrap">
                    🏢 {logo.symbol}
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
