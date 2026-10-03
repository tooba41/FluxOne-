import React, { useState, useEffect, useRef } from 'react'
import {
  LayoutDashboard,
  Receipt,
  Boxes,
  Users,
  Globe,
  Smartphone,
  CheckCircle2,
  Activity,
  ArrowRight,
} from 'lucide-react'
import { screenshotsData } from '@/data/screenshotsData'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function ProductScreenshotsSection() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const iconMap = {
    LayoutDashboard,
    Receipt,
    Boxes,
    Users,
    Globe,
    Smartphone,
  }

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

  const currentScreen =
    screenshotsData.screens.find((s) => s.id === activeTab) ||
    screenshotsData.screens[0]

  return (
    <section
      id="screenshots"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 relative bg-white border-t border-slate-200/80"
    >
      <div
        className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Header */}
        <SectionHeading
          badge={screenshotsData.badge}
          title={screenshotsData.title}
          subtitle={screenshotsData.subtitle}
        />

        {/* Tab Switcher Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap sm:justify-center mb-8 -mx-2 px-2">
          {screenshotsData.screens.map((screen) => {
            const IconComponent = iconMap[screen.iconName] || LayoutDashboard
            const isActive = screen.id === activeTab
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveTab(screen.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <IconComponent size={15} strokeWidth={1.5} />
                <span>{screen.name}</span>
              </button>
            )
          })}
        </div>

        {/* Screen Showcase Container with Hairline Border */}
        <div className="rounded-xl bg-slate-50/70 border border-slate-200 p-5 sm:p-7 overflow-hidden shadow-xs">
          
          {/* Top Info Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 mb-5">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {currentScreen.title}
                </h3>
                <span className="text-[10px] uppercase font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  Live View
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-normal">
                {currentScreen.description}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('#packages')}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-lg border-slate-200 bg-white text-slate-700 hover:bg-slate-50 w-full sm:w-auto justify-center"
            >
              <span>Test Drive This Screen</span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </Button>
          </div>

          {/* Metric Badges Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {currentScreen.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs"
              >
                <span className="text-xs text-slate-500 font-medium block truncate">
                  {m.label}
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 block">
                  {m.value}
                </span>
                <span className="text-xs text-[#8E238F] font-semibold mt-0.5 block truncate">
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* Screen Interface Mockup Container */}
          <div className="rounded-lg bg-white border border-slate-200 p-4 sm:p-5 shadow-2xs">
            {/* Window control dots */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="text-xs text-slate-500 font-mono ml-2 truncate">
                  FluxOne Workspace // {currentScreen.name}
                </span>
              </div>
              <span className="text-xs text-emerald-700 font-medium hidden xs:flex items-center gap-1 shrink-0">
                <Activity size={13} strokeWidth={1.5} /> Sync Engine 100% Active
              </span>
            </div>

            {/* Content Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8 space-y-3">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2.5">
                    Core Operational Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentScreen.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={14} className="text-[#8E238F] flex-shrink-0" strokeWidth={1.5} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-purple-50/70 border border-purple-100 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 text-xs text-slate-700">
                  <span className="font-medium">Sub-second local network response</span>
                  <span className="text-[#8E238F] font-semibold font-mono">Telemetry: 12ms ping</span>
                </div>
              </div>

              <div className="md:col-span-4 p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-center text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Device Support
                </span>
                <span className="text-sm font-semibold text-slate-900 mt-1">
                  POS Terminals · Web · Tablets · Mobile Apps
                </span>
                <div className="mt-3">
                  <span className="text-[10px] uppercase font-semibold text-[#8E238F] bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                    100% Offline Resilient
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductScreenshotsSection
