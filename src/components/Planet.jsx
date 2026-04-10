// src/components/Planet.jsx
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

export function Planet(props) {
  const shapeContainer = useRef(null)
  const shperesContainer = useRef(null)
  const ringContainer = useRef(null)

  // Suppress WebGL errors that trigger the sad emoji
  useEffect(() => {
    const errorHandler = (event) => {
      if (
        event.error?.message?.includes('WebGL') ||
        event.error?.message?.includes('glTF') ||
        event.error?.message?.includes('context lost')
      ) {
        console.warn("Suppressed a known 3D error that would have shown the sad emoji.")
        event.preventDefault()
        return false
      }
    }
    window.addEventListener('error', errorHandler)
    return () => window.removeEventListener('error', errorHandler)
  }, [])

  const { nodes, materials } = useGLTF('/models/Planet.glb')

  if (!nodes || !materials) return null

  useGSAP(() => {
    if (!shapeContainer.current) return
    const tl = gsap.timeline()
    tl.from(shapeContainer.current.position, {
      y: 5,
      duration: 3,
      ease: "ciru.out",
    })
    tl.from(shapeContainer.current.rotation, {
      x: 0,
      y: Math.PI,
      z: -Math.PI,
      duration: 10,
      ease: "power1.inOut"
    }, "-=25%")
    tl.from(ringContainer.current.rotation, {
      x: 0.8,
      y: 0,
      z: 0,
      duration: 10,
      ease: "power1.inOut"
    }, "<")
  }, [nodes])

  return (
    <group ref={shapeContainer} {...props} dispose={null}>
      <group ref={shperesContainer}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.002']}
          rotation={[0, 0, 0.741]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2.geometry}
          material={materials['Material.001']}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
      </group>
      <mesh
        ref={ringContainer}
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials['Material.001']}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
    </group>
  )
}

useGLTF.preload('/models/Planet.glb')