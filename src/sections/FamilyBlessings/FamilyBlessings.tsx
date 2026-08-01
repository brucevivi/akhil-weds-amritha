import { motion } from 'framer-motion'
import { invitation } from '@/data/invitation'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { LotusMotif } from '@/assets/motifs/LotusMotif'
import { TempleLampMotif } from '@/assets/motifs/TempleLampMotif'
import { PeacockMotif } from '@/assets/motifs/PeacockMotif'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { fadeIn, reducedMotionVariants, staggerContainer } from '@/animations/variants'

const blessingCards = [
  {
    title: 'With the Blessings Of',
    lines: [invitation.hosts.names],
    Motif: LotusMotif,
  },
  {
    title: "Vivek's Grandparents",
    lines: invitation.groom.lineage.map((entry) => entry.label),
    Motif: TempleLampMotif,
  },
  {
    title: "Gauthami's Parents",
    lines: [invitation.bride.parents.replace('D/o ', '')],
    Motif: PeacockMotif,
  },
]

export function FamilyBlessings() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const cardVariant = prefersReducedMotion ? reducedMotionVariants : fadeIn

  return (
    <SectionContainer id="blessings" className="bg-mahogany-950">
      <div className="mb-16 text-center">
        <Eyebrow>Blessings From the Families</Eyebrow>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.25)}
        className="grid gap-10 sm:grid-cols-3"
      >
        {blessingCards.map(({ title, lines, Motif }) => (
          <motion.div
            key={title}
            variants={cardVariant}
            className="border-gold-temple/25 flex flex-col items-center gap-4 border px-6 py-10 text-center"
          >
            <Motif className="text-gold-temple/80 h-12 w-12" />
            <p className="font-label text-gold-champagne/70 text-xs tracking-[0.25em] uppercase">
              {title}
            </p>
            <div className="space-y-1">
              {lines.map((line) => (
                <p key={line} className="font-body text-ivory/75 text-sm sm:text-base">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 flex flex-col items-center gap-2 text-center">
        <p className="font-display text-gold-champagne/80 text-lg italic">
          {invitation.creditLine}
        </p>
        <p className="font-label text-ivory/50 text-xs tracking-[0.2em] uppercase">
          {invitation.blessingLine}
        </p>
      </div>
    </SectionContainer>
  )
}
