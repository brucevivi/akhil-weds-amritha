import { motion } from 'framer-motion'
import type { ComponentType, SVGProps } from 'react'
import type { EventDetail } from '@/data/types'
import { mapsSearchUrl } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface VenueCardProps {
  event: EventDetail
  Illustration: ComponentType<SVGProps<SVGSVGElement>>
}

export function VenueCard({ event, Illustration }: VenueCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="border-gold-temple/30 bg-mahogany-900/70 flex flex-col border"
    >
      <div className="border-gold-temple/20 border-b px-8 py-10">
        <Illustration className="text-gold-temple/80 h-24 w-full" />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-8 py-8">
        <p className="font-label text-gold-champagne/60 text-xs tracking-[0.25em] uppercase">
          {event.label}
        </p>
        <p className="font-display text-ivory text-3xl">{event.venueName}</p>
        <p className="font-body text-ivory/70 text-sm">{event.venueAddress}</p>
        <p className="font-body text-gold-champagne/70 text-sm">
          {event.displayDate}
          {event.time ? ` · ${event.time}` : ''}
        </p>
        <a
          href={mapsSearchUrl(event.mapQuery)}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-interactive
          className="font-label border-gold-temple/50 text-gold-champagne hover:border-gold-champagne mt-4 inline-flex w-fit items-center gap-2 border-b pb-1 text-xs tracking-[0.2em] uppercase transition-colors"
        >
          Get Directions
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.div>
  )
}
