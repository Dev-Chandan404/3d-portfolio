// src/SafeCanvas.jsx
import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

export function SafeCanvas({ children, ...canvasProps }) {
  const canvasRef = useRef(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleContextLoss = (e) => {
      e.preventDefault()
      console.log('WebGL context lost – recovering...')
      setTimeout(() => setHasError(false), 100)
    }

    canvas.addEventListener('webglcontextlost', handleContextLoss)
    return () => canvas.removeEventListener('webglcontextlost', handleContextLoss)
  }, [])

  if (hasError) return null

  return <Canvas ref={canvasRef} {...canvasProps}>{children}</Canvas>
}