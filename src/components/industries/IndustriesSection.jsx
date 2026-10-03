import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  ShoppingBag,
  UtensilsCrossed,
  Coffee,
  Pill,
  Store,
  Sparkles,
  Tv,
  Shirt,
  Wrench,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'
import { industriesData } from '@/data/industriesData'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemsVisible, setItemsVisible] = useState(4)
  const [isVisible, setIsVisible] = useState(false)
  const sliderRef = useRef(null)
  const sectionRef = useRef(null)
  const totalIndustries = industriesData.industries.length

  const iconMap = {
    ShoppingBag,
    UtensilsCrossed,
    Coffee,
    Pill,
    Store,
    Sparkles,
    Tv,
    Shirt,
    Wrench,
    Truck,
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

  // Responsive items visible
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width >= 1024) setItemsVisible(4)
      else if (width >= 768) setItemsVisible(3)
      else if (width >= 640) setItemsVisible(2)
      else setItemsVisible(1)
    }
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const scrollToCard = useCallback((index) => {
    if (!sliderRef.current) return
    const cards = sliderRef.current.querySelectorAll('[data-card]')
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
    const maxIndex = Math.max(0, totalIndustries - itemsVisible)
    if (activeIndex >= maxIndex) {
      scrollToCard(0)
    } else {
      scrollToCard(activeIndex + 1)
    }
  }, [activeIndex, itemsVisible, totalIndustries, scrollToCard])

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    const maxIndex = Math.max(0, totalIndustries - itemsVisible)
    if (activeIndex <= 0) {
      scrollToCard(maxIndex)
    } else {
      scrollToCard(activeIndex - 1)
    }
  }, [activeIndex, itemsVisible, totalIndustries, scrollToCard])

  const handleScroll = () => {
    if (!sliderRef.current) return
    const slider = sliderRef.current
    const cards = slider.querySelectorAll('[data-card]')
    if (cards.length === 0) return

    const cardWidth = cards[0].offsetWidth + 16
    const scrollPos = slider.scrollLeft
    const newIdx = Math.round(scrollPos / cardWidth)
    if (newIdx >= 0 && newIdx < totalIndustries && newIdx !== activeIndex) {
      setActiveIndex(newIdx)
    }
  }

  const maxDotIndex = Math.max(1, totalIndustries - itemsVisible + 1)

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 relative bg-white border-t border-slate-200/80 overflow-hidden"
    >
      <div
        className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Header & Arrow Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-[#8E238F]">
              {industriesData.badge}
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
              {industriesData.title}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              {industriesData.subtitle}
            </p>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-2 self-start sm:self-end shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous industry"
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next industry"
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Industry Cards Slider Track (Uniform Height & Padding) */}
        <div className="relative w-full">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 px-1 -mx-1"
          >
            {industriesData.industries.map((item) => {
              const IconComponent = iconMap[item.iconName] || Store
              return (
                <div
                  key={item.id}
                  data-card="true"
                  className="snap-start w-[84vw] max-w-[300px] sm:max-w-none sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] shrink-0 p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors duration-150 flex flex-col justify-between group shadow-xs h-[330px]"
                >
                  <div>
                    {/* Uniform Icon & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 text-[#8E238F] border border-purple-100 flex items-center justify-center">
                        <IconComponent size={18} strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                        POS Ready
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#8E238F] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mt-2 mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-1.5">
                      {item.highlights.slice(0, 2).map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-1 h-1 rounded-full bg-[#8E238F] shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More link */}
                  <button
                    type="button"
                    onClick={() => setSelectedIndustry(item)}
                    className="w-full pt-3 border-t border-slate-100 text-xs font-semibold text-[#8E238F] hover:text-[#7a1d7b] flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Carousel Dots */}
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
      </div>

      {/* Industry Modal */}
      {selectedIndustry && (
        <Modal
          isOpen={Boolean(selectedIndustry)}
          onClose={() => setSelectedIndustry(null)}
          title={`${selectedIndustry.name} POS & Management`}
          subtitle={selectedIndustry.tagline}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedIndustry.details.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2.5">
                  Tailored POS Workflows
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.details.posFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2.5">
                  Specialized Stock & Supply
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.details.inventoryFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-semibold text-slate-800 mb-2">Key Operational Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedIndustry.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1 h-1 rounded-full bg-[#8E238F] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                size="md"
                className="flux-primary-btn font-semibold text-xs px-4 py-2 rounded-lg w-full sm:w-auto justify-center"
                onClick={() => {
                  setSelectedIndustry(null)
                  const el = document.getElementById('packages')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get Started with {selectedIndustry.name} Setup
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default IndustriesSection
