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
} from 'lucide-react'
import { testimonialsData } from '@/data/testimonialsData'
import { Badge } from '@/components/ui/Badge'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  // Scroll & visibility animation state
  const [headerVisible, setHeaderVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)

  // Animated counters state
  const [counterValues, setCounterValues] = useState([0, 0, 0, 0])
  const counterAnimatedRef = useRef(false)

  // Element Refs
  const headerRef = useRef(null)
  const statsRef = useRef(null)
  const sectionRef = useRef(null)
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

  // Next Slide (Triggered on Arrow Click)
  const handleNext = useCallback(() => {
    if (animating) return
    setAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % total)
    setTimeout(() => setAnimating(false), 350)
  }, [animating, total])

  // Prev Slide (Triggered on Arrow Click)
  const handlePrev = useCallback(() => {
    if (animating) return
    setAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + total) % total)
    setTimeout(() => setAnimating(false), 350)
  }, [animating, total])

  // Intersection Observer for scroll triggers
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) setHeaderVisible(true)
          if (entry.target === statsRef.current) {
            setStatsVisible(true)
            triggerCounters()
          }
        }
      })
    }, observerOptions)

    if (headerRef.current) observer.observe(headerRef.current)
    if (statsRef.current) observer.observe(statsRef.current)

    return () => observer.disconnect()
  }, [])

  // Smooth 60fps Counter Animation
  const triggerCounters = () => {
    if (counterAnimatedRef.current) return
    counterAnimatedRef.current = true

    const targets = [4.9, 2500, 30, 250]
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCounterValues([
        Number((targets[0] * easeOut).toFixed(1)),
        Math.floor(targets[1] * easeOut),
        Math.floor(targets[2] * easeOut),
        Math.floor(targets[3] * easeOut),
      ])

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCounterValues(targets)
      }
    }

    requestAnimationFrame(animate)
  }

  // Touch swipe support for mobile
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
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-28 relative bg-[#f9f7fc] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ================= HEADER & ARROW CONTROLS ================= */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            <div className={`slide-down ${headerVisible ? 'visible' : ''}`}>
              <Badge variant="purple" size="md">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#8E238F]" />
                  {testimonialsData.badge}
                </span>
              </Badge>
            </div>

            <h2
              className={`mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight slide-up ${
                headerVisible ? 'visible' : ''
              }`}
            >
              {testimonialsData.title}
            </h2>

            <p
              className={`mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl fade-in ${
                headerVisible ? 'visible' : ''
              }`}
            >
              {testimonialsData.subtitle}
            </p>
          </div>

          {/* Single Unified Slider Arrow Controls with Slide Index */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-mono font-bold text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
              0{currentIndex + 1} / 0{total}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-[#8E238F] hover:border-[#8E238F] hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-11 h-11 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-[#8E238F] hover:border-[#8E238F] hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-2xs"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= FEATURED TESTIMONIAL CARD ================= */}
        <div
          className="relative w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card */}
          <div
            key={current.id}
            className="rounded-3xl bg-gradient-to-br from-white via-[#faf7fd] to-[#f6effa] border-2 border-purple-100/90 border-l-[6px] border-l-[#8E238F] p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(65,34,131,0.08)] backdrop-blur-xl animate-slide-up-fade relative overflow-hidden"
          >
            {/* Top Identity Row: Avatar, Name, Company, Ratings & Metric Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-purple-100/80 relative z-10">
              <div className="flex items-center gap-5">
                {/* Large 96px Avatar with Animated Pulse Ring */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border-2 border-[#8E238F] animate-avatar-ring pointer-events-none" />
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${current.avatarBg} border-4 border-white shadow-xl shadow-purple-900/20 flex items-center justify-center text-4xl sm:text-5xl animate-avatar-pop select-none`}
                  >
                    {current.avatarEmoji}
                  </div>
                </div>

                {/* Identity & Company */}
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {current.name}
                    </h3>
                    <Badge variant="purple" size="sm">
                      Verified Client
                    </Badge>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 mt-0.5">{current.role}</p>
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap text-xs sm:text-sm">
                    <span className="font-bold text-[#8E238F] flex items-center gap-1">
                      <Building2 size={14} />
                      {current.company}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <MapPin size={13} className="text-slate-400" />
                      {current.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Impact Badge & Rating Stars */}
              <div className="flex flex-col sm:items-end gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-emerald-50 to-teal-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-extrabold shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] animate-check-mark flex-shrink-0 font-black">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>Verified: {current.successMetric}</span>
                </div>

                {/* Animated 5-Star Rating */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        style={{ animationDelay: `${i * 0.08}s` }}
                        className="fill-amber-400 text-amber-400 transform hover:scale-125 transition-transform duration-200 animate-[starPop_0.5s_ease-out_backwards]"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-500 ml-1">5.0 / 5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative my-6 sm:my-8 z-10">
              <Quote
                size={80}
                className="absolute -top-5 -left-3 text-[#8E238F]/15 -z-10 transform -scale-x-100"
              />
              <blockquote className="text-lg sm:text-2xl md:text-[24px] font-medium text-slate-800 leading-relaxed italic pl-4 sm:pl-6 border-l-2 border-purple-200">
                "{current.quote}"
              </blockquote>
              <div className="mt-4 ml-4 sm:ml-6 h-1 w-20 bg-gradient-to-r from-[#8E238F] via-purple-500 to-teal-400 rounded-full" />
            </div>

            {/* Operational Challenge & Solution Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 relative z-10">
              {/* Challenge Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
                  <AlertTriangle size={15} className="text-amber-600 shrink-0" />
                  <span>The Operational Bottleneck</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {current.challenge}
                </p>
              </div>

              {/* Solution Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5 text-emerald-900 font-extrabold text-xs uppercase tracking-wider">
                  <Lightbulb size={15} className="text-emerald-600 shrink-0" />
                  <span>The FluxOne Deployment</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {current.solution}
                </p>
              </div>
            </div>

            {/* 4 Verified Results Grid */}
            <div className="pt-6 border-t border-purple-100/80 relative z-10">
              <div className="flex items-center justify-between mb-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Verified Performance Results:
                </h4>
                <span className="text-xs text-purple-700 font-bold hidden sm:inline">
                  Industry: {current.industry}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {current.results.map((res, idx) => {
                  const IconComp = resultIconMap[res.iconName] || TrendingUp
                  return (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between group hover:border-purple-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-500 font-semibold truncate">
                          {res.label}
                        </span>
                        <IconComp size={15} className={res.color} />
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

          {/* Visual Indicator Dots Only (Non-Clickable / Only Moves on Arrow Press) */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center justify-center gap-2 pointer-events-none select-none">
              {testimonials.map((_, idx) => {
                const isActive = idx === currentIndex
                return (
                  <span
                    key={idx}
                    className={`transition-all duration-300 rounded-full inline-block ${
                      isActive
                        ? 'w-7 h-2 bg-gradient-to-r from-[#8E238F] to-[#412283] shadow-xs'
                        : 'w-2 h-2 bg-slate-300'
                    }`}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* ================= STATS SECTION ================= */}
        <div
          ref={statsRef}
          className="mt-16 sm:mt-20 max-w-5xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white via-purple-50/60 to-white border border-purple-200/70 shadow-[0_12px_40px_rgba(65,34,131,0.06)] relative overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-purple-100">
              {/* Stat 1 */}
              <div
                className={`text-center flex flex-col justify-center slide-up stagger-1 ${
                  statsVisible ? 'visible' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-[#8E238F] to-[#412283] bg-clip-text text-transparent tracking-tight">
                  {counterValues[0]} ★
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-2 block">
                  {testimonialsData.stats[0].label}
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5 block">
                  {testimonialsData.stats[0].subtext}
                </span>
              </div>

              {/* Stat 2 */}
              <div
                className={`text-center pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-center slide-up stagger-2 ${
                  statsVisible ? 'visible' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-[#8E238F] to-[#412283] bg-clip-text text-transparent tracking-tight">
                  {counterValues[1].toLocaleString()}+
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-2 block">
                  {testimonialsData.stats[1].label}
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5 block">
                  {testimonialsData.stats[1].subtext}
                </span>
              </div>

              {/* Stat 3 */}
              <div
                className={`text-center pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-center slide-up stagger-3 ${
                  statsVisible ? 'visible' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-[#8E238F] to-[#412283] bg-clip-text text-transparent tracking-tight">
                  {counterValues[2]}+
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-2 block">
                  {testimonialsData.stats[2].label}
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5 block">
                  {testimonialsData.stats[2].subtext}
                </span>
              </div>

              {/* Stat 4 */}
              <div
                className={`text-center pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-center slide-up stagger-4 ${
                  statsVisible ? 'visible' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-[#8E238F] to-[#412283] bg-clip-text text-transparent tracking-tight">
                  ${counterValues[3]}M+
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-2 block">
                  {testimonialsData.stats[3].label}
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5 block">
                  {testimonialsData.stats[3].subtext}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
