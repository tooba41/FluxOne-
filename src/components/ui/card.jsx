import React from 'react'
import { cn } from '@/lib/utils'

export const Card = React.forwardRef(({ className, hover = true, glow = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-2xl border border-slate-200/90 bg-white text-slate-950 shadow-2xs transition-all duration-300',
      hover && 'hover:border-purple-300/80 hover:shadow-md hover:shadow-purple-900/5',
      glow && 'hover:shadow-[0_8px_30px_rgba(142,35,143,0.12)]',
      className
    )}
    {...props}
  />
))
Card.displayName = 'Card'

export const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-5 sm:p-6', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-bold text-lg sm:text-xl text-slate-900 leading-tight tracking-tight', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-xs sm:text-sm text-slate-600 leading-relaxed', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-5 sm:p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-5 sm:p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export default Card
