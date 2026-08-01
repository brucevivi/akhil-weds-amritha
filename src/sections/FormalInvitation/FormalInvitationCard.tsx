import { motion } from 'framer-motion'
import { invitation } from '@/data/invitation'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { OrnamentalFrame } from '@/components/ui/OrnamentalFrame'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { OrnamentalDivider } from '@/assets/motifs/KeralaBorder'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { fadeUp, reducedMotionVariants, staggerContainer } from '@/animations/variants'

export function FormalInvitationCard() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const lineVariant = prefersReducedMotion ? reducedMotionVariants : fadeUp

  return (
    <SectionContainer id="invitation" className="bg-mahogany-900">
      <OrnamentalFrame>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.12)}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.div variants={lineVariant}>
            <Eyebrow>{invitation.invocation}</Eyebrow>
          </motion.div>

          <motion.div variants={lineVariant} className="space-y-1">
            <p className="font-display text-ivory text-2xl sm:text-3xl">{invitation.hosts.names}</p>
            <p className="font-body text-ivory/70 text-sm sm:text-base">
              {invitation.hosts.address}
            </p>
            <p className="font-body text-gold-champagne/70 text-sm sm:text-base">
              Mob: {invitation.hosts.mobiles.join(' & ')}
            </p>
          </motion.div>

          <motion.p
            variants={lineVariant}
            className="font-body text-ivory/85 max-w-xl text-base italic sm:text-lg"
          >
            {invitation.invitationLine}
          </motion.p>

          <motion.div variants={lineVariant}>
            <OrnamentalDivider className="text-gold-temple h-4 w-32" />
          </motion.div>

          <motion.div variants={lineVariant} className="space-y-2">
            <p className="text-gold-gradient font-display text-4xl sm:text-6xl">
              {invitation.groom.name}
            </p>
            {invitation.groom.lineage.map((entry) => (
              <p
                key={entry.label}
                className="font-body text-ivory/60 mx-auto max-w-lg text-xs sm:text-sm"
              >
                {entry.label}
              </p>
            ))}
          </motion.div>

          <motion.p variants={lineVariant} className="font-label text-gold-champagne/60 text-sm">
            with
          </motion.p>

          <motion.div variants={lineVariant} className="space-y-2">
            <p className="text-gold-gradient font-display text-4xl sm:text-6xl">
              {invitation.bride.name}
            </p>
            <p className="font-body text-ivory/60 text-xs sm:text-sm">{invitation.bride.parents}</p>
            <p className="font-body text-ivory/60 text-xs sm:text-sm">{invitation.bride.address}</p>
          </motion.div>
        </motion.div>
      </OrnamentalFrame>
    </SectionContainer>
  )
}
