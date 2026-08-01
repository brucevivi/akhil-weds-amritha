import { motion } from 'framer-motion'
import { invitation } from '@/data/invitation'
import { MonogramBadge } from '@/components/ui/MonogramBadge'
import { AudioToggle } from '@/components/audio/AudioToggle'
import { OrnamentalDivider } from '@/assets/motifs/KeralaBorder'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { fadeIn } from '@/animations/variants'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-mahogany-950 relative flex flex-col items-center gap-8 overflow-hidden px-6 py-24 text-center">
      <div
        aria-hidden="true"
        className="from-mahogany-900/60 via-mahogany-950 absolute inset-0 bg-radial to-black"
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <ScrollReveal variants={fadeIn}>
          <MonogramBadge className="h-20 w-20" />
        </ScrollReveal>

        <ScrollReveal variants={fadeIn} className="flex flex-col items-center gap-3">
          <p className="font-label text-gold-champagne/60 text-xs tracking-[0.35em] uppercase">
            A New Chapter Begins
          </p>
          <p className="text-gold-gradient font-display text-4xl sm:text-5xl">
            {invitation.couple.groom} &amp; {invitation.couple.bride}
          </p>
          <p className="font-body text-ivory/60 text-sm">See you at the celebration</p>
        </ScrollReveal>

        <OrnamentalDivider className="text-gold-temple/50 h-4 w-40" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-body text-ivory/40 flex flex-col items-center gap-2 text-xs"
        >
          <p>{invitation.creditLine}</p>
          <p>{invitation.blessingLine}</p>
        </motion.div>

        <div className="mt-4 flex items-center gap-4">
          <AudioToggle />
          <button
            type="button"
            data-cursor-interactive
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="border-gold-temple/50 text-gold-champagne hover:border-gold-champagne flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M12 19V5M12 5l-6 6M12 5l6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
