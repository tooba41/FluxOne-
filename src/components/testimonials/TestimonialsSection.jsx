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
  Quote,
} from 'lucide-react'
import { testimonialsData } from '@/data/testimonialsData'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [counterValues, setCounterValues] = useState([0, 0, 0, 0])
  const counterAnimatedRef = useRef(false)

  const sectionRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const testimonials = testimonialsData.testimonials
  const total = testimonials.length
  const current = testimonials[currentIndex] || testimonials[0]

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

  const handleNext = useCallback(() => {
    if (animating) return
    setAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % total)
    setTimeout(() => setAnimating(false), 200)
  }, [animating, total])

  const handlePrev = useCallback(() => {
    if (animating) return
    setAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + total) % total)
    setTimeout(() => setAnimating(false), 200)
  }, [animating, total])

  // IntersectionObserver: reveal once and trigger counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          triggerCounters()
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

  const triggerCounters = () => {
    if (counterAnimatedRef.current) return
    counterAnimatedRef.current = true

    const targets = [4.9, 2500, 30, 250]
    const duration = 1500
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
      className="py-16 sm:py-20 lg:py-28 relative bg-white border-t border-slate-200/80 overflow-hidden"
    >
      <div
        className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* HEADER & ARROW CONTROLS */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-[#8E238F]">
              {testimonialsData.badge}
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
              {testimonialsData.title}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              {testimonialsData.subtitle}
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2.5 self-start sm:self-end shrink-0">
            <span className="text-xs font-mono font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              0{currentIndex + 1} / 0{total}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* FEATURED TESTIMONIAL CARD */}
        <div
          className="relative w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={current.id}
            className="rounded-xl bg-slate-50/50 border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden"
          >
            {/* Top Identity Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-4">
                {/* Clean Initials Avatar */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm select-none border border-slate-200/80 ${current.avatarBg}`}
                >
                  {current.avatarInitials}
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {current.name}
                    </h3>
                    <span className="text-[10px] uppercase font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                      Verified Client
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{current.role}</p>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-600">
                    <span className="font-semibold text-slate-900 flex items-center gap-1">
                      <Building2 size={13} strokeWidth={1.5} />
                      {current.company}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPin size={12} className="text-slate-400" strokeWidth={1.5} />
                      {current.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Impact Badge & Rating */}
              <div className="flex flex-col sm:items-end gap-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold self-start sm:self-end">
                  <Check size={12} strokeWidth={2.5} className="text-emerald-600" />
                  <span>Verified: {current.successMetric}</span>
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-500 ml-1">5.0 / 5.0</span>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="my-6">
              <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal italic pl-4 border-l-2 border-[#8E238F]">
                "{current.quote}"
              </blockquote>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-1 text-slate-800 font-semibold text-xs uppercase tracking-wider">
                  <AlertTriangle size={14} className="text-amber-600 shrink-0" strokeWidth={1.5} />
                  <span>The Operational Bottleneck</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {current.challenge}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-1 text-slate-800 font-semibold text-xs uppercase tracking-wider">
                  <Lightbulb size={14} className="text-emerald-600 shrink-0" strokeWidth={1.5} />
                  <span>The FluxOne Deployment</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {current.solution}
                </p>
              </div>
            </div>

            {/* Verified Performance Results */}
            <div className="pt-5 border-t border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Verified Performance Results:
                </h4>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  Industry: {current.industry}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {current.results.map((res, idx) => {
                  const IconComp = resultIconMap[res.iconName] || TrendingUp
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-500 font-medium truncate">
                          {res.label}
                        </span>
                        <IconComp size={14} className={`${res.color} shrink-0 ml-1`} strokeWidth={1.5} />
                      </div>
                      <span className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                        {res.value}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center justify-center gap-1.5 pointer-events-none select-none">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`transition-all duration-200 rounded-full inline-block ${
                    idx === currentIndex
                      ? 'w-5 h-1.5 bg-[#8E238F]'
                      : 'w-1.5 h-1.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight block">
                  {counterValues[0]} ★
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 block">
                  {testimonialsData.stats[0].label}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  {testimonialsData.stats[0].subtext}
                </span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight block">
                  {counterValues[1].toLocaleString()}+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 block">
                  {testimonialsData.stats[1].label}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  {testimonialsData.stats[1].subtext}
                </span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight block">
                  {counterValues[2]}+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 block">
                  {testimonialsData.stats[2].label}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  {testimonialsData.stats[2].subtext}
                </span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight block">
                  ${counterValues[3]}M+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 block">
                  {testimonialsData.stats[3].label}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
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
