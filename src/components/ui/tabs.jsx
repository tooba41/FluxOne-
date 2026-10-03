import React from 'react'
import { cn } from '@/lib/utils'

export function Tabs({ defaultValue, value, onValueChange, children, className }) {
  const [selected, setSelected] = React.useState(value || defaultValue)

  React.useEffect(() => {
    if (value !== undefined) setSelected(value)
  }, [value])

  const handleSelect = (val) => {
    setSelected(val)
    if (onValueChange) onValueChange(val)
  }

  return (
    <div className={cn('w-full', className)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        return React.cloneElement(child, {
          selected,
          onSelect: handleSelect,
        })
      })}
    </div>
  )
}

export function TabsList({ children, className, selected, onSelect }) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center p-1.5 rounded-2xl bg-purple-100/50 border border-purple-200/80 gap-1.5 shadow-2xs backdrop-blur-xs',
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        return React.cloneElement(child, {
          isActive: child.props.value === selected,
          onClick: () => onSelect && onSelect(child.props.value),
        })
      })}
    </div>
  )
}

export function TabsTrigger({
  value,
  children,
  className,
  isActive,
  onClick,
  icon: Icon,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 select-none cursor-pointer',
        isActive
          ? 'bg-gradient-to-r from-[#8E238F] to-[#412283] text-white shadow-sm'
          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60',
        className
      )}
    >
      {Icon && <Icon size={15} />}
      <span>{children}</span>
    </button>
  )
}

export function TabsContent({ value, selected, children, className }) {
  if (value !== selected) return null
  return <div className={cn('w-full animate-fade-in', className)}>{children}</div>
}

export default Tabs
