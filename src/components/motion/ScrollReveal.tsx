import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { fadeUp, reducedMotionVariants } from '@/animations/variants'

interface ScrollRevealProps {
  children: ReactNode
  variants?: Variants
  className?: string
  amount?: number
  once?: boolean
  as?: 'div' | 'section' | 'article' | 'span'
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  amount = 0.3,
  once = true,
  as = 'div',
}: ScrollRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={prefersReducedMotion ? reducedMotionVariants : variants}
    >
      {children}
    </MotionTag>
  )
}
