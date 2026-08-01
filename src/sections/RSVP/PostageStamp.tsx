import { motion } from 'framer-motion'
import { MonogramBadge } from '@/components/ui/MonogramBadge'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/** Decorative postage-stamp + postmark corner, pinned to a postcard-styled card. */
export function PostageStamp() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -top-4 -right-3 z-10 sm:-top-5 sm:-right-4"
      animate={prefersReducedMotion ? { rotate: 6 } : { rotate: [4, 8, 4] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative h-16 w-14">
        {/* the stamp */}
        <div
          className="border-gold-temple/60 bg-ivory relative flex h-16 w-14 flex-col items-center justify-center gap-1 overflow-hidden border-2 border-dashed p-1 shadow-sm"
          style={{ borderRadius: 2 }}
        >
          <MonogramBadge
            className="border-gold-antique text-mahogany-900 h-8 w-8"
            textClassName="text-xs"
          />
          <span className="font-label text-gold-antique/80 text-[6px] tracking-[0.15em] uppercase">
            Sealed
          </span>

          {/* postmark cancellation lines, stamped across the surface */}
          <div className="border-mahogany-800/30 absolute -top-2 -right-3 h-9 w-9 rounded-full border" />
          <div className="bg-mahogany-800/25 absolute top-[38%] left-0 h-px w-full -rotate-[10deg]" />
          <div className="bg-mahogany-800/25 absolute top-[58%] left-0 h-px w-full -rotate-[10deg]" />
        </div>
      </div>
    </motion.div>
  )
}
