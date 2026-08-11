import { motion } from 'framer-motion'
import type { ComponentType, SVGProps } from 'react'
import type { EventDetail } from '@/data/types'
import { mapsSearchUrl } from '@/lib/utils'
import { PinIcon } from '@/assets/motifs/PinIcon'
import { AmbientParticles } from '@/components/background/AmbientParticles'
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
      className="group border-gold-temple/30 bg-ivory flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-shadow duration-400 hover:shadow-xl"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Illustration className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110" />
        {event.id === 'reception' && <AmbientParticles count={20} className="opacity-90" />}
      </div>

      <div className="flex flex-1 flex-col items-center gap-2 px-6 py-8 text-center">
        <span className="border-umber-700/30 text-umber-700/80 font-label rounded-full border px-3 py-1 text-[10px] tracking-[0.2em] uppercase">
          {event.label}
        </span>
        <p className="font-display text-mahogany-900 mt-2 text-2xl sm:text-3xl">
          {event.venueName}
        </p>
        <p className="font-body text-umber-700/80 flex items-center gap-1.5 text-sm">
          <PinIcon className="h-3.5 w-3.5 shrink-0" />
          {event.venueAddress}
        </p>
        <p className="font-label text-gold-antique mt-1 text-xs tracking-[0.15em] uppercase">
          {event.displayDate}
          {event.time ? ` · ${event.time}` : ''}
        </p>

        <div className="mt-auto pt-6">
          <a
            href={event.mapUrl ?? mapsSearchUrl(event.mapQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mahogany-800 border-mahogany-900 text-gold-champagne hover:bg-mahogany-900 hover:border-gold-temple font-label inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-colors"
          >
            <PinIcon className="h-3.5 w-3.5" />
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  )
}
