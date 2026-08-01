import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'framer-motion'
import { type PointerEvent as ReactPointerEvent, type ReactNode, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  children: ReactNode
  strength?: number
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const isCoarsePointer = useMediaQuery('(pointer: coarse)')
  const disableMagnetism = prefersReducedMotion || isCoarsePointer

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18 })
  const springY = useSpring(y, { stiffness: 200, damping: 18 })

  const handlePointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (disableMagnetism || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * strength)
    y.set((event.clientY - rect.top - rect.height / 2) * strength)
  }

  const handlePointerLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={disableMagnetism ? undefined : { x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        'group border-gold-temple/60 relative overflow-hidden border px-10 py-4',
        'font-label text-gold-champagne text-xs tracking-[0.3em] uppercase',
        'hover:border-gold-champagne transition-colors duration-500',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          'via-gold-temple/25 absolute inset-0 -translate-x-full bg-linear-to-r from-transparent to-transparent',
          'transition-transform duration-700 ease-out group-hover:translate-x-full',
        )}
      />
      <span className="relative">{children}</span>
    </motion.button>
  )
}
