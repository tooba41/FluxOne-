import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = 'max-w-xl' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={cn(
          'relative w-full z-10 bg-white border border-purple-100 rounded-2xl sm:rounded-3xl shadow-[0_24px_60px_rgba(65,34,131,0.18)] overflow-hidden text-slate-800 transition-all transform animate-scale-up max-h-[92vh] flex flex-col',
          maxWidth
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 sm:p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50/70 to-white relative z-10 shrink-0">
          <div className="pr-2">
            {title && <h3 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h3>}
            {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 relative z-10 overflow-y-auto max-h-[calc(92vh-100px)]">{children}</div>
      </div>
    </div>
  )
}
