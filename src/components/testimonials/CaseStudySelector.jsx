import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
  Building2,
  MapPin,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Users,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Quote,
  FolderOpen,
  PlusCircle,
  RefreshCw,
  Award,
} from 'lucide-react'
import { testimonialsData } from '@/data/testimonialsData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export function CaseStudySelector({ onOpenModal }) {
  // 3-State Switcher: 'populated' | 'empty' | 'loading'
  const [viewState, setViewState] = useState('populated')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [animating, setAnimating] = useState(false)

  const timerRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const testimonials = testimonialsData.testimonials
  const total = testimonials.length
  const current = testimonials[currentIndex] || testimonials[0]

  // Icon map for result stats
  const resultIconMap = {
    TrendingUp,
    TrendingDown,
    Clock,
    CheckCircle2,
    ShieldCheck,
    Zap,
    Layers,
    Users,
  }

  // Next Case Study
  const handleNext = useCallback(() => {
    if (animating || viewState !== 'populated') return
    setAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % total)
    setTimeout(() => setAnimating(false), 350)
  }, [animating, total, viewState])

  // Prev Case Study
  const handlePrev = useCallback(() => {
    if (animating || viewState !== 'populated') return
    setAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + total) % total)
    setTimeout(() => setAnimating(false), 350)
  }, [animating, total, viewState])

  // Direct Select
  const handleSelect = (index) => {
    if (index === currentIndex || animating) return
    setAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setAnimating(false), 350)
  }

  // Auto-advance every 7 seconds
  useEffect(() => {
    if (isPaused || viewState !== 'populated') {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      handleNext()
    }, 7000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, viewState, handleNext])

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) handleNext()
    else if (diff < -50) handlePrev()
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <div className="w-full">
      {/* ================= STATE SWITCHER DEMO TOOLBAR ================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 p-2 rounded-2xl bg-white/90 border border-purple-100 shadow-sm max-w-2xl mx-auto backdrop-blur-md">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 pl-3 hidden sm:inline">
          View Mode:
        </span>
        <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={() => setViewState('populated')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewState === 'populated'
                ? 'bg-gradient-to-r from-[#8E238F] to-[#412283] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>✅ With Cases</span>
            <span className="text-[10px] opacity-80">(Default)</span>
          </button>

          <button
            type="button"
            onClick={() => setViewState('empty')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewState === 'empty'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>❌ Empty State</span>
          </button>

          <button
            type="button"
            onClick={() => setViewState('loading')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewState === 'loading'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>⏳ Loading State</span>
          </button>
        </div>
      </div>

      {/* ================= STATE 1: POPULATED STATE ✅ ================= */}
      {viewState === 'populated' && (
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Horizontal Customer Cards Carousel */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#8E238F]" />
                Select Customer Story:
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous story"
                  className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#8E238F] hover:border-purple-300 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next story"
                  className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#8E238F] hover:border-purple-300 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* 6 Horizontal Clickable Customer Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {testimonials.map((t, idx) => {
                const isActive = idx === currentIndex
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    style={{ animationDelay: `${idx * 0.08}s` }}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border flex flex-col justify-between group ${
                      isActive
                        ? 'bg-white border-[#8E238F] shadow-lg shadow-purple-950/10 scale-105 ring-2 ring-purple-400/40 -translate-y-1'
                        : 'bg-white/85 border-slate-200/90 hover:border-purple-300 hover:bg-white hover:-translate-y-1 hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Avatar */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.avatarBg} text-white flex items-center justify-center text-xl shadow-sm transition-transform duration-300 group-hover:scale-110`}
                        >
                          {t.avatarEmoji}
                        </div>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#8E238F] animate-ping" />
                        )}
                      </div>

                      {/* Name & Company */}
                      <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-[#8E238F] transition-colors">
                        {t.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5 font-medium">
                        {t.company}
                      </p>
                    </div>

                    {/* Key Metric Pill */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100">
                      <span
                        className={`text-xs font-extrabold truncate block ${
                          isActive ? 'text-[#8E238F]' : 'text-emerald-700'
                        }`}
                      >
                        {t.successMetric}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Pagination Dots with Active Pulse */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {testimonials.map((_, idx) => {
                const isActive = idx === currentIndex
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    aria-label={`Go to case ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'w-7 bg-gradient-to-r from-[#8E238F] to-[#412283] animate-dot-pulse scale-105'
                        : 'w-2 bg-slate-300 hover:bg-purple-300'
                    }`}
                  />
                )
              })}
            </div>
          </div>

          {/* ================= DETAILED CASE STUDY VIEW ================= */}
          <div
            key={current.id}
            className="rounded-3xl bg-gradient-to-br from-white via-[#faf7fd] to-[#f6f0fb] border-2 border-purple-100/90 border-l-[6px] border-l-[#8E238F] p-6 sm:p-10 shadow-[0_24px_70px_rgba(65,34,131,0.09)] backdrop-blur-xl animate-slide-up-fade relative overflow-hidden"
          >
            {/* Background floating glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-[#8E238F]/15 to-purple-400/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header: Large Avatar, Name, Role, Company & Verified Pill */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-purple-100/80 relative z-10">
              <div className="flex items-center gap-5">
                {/* Large 100px Avatar */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border-2 border-[#8E238F] animate-avatar-ring pointer-events-none" />
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${current.avatarBg} border-4 border-white shadow-xl shadow-purple-900/20 flex items-center justify-center text-4xl sm:text-5xl animate-avatar-pop select-none`}
                  >
                    {current.avatarEmoji}
                  </div>
                </div>

                {/* Identity */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {current.name}
                    </h3>
                    <Badge variant="purple" size="sm">
                      Verified Case
                    </Badge>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 mt-0.5">{current.role}</p>
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                    <span className="text-sm font-bold text-[#8E238F] flex items-center gap-1">
                      <Building2 size={14} />
                      {current.company}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">·</span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <MapPin size={13} />
                      {current.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Metric Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-extrabold text-sm self-start md:self-auto shadow-2xs">
                <Award size={18} className="text-emerald-600 shrink-0" />
                <span>Impact: {current.successMetric}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative my-6 z-10">
              <Quote size={64} className="absolute -top-4 -left-2 text-[#8E238F]/15 -z-10 transform -scale-x-100" />
              <blockquote className="text-base sm:text-lg md:text-xl font-medium text-slate-800 leading-relaxed italic pl-4 border-l-2 border-purple-200">
                "{current.quote}"
              </blockquote>
            </div>

            {/* Challenge & Solution 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 relative z-10">
              {/* Challenge Box (Yellow/Amber Background) */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 shadow-2xs">
                <div className="flex items-center gap-2 mb-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
                  <AlertTriangle size={16} className="text-amber-600 shrink-0" />
                  <span>The Operational Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {current.challenge}
                </p>
              </div>

              {/* Solution Box (Green/Emerald Background) */}
              <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 shadow-2xs">
                <div className="flex items-center gap-2 mb-2 text-emerald-900 font-extrabold text-xs uppercase tracking-wider">
                  <Lightbulb size={16} className="text-emerald-600 shrink-0" />
                  <span>The FluxOne Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {current.solution}
                </p>
              </div>
            </div>

            {/* Results 4-Column Grid */}
            <div className="pt-6 border-t border-purple-100/80 relative z-10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3.5">
                Key Verified Performance Results:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {current.results.map((res, idx) => {
                  const IconComp = resultIconMap[res.iconName] || TrendingUp
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between group hover:border-purple-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-slate-500 font-semibold">{res.label}</span>
                        <IconComp size={16} className={res.color} />
                      </div>
                      <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {res.value}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STATE 2: EMPTY STATE ❌ ================= */}
      {viewState === 'empty' && (
        <div className="rounded-3xl border-2 border-dashed border-purple-300/80 bg-purple-50/30 p-10 sm:p-16 text-center shadow-inner animate-slide-up-fade">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-white border border-purple-200 shadow-md flex items-center justify-center text-4xl mb-6 animate-float-slow">
            📂
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            No Case Studies Yet
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            Start building your success stories by collecting verified customer testimonials, store manager metrics, and deployment ROI directly from active business workspaces.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              className="flux-primary-btn font-bold inline-flex items-center gap-2"
              onClick={() => setViewState('populated')}
            >
              <PlusCircle size={17} />
              <span>Create First Case Study</span>
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => setViewState('populated')}
            >
              <span>Load Template Examples</span>
            </Button>
          </div>
        </div>
      )}

      {/* ================= STATE 3: LOADING STATE ⏳ (Skeleton Shimmer) ================= */}
      {viewState === 'loading' && (
        <div className="space-y-6 animate-slide-up-fade">
          {/* Skeleton Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-3"
              >
                <div className="w-11 h-11 rounded-xl animate-shimmer" />
                <div className="h-3 w-3/4 rounded-md animate-shimmer" />
                <div className="h-2.5 w-1/2 rounded-md animate-shimmer" />
                <div className="h-3.5 w-full rounded-md animate-shimmer mt-2" />
              </div>
            ))}
          </div>

          {/* Skeleton Detail View Card */}
          <div className="rounded-3xl bg-white border border-purple-100 p-6 sm:p-10 space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full animate-shimmer shrink-0" />
              <div className="space-y-2.5 w-full max-w-md">
                <div className="h-6 w-3/4 rounded-lg animate-shimmer" />
                <div className="h-4 w-1/2 rounded-md animate-shimmer" />
                <div className="h-3.5 w-1/3 rounded-md animate-shimmer" />
              </div>
            </div>

            <div className="h-16 w-full rounded-2xl animate-shimmer" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-28 rounded-2xl animate-shimmer" />
              <div className="h-28 rounded-2xl animate-shimmer" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4">
              <div className="h-20 rounded-2xl animate-shimmer" />
              <div className="h-20 rounded-2xl animate-shimmer" />
              <div className="h-20 rounded-2xl animate-shimmer" />
              <div className="h-20 rounded-2xl animate-shimmer" />
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => setViewState('populated')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8E238F] hover:underline cursor-pointer"
            >
              <RefreshCw size={13} className="animate-spin" />
              <span>Simulating active fetch... Click here to view populated cases</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CaseStudySelector
