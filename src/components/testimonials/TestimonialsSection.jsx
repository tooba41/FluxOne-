import React from 'react'
import { Star, Award } from 'lucide-react'
import { testimonialsData } from '@/data/testimonialsData'
import { Badge } from '@/components/ui/Badge'

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 relative bg-[#f9f7fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" size="md">
            {testimonialsData.badge}
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {testimonialsData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {testimonialsData.subtitle}
          </p>

          {/* Social Proof Metric Highlights */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            {testimonialsData.stats.map((stat, idx) => (
              <div key={idx} className="p-2 text-center border-r last:border-r-0 border-slate-100">
                <span className="text-2xl sm:text-3xl font-black text-[#412283] block">
                  {stat.metric}
                </span>
                <span className="text-xs text-slate-500 mt-1 block font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials 6 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-purple-300 hover:shadow-[0_16px_40px_rgba(65,34,131,0.09)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top: Avatar, Rating & Success Metric */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-2xl shadow-2xs">
                      {test.avatar}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#8E238F] transition-colors">
                        {test.name}
                      </h3>
                      <p className="text-xs text-slate-500">{test.role}</p>
                      <p className="text-[11px] text-[#8E238F] font-bold">
                        {test.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Success Story Metric Pill */}
                <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                  <Award size={13} className="text-emerald-600" />
                  <span>Verified: {test.successMetric}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Verified Customer Footnote */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Verified Business Tenant</span>
                <span className="text-[#8E238F] font-semibold">FluxOne POS Cloud</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
