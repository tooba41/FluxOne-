import React, { useState, useEffect, useRef } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Building,
  User,
} from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { landingApi } from '@/api/landingApi'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/Button'

export function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your Name, Email, and Message.')
      return
    }

    setIsLoading(true)
    try {
      await landingApi.submitContactMessage(formData)
      setIsSuccess(true)
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phoneNumber: '',
        message: '',
      })
    } catch (err) {
      setErrorMessage(err.message || 'Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
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
          badge="Direct Communication"
          title="Contact Our Enterprise Advisory Team"
          subtitle="Have questions regarding multi-branch POS deployment, hardware setup, or custom enterprise terms? Send us a message and an onboarding specialist will get in touch promptly."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Side: Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-slate-50/70 border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900">Get in Touch Directly</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our support and deployment engineers assist retail chains and hospitality brands 24 hours a day across all branches.
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#8E238F] border border-purple-100 flex items-center justify-center shrink-0">
                    <Mail size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">General & Sales Inquiry</span>
                    <a
                      href={`mailto:${BRAND.salesEmail}`}
                      className="text-xs font-semibold text-slate-900 hover:text-[#8E238F] transition-colors break-all"
                    >
                      {BRAND.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#8E238F] border border-purple-100 flex items-center justify-center shrink-0">
                    <Phone size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Toll-Free Phone Hotline</span>
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="text-xs font-semibold text-slate-900 hover:text-[#8E238F] transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#8E238F] border border-purple-100 flex items-center justify-center shrink-0">
                    <MapPin size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Headquarters & Tech Centers</span>
                    <span className="text-xs text-slate-700 font-medium block leading-snug">
                      {BRAND.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#8E238F] border border-purple-100 flex items-center justify-center shrink-0">
                    <Clock size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Support Operating Hours</span>
                    <span className="text-xs text-slate-700 font-medium block">
                      24/7 Dedicated Support for Enterprise Tenants
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Live Status Card */}
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between gap-1 text-xs text-slate-700">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Live Cloud Status: 100% Operational
              </span>
              <span className="text-[#8E238F] font-semibold font-mono text-[11px]">Avg Reply: 12m</span>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-xs">
            {isSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to FluxOne. One of our senior solutions architects will contact you within 1 business hour.
                </p>
                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="text-xs font-semibold"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Send Us a Direct Message</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out your contact and business details below.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Asad Naqvi"
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Business Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Building size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Retail Co."
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Business Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. owner@acme.com"
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Requirements & Inquiries <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your store locations, required hardware integration (scanners, printers), or migration timeline..."
                    className="w-full p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isLoading}
                    className="flux-primary-btn w-full justify-center text-xs font-semibold py-2.5 rounded-lg"
                  >
                    <Send size={14} strokeWidth={1.5} />
                    <span>Submit Inquiry</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
