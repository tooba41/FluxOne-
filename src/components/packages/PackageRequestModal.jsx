import React, { useState, useEffect } from 'react'
import { CheckCircle2, Sparkles, Building, User, Mail, Send, Check } from 'lucide-react'
import { BUSINESS_TYPES } from '@/lib/constants'
import { packagesData } from '@/data/packagesData'
import { landingApi } from '@/api/landingApi'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

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
      title={isSuccess ? 'Package Request Received' : `Request ${selectedPkg.name} Package`}
      subtitle={
        isSuccess
          ? 'Forwarded to Super Admin Provisioning Queue'
          : selectedPkg.formNote
      }
      maxWidth="max-w-xl"
    >
      {isSuccess ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={36} />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Thank you, {formData.businessOwnerName}!
          </h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Your request for the <strong className="text-[#8E238F]">{selectedPkg.name}</strong> subscription package has been submitted to the Super Admin team for provisioning.
          </p>
          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100 text-xs text-slate-700 text-left space-y-1.5 font-sans">
            <div><strong>Owner Name:</strong> {formData.businessOwnerName}</div>
            <div><strong>Business Email:</strong> {formData.businessEmail}</div>
            <div><strong>Industry Type:</strong> {formData.businessType}</div>
            <div><strong>Selected Package:</strong> {selectedPkg.name}</div>
          </div>
          <div className="pt-4">
            <Button variant="primary" size="md" onClick={handleClose}>
              Back to FluxOne Platform
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
              {errorMessage}
            </div>
          )}

          {/* Selected Package Confirmation Banner (Replaces redundant 2-tab buttons) */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-50 via-fuchsia-50/50 to-purple-50 border border-purple-200/90 flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E238F] block">
                Selected Subscription Plan
              </span>
              <span className="text-sm font-extrabold text-slate-900 block mt-0.5">
                {selectedPkg.packageNumber}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#8E238F]">
                ${selectedPkg.annualPrice}/mo
              </span>
              <Badge variant="purple" size="sm">
                {selectedPkg.id === 'professional' ? 'Single Branch' : 'Multi-Branch'}
              </Badge>
            </div>
          </div>

          {/* Field 1: Business Owner Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Business Owner Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="businessOwnerName"
                required
                value={formData.businessOwnerName}
                onChange={handleChange}
                placeholder="e.g. Asad Naqvi / Alex Morgan"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F] focus:ring-1 focus:ring-[#8E238F]"
              />
            </div>
          </div>

          {/* Field 2: Business Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Business Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                name="businessEmail"
                required
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="e.g. owner@mybusiness.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F] focus:ring-1 focus:ring-[#8E238F]"
              />
            </div>
          </div>

          {/* Field 3: Select Business Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Select Business Type (Industry) <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#8E238F] focus:ring-1 focus:ring-[#8E238F] cursor-pointer"
              >
                {BUSINESS_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional details: Estimated Branches & Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Number of Branches
              </label>
              <input
                type="text"
                name="estimatedBranches"
                value={formData.estimatedBranches}
                onChange={handleChange}
                placeholder="e.g. 1 or 5+"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Contact Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8E238F]"
              />
            </div>
          </div>

          {/* Notice */}
          <p className="text-[11px] text-slate-500 leading-snug">
            ⚡ Package requests are routed directly to the Super Admin portal for tenant verification and catalog provisioning.
          </p>

          {/* Actions */}
          <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
            <Button variant="ghost" size="md" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isLoading}
            >
              <Send size={15} />
              <span>Submit Request to Admin</span>
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}

export default PackageRequestModal
