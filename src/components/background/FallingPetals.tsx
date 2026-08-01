import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

interface Petal {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  fallSpeed: number
  swayAmplitude: number
  swaySpeed: number
  swayPhase: number
  opacity: number
  hue: 'gold' | 'rose'
}

const PETAL_COUNT = 26
const GOLD = '212, 175, 55'
const ROSE = '168, 60, 60'

export function FallingPetals({ className }: { className?: string }) {
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
    let petals: Petal[] = []
    let frameId = 0
    let running = true
    let elapsed = 0

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const createPetals = () => {
      petals = Array.from({ length: PETAL_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.8,
        fallSpeed: Math.random() * 0.35 + 0.12,
        swayAmplitude: Math.random() * 26 + 10,
        swaySpeed: Math.random() * 0.6 + 0.2,
        swayPhase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.35 + 0.25,
        hue: Math.random() < 0.6 ? 'gold' : 'rose',
      }))
    }

    const drawPetal = (p: Petal) => {
      const color = p.hue === 'gold' ? GOLD : ROSE
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotation)
      ctx.beginPath()
      ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${color}, ${p.opacity})`
      ctx.fill()
      ctx.restore()
    }

    const draw = (time: number) => {
      if (!running) return
      elapsed = time / 1000
      ctx.clearRect(0, 0, width, height)
      for (const p of petals) {
        p.y += p.fallSpeed
        p.rotation += p.rotationSpeed * 0.02
        const sway = Math.sin(elapsed * p.swaySpeed + p.swayPhase) * p.swayAmplitude * 0.01
        p.x += sway
        if (p.y > height + 10) {
          p.y = -10
          p.x = Math.random() * width
        }
        drawPetal(p)
      }
      frameId = requestAnimationFrame(draw)
    }

    const handleVisibility = () => {
      running = document.visibilityState === 'visible'
      if (running) frameId = requestAnimationFrame(draw)
      else cancelAnimationFrame(frameId)
    }

    resize()
    createPetals()
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
