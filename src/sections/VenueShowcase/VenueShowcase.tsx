import { invitation } from '@/data/invitation'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { AmbientParticles } from '@/components/background/AmbientParticles'
import { CoastalMountainScape } from '@/assets/motifs/CoastalMountainScape'
import { HangingDeepam } from '@/assets/motifs/HangingDeepam'
import { WeddingCeremonyScene } from '@/assets/motifs/WeddingCeremonyScene'
import { WeddingReceptionScene } from '@/assets/motifs/WeddingReceptionScene'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { VenueCard } from './VenueCard'

const illustrations = {
  marriage: WeddingCeremonyScene,
  reception: WeddingReceptionScene,
} as const

const hangingLights = [
  { left: '10%', height: 80, delay: 0.2 },
  { left: '28%', height: 55, delay: 0.7 },
  { left: '72%', height: 60, delay: 0.4 },
  { left: '90%', height: 85, delay: 0.9 },
]

export function VenueShowcase() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <SectionContainer
      id="venues"
      className="bg-mahogany-900"
      background={
        <>
          <div
            aria-hidden="true"
            className="from-mahogany-800 via-mahogany-900 to-mahogany-950 absolute inset-0 bg-radial"
          />
          <div
            aria-hidden="true"
            className="text-gold-temple pointer-events-none absolute inset-x-0 bottom-0 h-[40%] opacity-[0.14]"
          >
            <CoastalMountainScape className="h-full w-full" />
          </div>
          <AmbientParticles count={60} className="opacity-80" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0">
            {hangingLights.map((light) => (
              <motion.div
                key={light.left}
                className="absolute top-0 origin-top"
                style={{ left: light.left, height: light.height, width: 28, marginLeft: -14 }}
                animate={prefersReducedMotion ? undefined : { rotate: [-4, 4, -4] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: light.delay,
                }}
              >
                <HangingDeepam className="h-full w-full" />
              </motion.div>
            ))}
          </div>
        </>
      }
    >
      <ScrollReveal>
        <SectionHeading eyebrow="Plan Your Visit" title="The" accent="Venue" tone="dark" />
      </ScrollReveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer(0.2)}
        className="mt-14 flex justify-center"
      >
        {invitation.events.map((event) => (
          <motion.div key={event.id} variants={fadeUp} className="w-full max-w-md">
            <VenueCard event={event} Illustration={illustrations[event.id]} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  )
}
