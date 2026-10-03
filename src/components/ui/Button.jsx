import React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = {
  variant: {
    default: 'bg-slate-900 text-white hover:bg-slate-800 shadow-xs hover:-translate-y-[1px] active:translate-y-0',
    primary:
      'flux-primary-btn bg-[#8E238F] text-white hover:bg-[#7a1d7b] shadow-xs hover:-translate-y-[1px] active:translate-y-0',
    secondary:
      'flux-secondary-btn bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-2xs hover:-translate-y-[1px] active:translate-y-0',
    outline:
      'border border-purple-200 text-[#8E238F] bg-transparent hover:bg-purple-50 hover:-translate-y-[1px] active:translate-y-0',
    ghost:
      'text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:translate-y-0',
    destructive:
      'bg-rose-600 text-white hover:bg-rose-700 shadow-xs hover:-translate-y-[1px] active:translate-y-0',
    link:
      'text-[#8E238F] underline-offset-4 hover:underline p-0 h-auto shadow-none',
  },
  size: {
    default: 'h-9 px-4 py-2 text-xs',
    xs: 'h-7 px-2.5 text-xs rounded-md',
    sm: 'h-8 px-3 text-xs rounded-lg',
    md: 'h-9 px-4 text-xs font-semibold rounded-lg',
    lg: 'h-11 px-5 text-sm font-semibold rounded-lg',
    icon: 'h-9 w-9 p-0 rounded-lg justify-center',
  },
}

export const Button = React.forwardRef(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      isLoading = false,
      disabled = false,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const variantClass = buttonVariants.variant[variant] || buttonVariants.variant.default
    const sizeClass = buttonVariants.size[size] || buttonVariants.size.default

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center gap-1.5 font-semibold rounded-lg transition-all duration-150 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E238F]/40 disabled:pointer-events-none disabled:opacity-50',
          variantClass,
          sizeClass,
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-1.5 h-3.5 w-3.5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
