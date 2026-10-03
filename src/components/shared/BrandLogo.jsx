import React from 'react'
import fluxOneLogo from '@/assets/FluxOne(2).png'
import { BRAND } from '@/lib/constants'

const sizes = {
  xs: 'w-7 h-7',
  sm: 'w-8 h-8 sm:w-9 sm:h-9',
  md: 'w-9 h-9 sm:w-10 sm:h-10',
  lg: 'w-12 h-12 sm:w-14 sm:h-14',
  xl: 'w-16 h-16 sm:w-20 sm:h-20',
}

export function BrandLogo({
  size = 'md',
  className = '',
  withGlow = false,
}) {
  const containerSizes = sizes[size] || sizes.md

  return (
    <div
      className={`relative shrink-0 flex items-center justify-center rounded-full bg-white border border-purple-200/70 shadow-xs overflow-hidden ${containerSizes} ${
        withGlow ? 'shadow-[0_0_24px_rgba(142,35,143,0.35)]' : ''
      } ${className}`}
      aria-label={BRAND.name}
    >
      <img
        src={fluxOneLogo}
        alt={BRAND.name}
        className="w-full h-full object-contain scale-[1.35]"
        draggable={false}
      />
    </div>
  )
}

export default BrandLogo
