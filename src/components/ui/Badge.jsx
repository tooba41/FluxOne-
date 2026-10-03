import React from 'react'
import { cn } from '@/lib/utils'

const badgeVariants = {
  variant: {
    default:
      'bg-slate-900 text-white hover:bg-slate-800 border-transparent',
    secondary:
      'bg-slate-100 text-slate-900 hover:bg-slate-200/80 border-slate-200',
    outline:
      'border-slate-300 text-slate-700 bg-transparent',
    purple:
      'bg-purple-100/90 text-[#8E238F] border-purple-200/80',
    fuchsia:
      'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
    gradient:
      'bg-gradient-to-r from-purple-100 via-fuchsia-50 to-purple-100 text-[#8E238F] border-purple-200/90 shadow-2xs',
    success:
      'bg-emerald-100 text-emerald-800 border-emerald-200',
    green:
      'bg-emerald-100 text-emerald-800 border-emerald-200',
    destructive:
      'bg-rose-100 text-rose-800 border-rose-200',
  },
  size: {
    xs: 'px-2 py-0.5 text-[10px]',
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs sm:text-sm',
    lg: 'px-3.5 py-1.5 text-sm',
  },
}

export function Badge({
  className,
  variant = 'default',
  size = 'sm',
  children,
  ...props
}) {
  const variantClass = badgeVariants.variant[variant] || badgeVariants.variant.default
  const sizeClass = badgeVariants.size[size] || badgeVariants.size.sm

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 font-bold rounded-full border transition-colors select-none',
        variantClass,
        sizeClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Badge
