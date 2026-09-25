import React from 'react'
import { cn } from '@/lib/utils'

export function Badge({ children, variant = 'purple', size = 'md', className = '' }) {
  const baseStyles = 'inline-flex items-center font-semibold tracking-normal rounded-full border shadow-2xs select-none'

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs sm:text-sm px-3.5 py-1 gap-1.5',
    lg: 'text-sm px-4 py-1.5 gap-2',
  }

  const variantStyles = {
    purple: 'bg-purple-50 text-[#8E238F] border-purple-200',
    gradient: 'bg-gradient-to-r from-purple-100 to-fuchsia-50 text-[#412283] border-purple-200/90',
    cyan: 'bg-sky-50 text-sky-800 border-sky-200',
    green: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    amber: 'bg-amber-50 text-amber-900 border-amber-200',
    rose: 'bg-rose-50 text-rose-800 border-rose-200',
    outline: 'bg-white text-slate-700 border-slate-300',
  }

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  )
}
