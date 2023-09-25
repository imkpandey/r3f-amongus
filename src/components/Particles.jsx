import { Point, Points } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'

export function Particles({ size = 1000 }) {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <Points limit={size}>
      <pointsMaterial size={0.02} vertexColors depthTest={false} />
      {Array.from({ length: size }).map((_, i) => (
        <Point
          key={i}
          position={[
            (0.5 - Math.random()) * width * 5,
            0.5 * height - Math.random() * height * 5,
            (0.5 - Math.random()) * 10,
          ]}
          color="#ffeded"
        />
      ))}
    </Points>
  )
}