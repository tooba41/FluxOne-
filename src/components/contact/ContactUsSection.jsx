import React, { useState } from 'react'
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
import { Badge } from '@/components/ui/Badge'
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
    <section id="contact" className="py-20 md:py-28 relative bg-[#f9f7fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" size="md">
            Direct Communication
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Our Enterprise Advisory Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Have questions regarding multi-branch POS deployment, hardware setup, or custom enterprise terms? Send us a message and an onboarding specialist will get in touch promptly.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Get in Touch Directly</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our support and deployment engineers assist retail chains and hospitality brands 24 hours a day across all branches.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-[#8E238F] border border-purple-100 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">General & Sales Inquiry</span>
                    <a
                      href={`mailto:${BRAND.salesEmail}`}
                      className="text-sm font-bold text-slate-900 hover:text-[#8E238F] transition-colors"
                    >
                      {BRAND.salesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Toll-Free Phone Hotline</span>
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="text-sm font-bold text-slate-900 hover:text-[#8E238F] transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Headquarters & Tech Centers</span>
                    <span className="text-xs text-slate-700 leading-snug block font-medium">
                      {BRAND.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">Support Operating Hours</span>
                    <span className="text-xs text-slate-700 block font-medium">
                      24/7 Dedicated Support for Enterprise Tenants
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Live Status Card */}
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-between text-xs text-slate-700">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Cloud Status: 100% Operational
              </span>
              <span className="text-[#8E238F] font-bold font-mono">Avg Reply: 12 min</span>
            </div>
          </div>

          {/* Right Side: Interactive Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 shadow-[0_16px_45px_rgba(65,34,131,0.08)]">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                  Thank you for reaching out to FluxOne. One of our senior solutions architects will contact you within 1 business hour.
                </p>
                <div className="pt-4">
                  <Button variant="secondary" size="md" onClick={() => setIsSuccess(false)}>
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Send Us a Direct Message</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out your contact and business details below.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Asad Naqvi"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Business Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Retail Co."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Business Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. owner@acme.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Inquiries or Specific Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your store locations, required hardware integration (scanners, printers), or migration timeline..."
                    className="w-full p-3.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isLoading}
                    className="w-full"
                  >
                    <Send size={16} />
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
