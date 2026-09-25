import React, { useState } from 'react'
import { ChevronDown, MessageSquare } from 'lucide-react'
import { faqData } from '@/data/faqData'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { scrollToSection } from '@/lib/utils'

export function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState({ '0-0': true, '1-0': false })

  const toggleFaq = (categoryIdx, faqIdx) => {
    const key = `${categoryIdx}-${faqIdx}`
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" size="md">
            {faqData.badge}
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {faqData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {faqData.subtitle}
          </p>
        </div>

        {/* FAQ Categories & Accordions */}
        <div className="space-y-10">
          {faqData.categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8E238F] pl-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8E238F]" />
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.faqs.map((faq, faqIdx) => {
                  const key = `${catIdx}-${faqIdx}`
                  const isOpen = Boolean(openIndexes[key])

                  return (
                    <div
                      key={faqIdx}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'bg-purple-50/40 border-[#8E238F]/40 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-purple-200'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(catIdx, faqIdx)}
                        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm sm:text-base font-bold text-slate-900">
                          {faq.question}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                            isOpen
                              ? 'bg-[#8E238F] text-white rotate-180'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-100/60 animate-fade-in font-normal">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-purple-50 to-white border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-100 text-[#8E238F]">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Still have questions?</h4>
              <p className="text-xs text-slate-500">Our B2B POS specialists are ready to help.</p>
            </div>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => scrollToSection('#contact')}
          >
            <span>Ask Our Team</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
