import { motion } from 'framer-motion'
import { invitation } from '@/data/invitation'
import { MagneticButton } from '@/components/buttons/MagneticButton'
import { OrnamentalDivider } from '@/assets/motifs/KeralaBorder'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { FallingPetals } from '@/components/background/FallingPetals'
import { HangingDeepam } from '@/assets/motifs/HangingDeepam'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { fadeIn, fadeUp } from '@/animations/variants'

const hangingLights = [
  { left: '8%', height: 90, delay: 0 },
  { left: '20%', height: 130, delay: 0.4 },
  { left: '34%', height: 70, delay: 0.8 },
  { left: '50%', height: 150, delay: 0.2 },
  { left: '66%', height: 85, delay: 0.6 },
  { left: '80%', height: 120, delay: 1 },
  { left: '92%', height: 65, delay: 0.3 },
]

const poemLines = [
  ['Under a sky of temple gold,', 'where lotus blooms and stories unfold,'],
  ['two families become one today,', 'as love quietly finds its way.'],
  ['Thank you for the warmth you bring,', 'for blessings that make our hearts sing,'],
  ['for standing with us, near and far —', 'this new chapter shines because you are.'],
]

export function Footer() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const scrollToRsvp = () => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-mahogany-900 relative flex flex-col items-center gap-6 overflow-hidden px-6 py-24 text-center">
      <div
        aria-hidden="true"
        className="from-mahogany-800 via-mahogany-900 to-mahogany-950 absolute inset-0 bg-radial"
      />
      <FallingPetals />

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0">
        {hangingLights.map((light) => (
          <motion.div
            key={light.left}
            className="absolute top-0 origin-top"
            style={{ left: light.left, height: light.height, width: 32, marginLeft: -16 }}
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

      <div className="relative z-10 flex max-w-xl flex-col items-center gap-6">
        <ScrollReveal variants={fadeIn} className="flex items-center gap-3">
          <span className="bg-gold-temple/40 h-px w-10" aria-hidden="true" />
          <p className="font-label text-gold-champagne/70 text-xs tracking-[0.35em] uppercase">
            With Love &amp; Gratitude
          </p>
          <span className="bg-gold-temple/40 h-px w-10" aria-hidden="true" />
        </ScrollReveal>

        <ScrollReveal variants={fadeIn}>
          <p className="font-display text-ivory text-4xl sm:text-5xl">
            A New <span className="text-gold-gradient italic">Chapter</span> Begins
          </p>
        </ScrollReveal>

        <ScrollReveal variants={fadeUp} className="flex flex-col gap-4">
          {poemLines.map((stanza) => (
            <p
              key={stanza.join('|')}
              className="font-display text-gold-champagne/80 text-lg italic sm:text-xl"
            >
              {stanza[0]}
              <br />
              {stanza[1]}
            </p>
          ))}
        </ScrollReveal>

        <ScrollReveal variants={fadeIn} className="flex items-center gap-3 pt-2">
          <p className="text-gold-gradient font-display text-3xl sm:text-4xl">
            {invitation.couple.groom}
          </p>
          <motion.span
            className="text-gold-antique text-2xl"
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.25, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ♥
          </motion.span>
          <p className="text-gold-gradient font-display text-3xl sm:text-4xl">
            {invitation.couple.bride}
          </p>
        </ScrollReveal>

        <ScrollReveal variants={fadeIn} className="pt-2">
          <MagneticButton onClick={scrollToRsvp}>Join Us In Celebration</MagneticButton>
        </ScrollReveal>

        <OrnamentalDivider className="text-gold-temple/50 mt-2 h-4 w-40" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-body text-gold-champagne/50 flex flex-col items-center gap-2 text-xs"
        >
          <p className="italic">{invitation.creditLine}</p>
          <p>{invitation.blessingLine}</p>
        </motion.div>

        <ScrollReveal variants={fadeIn} className="mt-4 flex flex-col items-center gap-3">
          <p className="font-label text-gold-champagne/50 text-[11px] tracking-[0.3em] uppercase">
            For Any Queries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {invitation.hosts.mobiles.map((mobile) => (
              <a
                key={mobile}
                href={`tel:+91${mobile}`}
                className="border-gold-temple/40 text-ivory hover:border-gold-antique font-body flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors"
              >
                <span aria-hidden="true">📞</span>+91 {mobile}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
