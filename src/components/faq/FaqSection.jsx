import React, { useState, useEffect, useRef } from 'react'
import { MessageSquare } from 'lucide-react'
import { faqData } from '@/data/faqData'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState({ '0-0': true, '1-0': false })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  const toggleFaq = (categoryIdx, faqIdx) => {
    const key = `${categoryIdx}-${faqIdx}`
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 relative bg-slate-50/50 border-t border-slate-200/80"
    >
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Header */}
        <SectionHeading
          badge={faqData.badge}
          title={faqData.title}
          subtitle={faqData.subtitle}
        />

        {/* FAQ Categories & Accordions */}
        <div className="space-y-8">
          {faqData.categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 pl-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E238F]" />
                {cat.category}
              </h3>

              <Accordion className="space-y-2.5">
                {cat.faqs.map((faq, faqIdx) => {
                  const key = `${catIdx}-${faqIdx}`
                  const isOpen = Boolean(openIndexes[key])

                  return (
                    <AccordionItem
                      key={faqIdx}
                      title={faq.question}
                      isOpen={isOpen}
                      onToggle={() => toggleFaq(catIdx, faqIdx)}
                    >
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still have questions CTA strip */}
        <div className="mt-10 p-5 sm:p-6 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#8E238F] border border-purple-100 flex items-center justify-center shrink-0">
              <MessageSquare size={18} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Still have questions?</h4>
              <p className="text-xs text-slate-500">Our B2B POS specialists are ready to help.</p>
            </div>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="text-xs font-semibold px-4 py-2 rounded-lg border-slate-200 w-full sm:w-auto justify-center"
            onClick={() => scrollToSection('#contact')}
          >
            <span>Ask Our Team</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
