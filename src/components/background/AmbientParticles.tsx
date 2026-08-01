import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

interface Particle {
  x: number
  y: number
  radius: number
  speedY: number
  speedX: number
  opacity: number
}

const PARTICLE_COUNT = 42
const GOLD = '212, 175, 55'

export function AmbientParticles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let frameId = 0
    let running = true

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        speedY: Math.random() * 0.25 + 0.05,
        speedX: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.5 + 0.15,
      }))
    }

    const draw = () => {
      if (!running) return
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.y -= p.speedY
        p.x += p.speedX
        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${GOLD}, ${p.opacity})`
        ctx.fill()
      }
      frameId = requestAnimationFrame(draw)
    }

    const handleVisibility = () => {
      running = document.visibilityState === 'visible'
      if (running) frameId = requestAnimationFrame(draw)
      else cancelAnimationFrame(frameId)
    }

    resize()
    createParticles()
    frameId = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      running = false
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
    />
  )
}
