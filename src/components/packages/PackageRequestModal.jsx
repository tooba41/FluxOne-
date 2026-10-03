import React, { useState, useEffect } from 'react'
import { CheckCircle2, Building, User, Mail, Send, Check } from 'lucide-react'
import { BUSINESS_TYPES } from '@/lib/constants'
import { packagesData } from '@/data/packagesData'
import { landingApi } from '@/api/landingApi'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'

export function PackageRequestModal({ isOpen, onClose, selectedPackageId = 'enterprise' }) {
  const [formData, setFormData] = useState({
    businessOwnerName: '',
    businessEmail: '',
    businessType: BUSINESS_TYPES[0],
    packageId: selectedPackageId,
    estimatedBranches: '1',
    phone: '',
    notes: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (selectedPackageId) {
      setFormData((prev) => ({ ...prev, packageId: selectedPackageId }))
    }
  }, [selectedPackageId])

  const selectedPkg =
    packagesData.packages.find((p) => p.id === formData.packageId) ||
    packagesData.packages[1]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!formData.businessOwnerName.trim() || !formData.businessEmail.trim()) {
      setErrorMessage('Please fill in both Business Owner Name and Business Email.')
      return
    }

    setIsLoading(true)
    try {
      await landingApi.submitPackageRequest({
        ...formData,
        packageName: selectedPkg.name,
      })
      setIsSuccess(true)
    } catch (err) {
      setErrorMessage(err.message || 'Failed to submit request. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    setErrorMessage('')
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={isSuccess ? 'Package Request Received' : 'Get Started with FluxOne'}
      subtitle={
        isSuccess
          ? 'Forwarded to Super Admin Provisioning Queue'
          : 'Select your preferred subscription plan and provide your business details for instant provisioning.'
      }
      maxWidth="max-w-xl"
    >
      {isSuccess ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 size={30} strokeWidth={1.5} />
          </div>
          <h4 className="text-lg font-bold text-slate-900">
            Thank you, {formData.businessOwnerName}!
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Your request for the <strong className="text-[#8E238F]">{selectedPkg.name}</strong> subscription package has been submitted to the Super Admin team for provisioning.
          </p>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 text-left space-y-1 font-sans">
            <div><strong>Owner Name:</strong> {formData.businessOwnerName}</div>
            <div><strong>Business Email:</strong> {formData.businessEmail}</div>
            <div><strong>Industry Type:</strong> {formData.businessType}</div>
            <div><strong>Selected Package:</strong> {selectedPkg.name}</div>
          </div>
          <div className="pt-2">
            <Button variant="primary" size="md" onClick={handleClose}>
              Back to FluxOne Platform
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
              {errorMessage}
            </div>
          )}

          {/* Plan Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-800">
              Choose Subscription Plan <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {packagesData.packages.map((pkg) => {
                const isSelected = formData.packageId === pkg.id
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, packageId: pkg.id }))}
                    className={`relative p-3.5 rounded-lg text-left border transition-colors cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-purple-50/70 border-[#8E238F]'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-slate-900">
                          {pkg.name} Plan
                        </span>
                        <span className="text-xs font-mono font-bold text-[#8E238F]">
                          ${pkg.annualPrice}<span className="text-[10px] font-normal text-slate-500">/mo</span>
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                        {pkg.tag}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="font-medium text-slate-600">
                        {pkg.id === 'professional' ? 'Single Branch' : 'Unlimited Branches'}
                      </span>
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-[#8E238F]">
                          <Check size={12} strokeWidth={2.5} />
                          Selected
                        </span>
                      ) : (
                        <span className="text-slate-400">Select</span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Business Owner Name */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Business Owner Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
              <input
                type="text"
                name="businessOwnerName"
                required
                value={formData.businessOwnerName}
                onChange={handleChange}
                placeholder="e.g. Asad Naqvi"
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
              />
            </div>
          </div>

          {/* Business Email */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Business Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
              <input
                type="email"
                name="businessEmail"
                required
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="e.g. owner@mybusiness.com"
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
              />
            </div>
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Select Industry Type <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Building size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#8E238F] cursor-pointer"
              >
                {BUSINESS_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Branches & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Number of Branches
              </label>
              <input
                type="text"
                name="estimatedBranches"
                value={formData.estimatedBranches}
                onChange={handleChange}
                placeholder="e.g. 1 or 5+"
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Contact Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
              />
            </div>
          </div>

          {/* Notice */}
          <p className="text-[11px] text-slate-500 leading-snug">
            Package requests are routed directly to the Super Admin portal for tenant verification and catalog provisioning.
          </p>

          {/* Actions */}
          <div className="pt-3 flex items-center justify-end gap-2.5 border-t border-slate-100">
            <Button variant="ghost" size="sm" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isLoading}
              className="flux-primary-btn text-xs font-semibold px-4 py-2 rounded-lg"
            >
              <Send size={13} strokeWidth={1.5} />
              <span>Submit Request to Admin</span>
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}

export default PackageRequestModal
