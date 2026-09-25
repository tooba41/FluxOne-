import React from 'react'
import { cn } from '@/lib/utils'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none'

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-4.5 py-2.5 rounded-xl gap-2 shadow-sm',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 shadow-md',
    xl: 'text-lg px-8 py-4 rounded-2xl gap-3 shadow-lg',
  }

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#8E238F] to-[#412283] hover:from-[#7a1c7b] hover:to-[#34186c] text-white shadow-[0_8px_20px_rgba(142,35,143,0.22)] focus:ring-[#8E238F] hover:shadow-[0_12px_24px_rgba(142,35,143,0.32)] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white hover:bg-slate-50 text-[#412283] border border-purple-200/80 shadow-sm hover:border-purple-300 focus:ring-purple-400 hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border-2 border-[#8E238F] text-[#8E238F] bg-transparent hover:bg-[#8E238F] hover:text-white focus:ring-[#8E238F]',
    darkOutline:
      'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400',
    subtle:
      'bg-purple-50 text-[#8E238F] hover:bg-purple-100 border border-purple-200/50',
    ghost:
      'text-slate-700 hover:bg-purple-50 hover:text-[#8E238F]',
    danger:
      'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/20',
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  )
}
