import React from 'react'
import { ArrowLeft, Home, Sparkles } from 'lucide-react'
import { BrandLogo } from '@/components/shared/BrandLogo'

export function NotFoundPage({ onNavigateHome }) {
  const handleGoHome = () => {
    if (onNavigateHome) {
      onNavigateHome('')
    } else {
      window.location.href = '/'
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center px-4 font-sans select-none">
      <div className="max-w-md w-full text-center space-y-4">
        {/* Brand Logo Lockup */}
        <div className="flex justify-center mb-1">
          <BrandLogo size="lg" className="hover:scale-105 transition-transform duration-200" />
        </div>

        {/* Status code */}
        <p className="text-sm sm:text-base font-normal text-slate-500">
          404 Not Found
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
          Oops! Page <span className="text-[#8E238F]">Not Found</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-sm mx-auto">
          The page you are looking for doesn’t exist. Click button below to go to the homepage.
        </p>

        {/* Themed Brand Button */}
        <div className="pt-4 flex justify-center">
          <button
            type="button"
            onClick={handleGoHome}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#8E238F] to-[#412283] text-white hover:opacity-95 active:scale-95 transition-all text-sm font-medium shadow-md shadow-purple-900/20 cursor-pointer"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
