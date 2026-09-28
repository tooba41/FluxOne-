import React, { useState } from 'react'
import {
  LayoutDashboard,
  Receipt,
  Boxes,
  Users,
  Globe,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Activity,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { screenshotsData } from '@/data/screenshotsData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function ProductScreenshotsSection() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const iconMap = {
    LayoutDashboard,
    Receipt,
    Boxes,
    Users,
    Globe,
    Smartphone,
  }

  const currentScreen =
    screenshotsData.screens.find((s) => s.id === activeTab) ||
    screenshotsData.screens[0]

  return (
    <section id="screenshots" className="py-16 sm:py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <Badge variant="purple" size="md">
            {screenshotsData.badge}
          </Badge>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {screenshotsData.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            {screenshotsData.subtitle}
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar pb-2.5 sm:pb-0 sm:flex-wrap sm:justify-center mb-6 sm:mb-10 -mx-2 px-2">
          {screenshotsData.screens.map((screen) => {
            const IconComponent = iconMap[screen.iconName] || LayoutDashboard
            const isActive = screen.id === activeTab
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveTab(screen.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8E238F] to-[#412283] text-white shadow-md shadow-purple-900/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                <IconComponent size={16} />
                <span>{screen.name}</span>
              </button>
            )
          })}
        </div>

        {/* Screen Showcase Container */}
        <div className="rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-purple-100 shadow-[0_20px_50px_rgba(65,34,131,0.08)] p-4 sm:p-6 md:p-8 overflow-hidden">
          {/* Top Info Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-200/80 mb-5 sm:mb-6">
            <div>
              <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  {currentScreen.title}
                </h3>
                <Badge variant="green" size="sm">
                  Live View
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-normal">
                {currentScreen.description}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('#packages')}
              className="w-full sm:w-auto justify-center"
            >
              <span>Test Drive This Screen</span>
              <ArrowRight size={15} />
            </Button>
          </div>

          {/* Metric Badges Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
            {currentScreen.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
              >
                <span className="text-[11px] sm:text-xs text-slate-500 font-semibold block truncate">{m.label}</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 mt-1 block">
                  {m.value}
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm text-[#8E238F] font-bold mt-0.5 block truncate">
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* High Fidelity Screen Interface Mockup */}
          <div className="relative rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-3.5 sm:p-6 shadow-sm min-h-[280px] flex flex-col justify-between">
            {/* Window control dots */}
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-100 mb-3.5 sm:mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] sm:text-xs md:text-sm text-slate-500 font-mono ml-2 truncate">
                  FluxOne Workspace // {currentScreen.name}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm text-emerald-700 font-bold hidden xs:flex items-center gap-1 shrink-0">
                <Activity size={14} /> Sync Engine 100% Active
              </span>
            </div>

            {/* Content Mockup based on current screen */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 py-1 sm:py-2">
              <div className="md:col-span-8 space-y-3">
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs sm:text-sm font-bold text-[#412283] uppercase tracking-wider mb-2 sm:mb-2.5">
                    Core Operational Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {currentScreen.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 size={16} className="text-[#8E238F] flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-purple-50 border border-purple-100 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 text-xs sm:text-sm text-slate-700">
                  <span className="font-semibold">Sub-second local network response</span>
                  <span className="text-[#8E238F] font-bold font-mono">Telemetry: 12ms ping</span>
                </div>
              </div>

              <div className="md:col-span-4 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 flex flex-col justify-center text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Device Support</span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900 mt-1">
                  POS Terminals · Web · Tablets · Mobile Apps
                </span>
                <div className="mt-3 sm:mt-4">
                  <Badge variant="purple" size="sm">
                    100% Offline Resilient
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
