import React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ children, className, ...props }) {
  return (
    <div className={cn('space-y-2.5', className)} {...props}>
      {children}
    </div>
  )
}

export function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  className,
  category,
}) {
  return (
    <div
      className={cn(
        'rounded-xl border transition-colors duration-150 overflow-hidden bg-white shadow-2xs',
        isOpen
          ? 'border-slate-300 shadow-xs'
          : 'border-slate-200 hover:border-slate-300',
        className
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2.5">
          {category && (
            <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-purple-50 text-[#8E238F] border border-purple-100 shrink-0">
              {category}
            </span>
          )}
          <span
            className={cn(
              'text-xs sm:text-sm font-semibold transition-colors',
              isOpen ? 'text-[#8E238F]' : 'text-slate-900'
            )}
          >
            {title}
          </span>
        </div>
        <div
          className={cn(
            'w-6 h-6 rounded-md flex items-center justify-center transition-transform duration-200 shrink-0 text-slate-500',
            isOpen ? 'rotate-180 text-[#8E238F]' : ''
          )}
        >
          <ChevronDown size={15} strokeWidth={1.5} />
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
          {children}
        </div>
      )}
    </div>
  )
}

export default Accordion
