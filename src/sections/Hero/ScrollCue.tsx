import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function ScrollCue() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: prefersReducedMotion ? 0.3 : 8.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center sm:flex"
    >
      <div className="border-gold-champagne/50 flex h-9 w-6 justify-center rounded-full border">
        <motion.span
          className="bg-gold-champagne/80 mt-1.5 h-2 w-1 rounded-full"
          animate={prefersReducedMotion ? undefined : { y: [0, 14, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
