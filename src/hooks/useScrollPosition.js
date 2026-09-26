import { useState, useEffect } from 'react'

export function useScrollPosition(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > threshold
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check
    setIsScrolled(window.scrollY > threshold)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return { isScrolled }
}
