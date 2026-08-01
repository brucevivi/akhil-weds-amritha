import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function ScrollCue() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: prefersReducedMotion ? 0.3 : 8.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
    >
      <span className="font-label text-gold-champagne/60 text-[10px] tracking-[0.4em] uppercase">
        Scroll
      </span>
      <motion.span
        className="from-gold-champagne/70 h-10 w-px bg-linear-to-b to-transparent"
        animate={prefersReducedMotion ? undefined : { scaleY: [0.3, 1, 0.3] }}
        style={{ originY: 0 }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
