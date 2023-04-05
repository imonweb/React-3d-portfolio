import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Atom from './Mac'

const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Atom />
      </Stage>
      <OrbitControls enableZoom />
    </Canvas>
  )
}

export default Development