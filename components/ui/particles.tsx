'use client'
import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion'
import { useMemo, useState, useEffect, useRef } from 'react'

const PARTICLE_COUNT = 150
const GLOW_PARTICLE_COUNT = 50

// Simple deterministic pseudo-random number generator
const seededRandom = (seed: number) => {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

type ParticleData = {
  id: number
  initialX: number
  initialY: number
  size: number
  duration: number
  delay: number
  color: string
  attraction: number
  speed: number
  initialAngle: number
}

type GlowParticleData = {
  id: number
  initialX: number
  initialY: number
  size: number
  color: string
  attraction: number
  speed: number
  initialAngle: number
}

const generateParticles = (): ParticleData[] => {
  const rand = seededRandom(12345)
  return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
    id: i,
    initialX: rand() * 100,
    initialY: rand() * 100,
    size: rand() * 10 + 3,
    duration: rand() * 25 + 15,
    delay: rand() * 8,
    color: i % 4 === 0 ? 'bg-primary' : i % 4 === 1 ? 'bg-accent' : i % 4 === 2 ? 'bg-emerald-400' : 'bg-cyan-400',
    attraction: 0.01 + rand() * 0.05,
    speed: rand() * 0.2 + 0.05,
    initialAngle: rand() * Math.PI * 2,
  }))
}

const generateGlowParticles = (): GlowParticleData[] => {
  const rand = seededRandom(67890)
  return Array.from({ length: GLOW_PARTICLE_COUNT }).map((_, i) => ({
    id: i,
    initialX: rand() * 100,
    initialY: rand() * 100,
    size: rand() * 40 + 20,
    color: i % 3 === 0 ? 'bg-purple-500' : i % 3 === 1 ? 'bg-pink-500' : 'bg-blue-500',
    attraction: 0.005 + rand() * 0.02,
    speed: rand() * 0.08 + 0.02,
    initialAngle: rand() * Math.PI * 2,
  }))
}

const Particle = ({ data, smoothMouseX, smoothMouseY }: { data: ParticleData; smoothMouseX: any; smoothMouseY: any }) => {
  const randomX = useMotionValue(0)
  const randomY = useMotionValue(0)
  const angleRef = useRef(data.initialAngle)
  const speedRef = useRef(data.speed)

  useAnimationFrame((_, delta) => {
    angleRef.current += (Math.random() - 0.5) * 0.1
    const newX = randomX.get() + Math.cos(angleRef.current) * speedRef.current * delta
    const newY = randomY.get() + Math.sin(angleRef.current) * speedRef.current * delta

    const rect = document.body.getBoundingClientRect()
    const clampedX = Math.max(-rect.width * 0.2, Math.min(rect.width * 1.2, newX))
    const clampedY = Math.max(-rect.height * 0.2, Math.min(rect.height * 1.2, newY))

    randomX.set(clampedX)
    randomY.set(clampedY)
  })

  const x = useTransform([smoothMouseX, randomX] as any, ([mouseX, randX]: [number, number]) => {
    const rect = document.body.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const initialPxX = (data.initialX / 100) * rect.width
    const initialPxY = (data.initialY / 100) * rect.height
    const dx = mouseX - centerX
    const dy = smoothMouseY.get() - centerY
    return initialPxX + randX + dx * data.attraction
  })

  const y = useTransform([smoothMouseY, randomY] as any, ([mouseY, randY]: [number, number]) => {
    const rect = document.body.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const initialPxX = (data.initialX / 100) * rect.width
    const initialPxY = (data.initialY / 100) * rect.height
    const dx = smoothMouseX.get() - centerX
    const dy = mouseY - centerY
    return initialPxY + randY + dy * data.attraction
  })

  return (
    <motion.div
      className={`absolute rounded-full ${data.color} opacity-30`}
      style={{
        x, y,
        width: `${data.size}px`,
        height: `${data.size}px`,
      }}
      animate={{
        scale: [1, 1.2, 1, 0.8, 1],
      }}
      transition={{
        duration: data.duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: data.delay,
      }}
    />
  )
}

const GlowParticle = ({ data, smoothMouseX, smoothMouseY }: { data: GlowParticleData; smoothMouseX: any; smoothMouseY: any }) => {
  const randomX = useMotionValue(0)
  const randomY = useMotionValue(0)
  const angleRef = useRef(data.initialAngle)
  const speedRef = useRef(data.speed)

  useAnimationFrame((_, delta) => {
    angleRef.current += (Math.random() - 0.5) * 0.05
    const newX = randomX.get() + Math.cos(angleRef.current) * speedRef.current * delta
    const newY = randomY.get() + Math.sin(angleRef.current) * speedRef.current * delta

    const rect = document.body.getBoundingClientRect()
    const clampedX = Math.max(-rect.width * 0.2, Math.min(rect.width * 1.2, newX))
    const clampedY = Math.max(-rect.height * 0.2, Math.min(rect.height * 1.2, newY))

    randomX.set(clampedX)
    randomY.set(clampedY)
  })

  const x = useTransform([smoothMouseX, randomX] as any, ([mouseX, randX]: [number, number]) => {
    const rect = document.body.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const initialPxX = (data.initialX / 100) * rect.width
    const initialPxY = (data.initialY / 100) * rect.height
    const dx = mouseX - centerX
    const dy = smoothMouseY.get() - centerY
    return initialPxX + randX + dx * data.attraction
  })

  const y = useTransform([smoothMouseY, randomY] as any, ([mouseY, randY]: [number, number]) => {
    const rect = document.body.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const initialPxX = (data.initialX / 100) * rect.width
    const initialPxY = (data.initialY / 100) * rect.height
    const dx = smoothMouseX.get() - centerX
    const dy = mouseY - centerY
    return initialPxY + randY + dy * data.attraction
  })

  return (
    <motion.div
      className={`absolute rounded-full ${data.color} opacity-15`}
      style={{
        x, y,
        width: `${data.size}px`,
        height: `${data.size}px`,
        filter: 'blur(12px)',
      }}
      animate={{
        scale: [1, 1.3, 1, 0.9, 1],
      }}
      transition={{
        duration: 20 + Math.random() * 15,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  )
}

export function Particles() {
  const [isMounted, setIsMounted] = useState(false)
  const particles = useMemo(() => generateParticles(), [])
  const glowParticles = useMemo(() => generateGlowParticles(), [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothMouseX = useSpring(mouseX, { stiffness: 500, damping: 100 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 500, damping: 100 })

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Glowing blurry particles */}
      {glowParticles.map((particle) => (
        <GlowParticle
          key={`glow-${particle.id}`}
          data={particle}
          smoothMouseX={smoothMouseX}
          smoothMouseY={smoothMouseY}
        />
      ))}
      {/* Normal particles */}
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          data={particle}
          smoothMouseX={smoothMouseX}
          smoothMouseY={smoothMouseY}
        />
      ))}
    </div>
  )
}