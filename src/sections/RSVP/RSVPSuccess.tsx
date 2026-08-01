import { motion } from 'framer-motion'
import { MonogramBadge } from '@/components/ui/MonogramBadge'

export function RSVPSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-5 py-10 text-center"
    >
      <MonogramBadge className="border-gold-antique text-mahogany-900 h-20 w-20 border-2" />
      <p className="font-display text-mahogany-900 text-2xl">Your RSVP is sealed</p>
      <p className="font-body text-umber-700/70 max-w-sm text-sm">
        Thank you for letting us know. We can't wait to celebrate with you.
      </p>
    </motion.div>
  )
}
