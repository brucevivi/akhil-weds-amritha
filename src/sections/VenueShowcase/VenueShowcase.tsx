import { invitation } from '@/data/invitation'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { MandapaMotif } from '@/assets/motifs/MandapaMotif'
import { AuditoriumMotif } from '@/assets/motifs/AuditoriumMotif'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { motion } from 'framer-motion'
import { VenueCard } from './VenueCard'

const illustrations = {
  marriage: MandapaMotif,
  reception: AuditoriumMotif,
} as const

export function VenueShowcase() {
  return (
    <SectionContainer id="venues" className="bg-mahogany-950">
      <div className="mb-14 text-center">
        <Eyebrow>Where To Find Us</Eyebrow>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer(0.2)}
        className="grid gap-8 sm:grid-cols-2"
      >
        {invitation.events.map((event) => (
          <motion.div key={event.id} variants={fadeUp}>
            <VenueCard event={event} Illustration={illustrations[event.id]} />
          </motion.div>
        ))}
      </motion.div>

      <ScrollReveal className="mt-10 text-center">
        <p className="font-body text-ivory/50 mx-auto max-w-lg text-sm italic">
          "Get Directions" opens a Google Maps search for each venue's address.
        </p>
      </ScrollReveal>
    </SectionContainer>
  )
}
