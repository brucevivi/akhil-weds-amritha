import { type PointerEvent as ReactPointerEvent, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import coupleBackground from '@/assets/photos/couple-silhouette-2.jpg'
import { invitation } from '@/data/invitation'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { PatternBackground } from '@/components/background/PatternBackground'
import { AmbientParticles } from '@/components/background/AmbientParticles'
import { OrnamentalFrame } from '@/components/ui/OrnamentalFrame'
import { GaneshaMotif } from '@/assets/motifs/GaneshaMotif'
import { FloralBorder } from '@/assets/motifs/FloralBorder'
import { BellOrnament } from '@/assets/motifs/BellOrnament'
import { OrnamentalDivider } from '@/assets/motifs/KeralaBorder'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { fadeUp, reducedMotionVariants, staggerContainer } from '@/animations/variants'
import { keepTitlesTogether } from '@/lib/utils'

const brideParents = keepTitlesTogether(invitation.bride.parents.replace(/^D\/o\s*/, ''))
const hostNames = keepTitlesTogether(invitation.hosts.names)

const blessingVerse = [
  'May every dawn find you together,',
  'may blessings bloom along your way,',
  'and may your love shine brighter than the temple gold.',
]

export function FormalInvitationCard() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const lineVariant = prefersReducedMotion ? reducedMotionVariants : fadeUp

  const cardRef = useRef<HTMLDivElement>(null)
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const springX = useSpring(tiltX, { stiffness: 150, damping: 20 })
  const springY = useSpring(tiltY, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4])

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    tiltX.set((event.clientX - rect.left) / rect.width - 0.5)
    tiltY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handlePointerLeave = () => {
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <SectionContainer
      id="invitation"
      className="bg-cream"
      background={
        <>
          <PatternBackground color="#C9A227" opacity={0.07} />
          <AmbientParticles count={30} color="107, 52, 16" className="opacity-50" />
        </>
      }
    >
      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
        className="relative"
      >
        <OrnamentalFrame className="bg-ivory px-10 shadow-sm sm:px-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <img
              src={coupleBackground}
              alt=""
              className="h-full w-full object-cover opacity-40 sepia"
              style={{ objectPosition: '42% center' }}
            />
            <div className="from-ivory via-ivory/60 to-ivory absolute inset-0 bg-linear-to-b" />
          </div>

          <FloralBorder
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-2 h-full w-6 sm:left-4"
          />
          <FloralBorder
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-2 h-full w-6 -scale-x-100 sm:right-4"
          />
          <BellOrnament
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 left-1 h-10 w-10 sm:left-3"
          />
          <BellOrnament
            aria-hidden="true"
            className="pointer-events-none absolute right-1 -bottom-6 h-10 w-10 sm:right-3"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer(0.12)}
            className="relative z-10 flex flex-col items-center gap-6 text-center"
          >
            <motion.div
              variants={lineVariant}
              className="relative flex h-20 w-16 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className="bg-gold-temple/20 absolute inset-0 rounded-full blur-xl"
              />
              <GaneshaMotif className="relative h-full w-full" />
            </motion.div>

            <motion.div variants={lineVariant} className="flex flex-col items-center gap-3">
              <p className="font-body text-mahogany-800/80 max-w-xl text-base sm:text-lg">
                With hearts full of joy and gratitude, we joyfully announce the wedding of our
                beloved
              </p>
            </motion.div>

            <motion.div variants={lineVariant}>
              <OrnamentalDivider className="text-gold-temple/50 h-4 w-28" />
            </motion.div>

            <motion.div variants={lineVariant} className="flex flex-col items-center gap-2">
              <p className="text-gold-gradient shimmer-on-hover font-display cursor-default text-5xl sm:text-6xl">
                {invitation.bride.name}
              </p>
              <p className="font-body text-umber-700/70 text-sm sm:text-base">
                daughter of <span className="text-mahogany-900 font-medium">{brideParents}</span>
              </p>
              <p className="font-body text-umber-700/50 text-xs sm:text-sm">
                {invitation.bride.address}
              </p>
            </motion.div>

            <motion.div
              variants={lineVariant}
              className="text-gold-antique/70 flex items-center gap-3"
            >
              <span className="bg-gold-temple/30 h-px w-8" aria-hidden="true" />
              <span className="font-display text-2xl italic">&amp;</span>
              <span className="bg-gold-temple/30 h-px w-8" aria-hidden="true" />
            </motion.div>

            <motion.div variants={lineVariant} className="flex flex-col items-center gap-2">
              <p className="text-gold-gradient shimmer-on-hover font-display cursor-default text-5xl sm:text-6xl">
                {invitation.groom.name}
              </p>
              <p className="font-body text-umber-700/70 text-sm sm:text-base">
                son of <span className="text-mahogany-900 font-medium">{hostNames}</span>
              </p>
              <p className="font-body text-umber-700/50 text-xs sm:text-sm">
                {invitation.hosts.address}
              </p>
            </motion.div>

            <motion.div variants={lineVariant}>
              <OrnamentalDivider className="text-gold-temple/50 h-4 w-28" />
            </motion.div>

            <motion.p
              variants={lineVariant}
              className="font-body text-mahogany-800/80 max-w-xl text-base sm:text-lg"
            >
              This sacred union is blessed by tradition, held together by family, and lit by the
              golden warmth of love.
            </motion.p>

            <motion.p
              variants={lineVariant}
              className="font-body text-gold-antique max-w-md text-sm italic sm:text-base"
            >
              Your presence, prayers, and blessings would make this moment truly complete.
            </motion.p>

            <motion.div
              variants={lineVariant}
              className="border-gold-temple/20 flex flex-col gap-1 border-t pt-6"
            >
              {blessingVerse.map((line) => (
                <p
                  key={line}
                  className="font-display text-mahogany-800/70 text-base italic sm:text-lg"
                >
                  {line}
                </p>
              ))}
            </motion.div>
          </motion.div>
        </OrnamentalFrame>
      </motion.div>
    </SectionContainer>
  )
}
