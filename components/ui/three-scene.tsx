'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, TorusKnot, Box, Float } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null)

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <TorusKnot position={[-3, 0, 0]} scale={0.6}>
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </TorusKnot>
      </Float>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <Sphere position={[0, 0, 0]} scale={0.4}>
          <meshStandardMaterial color="#ec4899" />
        </Sphere>
      </Float>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <Box position={[3, 0, 0]} scale={0.7}>
          <meshStandardMaterial color="#06b6d4" wireframe />
        </Box>
      </Float>
    </group>
  )
}

export function ThreeScene() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
        <SceneContent />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}