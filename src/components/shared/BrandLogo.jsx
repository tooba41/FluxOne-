import React from 'react'
import fluxOneLogo from '@/assets/FluxOne(2).png'
import { BRAND } from '@/lib/constants'

export function BrandLogo({ size = 'md', className = '', withGlow = false }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-purple-200/80 bg-white p-0.5 ${
        sizes[size] || sizes.md
      } ${withGlow ? 'shadow-[0_0_25px_rgba(142,35,143,0.35)]' : 'shadow-md'} ${className}`}
      aria-label={BRAND.name}
    >
      <img
        src={fluxOneLogo}
        alt={BRAND.name}
        className="w-full h-full object-contain rounded-full"
        draggable={false}
      />
    </div>
  )
}
