import React from 'react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) {
  const alignClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-center items-center'

  return (
    <div className={cn('max-w-3xl mx-auto flex flex-col mb-10 sm:mb-14', alignClass, className)}>
      {badge && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-[#8E238F]">
            {badge}
          </span>
        </div>
      )}

      {title && (
        <h2
          className={cn(
            'text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight',
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={cn(
            'mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
