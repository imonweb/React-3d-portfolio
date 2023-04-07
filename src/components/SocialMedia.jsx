import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Social from './Social'
import styled from 'styled-components'


const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
`

const SocialMedia = () => {
  return (
    <>
     <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Social />
      </Stage>
      <OrbitControls enableZoom />
    </Canvas>
    <Desc>
        Social Media
    </Desc>
    </>

  )
}

export default SocialMedia