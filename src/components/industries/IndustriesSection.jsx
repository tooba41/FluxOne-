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
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemsVisible, setItemsVisible] = useState(4)
  const sliderRef = useRef(null)
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

  // Update visible item count based on responsive window width
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsVisible(4)
      } else if (width >= 768) {
        setItemsVisible(3)
      } else if (width >= 640) {
        setItemsVisible(2)
      } else {
        setItemsVisible(1)
      }
    }
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  // Scroll to specific card index smoothly
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

  // Handle Next button click (Triggered on Arrow Click)
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    const maxIndex = Math.max(0, totalIndustries - itemsVisible)
    if (activeIndex >= maxIndex) {
      scrollToCard(0)
    } else {
      scrollToCard(activeIndex + 1)
    }
  }, [activeIndex, itemsVisible, totalIndustries, scrollToCard])

  // Handle Prev button click (Triggered on Arrow Click)
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    const maxIndex = Math.max(0, totalIndustries - itemsVisible)
    if (activeIndex <= 0) {
      scrollToCard(maxIndex)
    } else {
      scrollToCard(activeIndex - 1)
    }
  }, [activeIndex, itemsVisible, totalIndustries, scrollToCard])

  // Scroll listener to update active index indicator dynamically
  const handleScroll = () => {
    if (!sliderRef.current) return
    const slider = sliderRef.current
    const cards = slider.querySelectorAll('[data-card]')
    if (cards.length === 0) return

    const cardWidth = cards[0].offsetWidth + 20 // 20px gap
    const scrollPos = slider.scrollLeft
    const newIdx = Math.round(scrollPos / cardWidth)
    if (newIdx >= 0 && newIdx < totalIndustries && newIdx !== activeIndex) {
      setActiveIndex(newIdx)
    }
  }

  // Calculate total indicator dots based on visible items
  const maxDotIndex = Math.max(1, totalIndustries - itemsVisible + 1)

  return (
    <section id="industries" className="py-16 sm:py-20 md:py-28 relative bg-[#f9f7fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <Badge variant="purple" size="md">
              {industriesData.badge}
            </Badge>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {industriesData.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              {industriesData.subtitle}
            </p>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-2 self-end sm:self-end">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous industry"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-[#8E238F] hover:border-[#8E238F] hover:shadow-md hover:scale-105 transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-2xs"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next industry"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-[#8E238F] hover:border-[#8E238F] hover:shadow-md hover:scale-105 transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-2xs"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Interactive Slider Track (Smooth Scroll Snap Container with Zero Cutoff) */}
        <div className="relative w-full">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 sm:py-4 px-1 -mx-1"
          >
            {industriesData.industries.map((item) => {
              const IconComponent = iconMap[item.iconName] || Store
              return (
                <div
                  key={item.id}
                  data-card="true"
                  className="snap-start w-[85vw] max-w-[320px] sm:max-w-none sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] shrink-0 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#8E238F] hover:shadow-[0_16px_40px_rgba(65,34,131,0.1)] transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:-translate-y-1.5"
                >
                  <div>
                    {/* Icon with 360deg hover rotate + scale */}
                    <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                      <div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-2xs transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                        style={{ backgroundColor: item.color }}
                      >
                        <IconComponent size={22} />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase font-mono">
                        POS Ready
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#8E238F] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mt-1.5 sm:mt-2 mb-3.5 sm:mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 mb-4 sm:mb-6">
                      {item.highlights.slice(0, 2).map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8E238F] shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button with animated arrow */}
                  <button
                    type="button"
                    onClick={() => setSelectedIndustry(item)}
                    className="w-full pt-3 sm:pt-3.5 border-t border-slate-100 text-xs sm:text-sm font-bold text-[#8E238F] group-hover:text-[#412283] flex items-center justify-between cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1.5" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Visual Indicator Dots Only (Non-Clickable / Only Moves on Arrow Press) */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 pointer-events-none select-none">
            {Array.from({ length: maxDotIndex }).map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 inline-block ${
                  activeIndex === idx
                    ? 'w-6 sm:w-8 bg-[#8E238F] shadow-xs'
                    : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Industry Details Modal */}
      {selectedIndustry && (
        <Modal
          isOpen={Boolean(selectedIndustry)}
          onClose={() => setSelectedIndustry(null)}
          title={`${selectedIndustry.name} POS & Management`}
          subtitle={selectedIndustry.tagline}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-5 sm:space-y-6">
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              {selectedIndustry.details.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-purple-50/70 border border-purple-100">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#412283] mb-2.5 sm:mb-3">
                  Tailored POS Workflows
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.details.posFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-sky-50/70 border border-sky-100">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-900 mb-2.5 sm:mb-3">
                  Specialized Stock & Supply
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.details.inventoryFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 size={15} className="text-sky-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">Key Operational Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedIndustry.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E238F] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                size="md"
                className="flux-primary-btn font-bold w-full sm:w-auto justify-center"
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
