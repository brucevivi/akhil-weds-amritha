import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

interface ParallaxLayerProps {
  children: ReactNode
  /** Positive moves down slower than scroll (background), negative moves up faster (foreground). */
  speed?: number
  className?: string
}

export function ParallaxLayer({ children, speed = 0.2, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rawY = useTransform(scrollYProgress, [0, 1], [`${speed * -100}px`, `${speed * 100}px`])
  const y: MotionValue<string> | undefined = prefersReducedMotion ? undefined : rawY

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      <motion.div style={y ? { y } : undefined}>{children}</motion.div>
    </div>
  )
}
