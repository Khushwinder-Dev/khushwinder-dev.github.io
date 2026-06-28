'use client'
import { motion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'

const PARTICLE_COUNT = 25

// Simple deterministic pseudo-random number generator
const seededRandom = (seed: number) => {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const generateParticles = () => {
  const rand = seededRandom(12345)
  return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
    id: i,
    initialX: rand() * 100,
    initialY: rand() * 100,
    size: rand() * 6 + 2,
    duration: rand() * 25 + 15,
    delay: rand() * 8,
    color: i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-accent' : 'bg-emerald-400',
  }))
}

export function Particles() {
  const [isMounted, setIsMounted] = useState(false)
  const particles = useMemo(() => generateParticles(), [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} opacity-20`}
          style={{
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            x: [0, -40, 30, -30, 40, 0],
            y: [0, 30, -40, 40, -30, 0],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}