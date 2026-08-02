import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AnimatePresence, motion } from 'framer-motion'
import { invitation } from '@/data/invitation'
import { MagneticButton } from '@/components/buttons/MagneticButton'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { OrnamentalDivider } from '@/assets/motifs/KeralaBorder'
import { cn } from '@/lib/utils'
import { PostageStamp } from './PostageStamp'
import { RSVPSuccess } from './RSVPSuccess'

const rsvpSchema = z
  .object({
    name: z.string().trim().min(2, 'Please share your name'),
    attending: z.enum(['marriage', 'reception', 'both']),
    guests: z.coerce.number().int().min(1, 'At least 1 guest').max(10, 'Max 10 guests'),
    accommodation: z.enum(['no', 'yes']),
    accommodationMobile: z.string().trim().optional(),
    message: z.string().trim().max(500).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.accommodation === 'yes' && !data.accommodationMobile) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['accommodationMobile'],
        message: 'Please share a mobile number',
      })
    }
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
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RSVPInput, unknown, RSVPOutput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { attending: 'both', guests: 1, accommodation: 'no' },
  })

  const wantsAccommodation = watch('accommodation') === 'yes'

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

  return (
    <div className="relative mx-auto max-w-3xl">
      <PostageStamp />

      <div
        className={cn(
          'border-mahogany-800/70 bg-ivory relative grid overflow-hidden rounded-sm border-2 shadow-xl',
          'transition-transform duration-500 ease-out hover:rotate-0 sm:-rotate-1',
          status === 'success' ? '' : 'sm:grid-cols-[0.85fr_1.15fr]',
        )}
      >
        <div
          aria-hidden="true"
          className="border-gold-temple/40 pointer-events-none absolute inset-[5px] z-20 rounded-sm border"
        />

        {status === 'success' ? (
          <div className="px-8 py-12 sm:px-14">
            <RSVPSuccess />
          </div>
        ) : (
          <>
            <div className="from-mahogany-900 to-mahogany-800 border-gold-temple/40 flex flex-col justify-center gap-4 border-b border-dashed bg-linear-to-br px-8 py-10 sm:border-r sm:border-b-0 sm:px-10">
              <Eyebrow>Kindly Respond</Eyebrow>
              <p className="font-display text-ivory text-3xl">We'd Love To Celebrate With You!</p>
              <OrnamentalDivider className="text-gold-temple h-4 w-24" />
              <p className="font-body text-gold-champagne/70 text-sm italic">
                We've saved a seat for you — send this card back to let us know.
              </p>
            </div>

            <div className="px-8 py-10 sm:px-10">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={labelClass}>
                    Your Name
                  </label>
                  <input id="name" className={fieldClass} {...register('name')} />
                  {errors.name && <p className="text-umber-700 text-xs">{errors.name.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="attending" className={labelClass}>
                    Attending
                  </label>
                  <div className="relative">
                    <select
                      id="attending"
                      className={cn(fieldClass, 'cursor-pointer appearance-none pr-6')}
                      {...register('attending')}
                    >
                      <option value="marriage">{invitation.events[0].label}</option>
                      <option value="reception">{invitation.events[1].label}</option>
                      <option value="both">Both Ceremonies</option>
                    </select>
                    <span
                      aria-hidden="true"
                      className="text-mahogany-800/60 pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-xs"
                    >
                      ▾
                    </span>
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
                  {errors.guests && (
                    <p className="text-umber-700 text-xs">{errors.guests.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="accommodation" className={labelClass}>
                    Do You Want Accommodation?
                  </label>
                  <div className="relative max-w-40">
                    <select
                      id="accommodation"
                      className={cn(fieldClass, 'cursor-pointer appearance-none pr-6')}
                      {...register('accommodation')}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                    <span
                      aria-hidden="true"
                      className="text-mahogany-800/60 pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-xs"
                    >
                      ▾
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {wantsAccommodation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="accommodationMobile" className={labelClass}>
                          Your Mobile Number
                        </label>
                        <input
                          id="accommodationMobile"
                          type="tel"
                          className={fieldClass}
                          {...register('accommodationMobile')}
                        />
                        {errors.accommodationMobile && (
                          <p className="text-umber-700 text-xs">
                            {errors.accommodationMobile.message}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={labelClass}>
                    Message For The Couple (optional)
                  </label>
                  <textarea id="message" rows={2} className={fieldClass} {...register('message')} />
                </div>

                <div className="mt-2 flex flex-col items-start gap-4">
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-mahogany-800 border-mahogany-900 text-gold-champagne hover:bg-mahogany-900 hover:border-gold-temple"
                  >
                    {isSubmitting ? 'Sending…' : 'Send RSVP'}
                  </MagneticButton>

                  <AnimatePresence mode="wait">
                    {status === 'unconfigured' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-body text-umber-700 max-w-sm text-xs"
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
                        className="font-body text-umber-700 max-w-sm text-xs"
                      >
                        Something went wrong sending your RSVP — please call or WhatsApp{' '}
                        {invitation.hosts.mobiles[0]} instead.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
