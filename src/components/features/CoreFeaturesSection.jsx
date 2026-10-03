import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  ReceiptText,
  Boxes,
  Users,
  Globe,
  ShoppingBag,
  UserCheck,
  BadgeDollarSign,
  BarChart3,
  Bot,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { coreFeaturesData } from '@/data/coreFeaturesData'
import { scrollToSection } from '@/lib/utils'

export function CoreFeaturesSection() {
  const [activeCategory, setActiveCategory] = useState('All Modules')
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemsVisible, setItemsVisible] = useState(3)
  const [isVisible, setIsVisible] = useState(false)
  const sliderRef = useRef(null)
  const sectionRef = useRef(null)

  const iconMap = {
    ReceiptText,
    Boxes,
    Users,
    Globe,
    ShoppingBag,
    UserCheck,
    BadgeDollarSign,
    BarChart3,
    Bot,
  }

  const categories = [
    { label: 'All Modules', ids: null },
    { label: 'POS & Front-Desk', ids: ['pos', 'online-ordering'] },
    { label: 'Supply & Warehouse', ids: ['inventory'] },
    { label: 'Customer & Commerce', ids: ['crm', 'website-builder', 'customer-management'] },
    { label: 'Finance & AI', ids: ['finance', 'analytics', 'ai-copilot'] },
  ]

  const filteredFeatures =
    activeCategory === 'All Modules' || activeCategory === 'All'
      ? coreFeaturesData.features
      : coreFeaturesData.features.filter((f) => {
          const cat = categories.find((c) => c.label === activeCategory)
          return cat?.ids?.includes(f.id)
        })

  const totalItems = filteredFeatures.length

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

  // Responsive items visible
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width >= 1024) setItemsVisible(3)
      else if (width >= 640) setItemsVisible(2)
      else setItemsVisible(1)
    }
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const scrollToCard = useCallback((index) => {
    if (!sliderRef.current) return
    const cards = sliderRef.current.querySelectorAll('[data-feature-card]')
    if (cards[index]) {
      const card = cards[index]
      const containerLeft = sliderRef.current.offsetLeft
      const cardLeft = card.offsetLeft - containerLeft
      sliderRef.current.scrollTo({
        left: cardLeft,
        behavior: 'smooth',
      })
      setActiveIndex(index)
    }
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    const maxIndex = Math.max(0, totalItems - itemsVisible)
    if (activeIndex >= maxIndex) {
      scrollToCard(0)
    } else {
      scrollToCard(activeIndex + 1)
    }
  }, [activeIndex, itemsVisible, totalItems, scrollToCard])

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    const maxIndex = Math.max(0, totalItems - itemsVisible)
    if (activeIndex <= 0) {
      scrollToCard(maxIndex)
    } else {
      scrollToCard(activeIndex - 1)
    }
  }, [activeIndex, itemsVisible, totalItems, scrollToCard])

  const handleScroll = () => {
    if (!sliderRef.current) return
    const slider = sliderRef.current
    const cards = slider.querySelectorAll('[data-feature-card]')
    if (cards.length === 0) return

    const cardWidth = cards[0].offsetWidth + 20
    const scrollPos = slider.scrollLeft
    const newIdx = Math.round(scrollPos / cardWidth)
    if (newIdx >= 0 && newIdx < totalItems && newIdx !== activeIndex) {
      setActiveIndex(newIdx)
    }
  }

  const maxDotIndex = Math.max(1, totalItems - itemsVisible + 1)

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 relative bg-slate-50/50 border-t border-slate-200/80 overflow-hidden"
    >
      <div
        className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-[#8E238F]">
              {coreFeaturesData.badge}
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
              {coreFeaturesData.title}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {coreFeaturesData.subtitle}
            </p>
          </div>

          {/* Controls: Counter + Prev/Next Buttons */}
          <div className="flex items-center gap-2.5 self-start lg:self-end shrink-0">
            <span className="text-xs font-mono font-medium text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              0{Math.min(activeIndex + 1, totalItems)} / 0{totalItems}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous feature"
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next feature"
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6 -mx-2 px-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.label)
                  setActiveIndex(0)
                  if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Carousel Slider Track (Uniform Height & Padding) */}
        <div className="relative w-full">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 px-1 -mx-1"
          >
            {filteredFeatures.map((feature) => {
              const IconComponent = iconMap[feature.iconName] || Boxes
              return (
                <div
                  key={feature.id}
                  data-feature-card="true"
                  className="snap-start w-[84vw] max-w-[340px] sm:max-w-none sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] shrink-0 p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors duration-150 flex flex-col justify-between group shadow-xs h-[360px]"
                >
                  <div>
                    {/* Top Bar with Icon & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 text-[#8E238F] border border-purple-100 flex items-center justify-center">
                        <IconComponent size={18} strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] uppercase font-semibold text-[#8E238F] bg-purple-50 px-2 py-0.5 rounded border border-purple-100/70">
                        {feature.badge}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="text-base font-semibold text-slate-900 mb-1.5 group-hover:text-[#8E238F] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {feature.shortDescription}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {feature.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2
                            size={14}
                            className="text-emerald-600 mt-0.5 shrink-0"
                            strokeWidth={1.5}
                          />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore shortcut */}
                  <div
                    className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#8E238F] hover:text-[#7a1d7b] transition-colors cursor-pointer"
                    onClick={() => scrollToSection('#packages')}
                  >
                    <span>Explore Capabilities</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        {maxDotIndex > 1 && (
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center justify-center gap-1.5 pointer-events-none select-none">
              {Array.from({ length: maxDotIndex }).map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-200 inline-block ${
                    activeIndex === idx ? 'w-5 bg-[#8E238F]' : 'w-1.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default CoreFeaturesSection
