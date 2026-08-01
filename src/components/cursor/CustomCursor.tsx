import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, [data-cursor-interactive]'

export function CustomCursor() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const isCoarsePointer = useMediaQuery('(pointer: coarse)')
  const [isInteractive, setIsInteractive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (prefersReducedMotion || isCoarsePointer) return

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      if (!isVisible) setIsVisible(true)
      const target = event.target as Element | null
      setIsInteractive(Boolean(target?.closest(INTERACTIVE_SELECTOR)))
    }

    const handleLeave = () => setIsVisible(false)

    window.addEventListener('pointermove', handleMove)
    document.documentElement.addEventListener('pointerleave', handleLeave)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.documentElement.removeEventListener('pointerleave', handleLeave)
    }
  }, [prefersReducedMotion, isCoarsePointer, isVisible, x, y])

  if (prefersReducedMotion || isCoarsePointer) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[999] mix-blend-difference"
      style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        className="border-gold-champagne -translate-x-1/2 -translate-y-1/2 rounded-full border"
        animate={{
          width: isInteractive ? 48 : 24,
          height: isInteractive ? 48 : 24,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    </motion.div>
  )
}
