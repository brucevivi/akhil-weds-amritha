import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AnimatePresence, motion } from 'framer-motion'
import { invitation } from '@/data/invitation'
import { MagneticButton } from '@/components/buttons/MagneticButton'
import { cn } from '@/lib/utils'
import { RSVPSuccess } from './RSVPSuccess'

const rsvpSchema = z.object({
  name: z.string().trim().min(2, 'Please share your name'),
  attending: z.enum(['marriage', 'reception', 'both']),
  guests: z.coerce.number().int().min(1, 'At least 1 guest').max(10, 'Max 10 guests'),
  message: z.string().trim().max(500).optional(),
})

type RSVPInput = z.input<typeof rsvpSchema>
type RSVPOutput = z.output<typeof rsvpSchema>

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'

const fieldClass =
  'w-full border-0 border-b border-mahogany-800/30 bg-transparent px-1 py-2 font-body text-mahogany-900 placeholder:text-mahogany-800/40 focus:border-mahogany-800 focus:outline-none'
const labelClass = 'font-label text-xs tracking-[0.25em] text-mahogany-800/70 uppercase'

export function RSVPForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RSVPInput, unknown, RSVPOutput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { attending: 'both', guests: 1 },
  })

  const onSubmit = async (data: RSVPOutput) => {
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    if (!endpoint) {
      console.warn(
        '[RSVP] VITE_FORMSPREE_ENDPOINT is not set — the form cannot submit yet. See .env.example.',
      )
      setStatus('unconfigured')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border-gold-temple/40 bg-cream border px-8 py-6 sm:px-14">
        <RSVPSuccess />
      </div>
    )
  }

  return (
    <div className="border-gold-temple/40 bg-cream border px-8 py-12 sm:px-14 sm:py-16">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7" noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Your Name
          </label>
          <input id="name" className={fieldClass} {...register('name')} />
          {errors.name && <p className="text-umber-700 text-xs">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <span className={labelClass}>Attending</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2 pt-1">
            {(
              [
                { value: 'marriage', label: invitation.events[0].label },
                { value: 'reception', label: invitation.events[1].label },
                { value: 'both', label: 'Both Ceremonies' },
              ] as const
            ).map((option) => (
              <label
                key={option.value}
                className="font-body text-mahogany-900 flex items-center gap-2 text-sm"
              >
                <input
                  type="radio"
                  value={option.value}
                  className="accent-gold-temple"
                  {...register('attending')}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="guests" className={labelClass}>
            Number of Guests
          </label>
          <input
            id="guests"
            type="number"
            min={1}
            max={10}
            className={cn(fieldClass, 'max-w-24')}
            {...register('guests')}
          />
          {errors.guests && <p className="text-umber-700 text-xs">{errors.guests.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className={labelClass}>
            Message For The Couple (optional)
          </label>
          <textarea id="message" rows={3} className={fieldClass} {...register('message')} />
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
          <MagneticButton
            type="submit"
            disabled={isSubmitting}
            className="border-mahogany-800/60 text-mahogany-900 hover:border-mahogany-900"
          >
            {isSubmitting ? 'Sending…' : 'Send RSVP'}
          </MagneticButton>

          <AnimatePresence mode="wait">
            {status === 'unconfigured' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-body text-umber-700 max-w-sm text-center text-xs"
              >
                Online RSVP isn't connected yet — please call or WhatsApp{' '}
                {invitation.hosts.mobiles[0]} to confirm your attendance.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-body text-umber-700 max-w-sm text-center text-xs"
              >
                Something went wrong sending your RSVP — please call or WhatsApp{' '}
                {invitation.hosts.mobiles[0]} instead.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  )
}
