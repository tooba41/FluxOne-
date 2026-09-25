import React from 'react'
import * as LucideIcons from 'lucide-react'

export function IconHelper({ name, size = 20, className = '', color, ...props }) {
  // Check if icon exists in lucide-react
  const IconComponent = LucideIcons[name] || LucideIcons.Sparkles

  return (
    <IconComponent
      size={size}
      className={className}
      color={color}
      {...props}
    />
  )
}
