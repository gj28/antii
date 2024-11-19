import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from "./Model"
import { Environment } from '@react-three/drei'

export default function DynamicCanvas({scroll}) {
  return (
    <Canvas shadows eventSource={document} eventPrefix="client">
    <ambientLight intensity={1} />
    <Suspense fallback={"loading..."}>
      <Model scroll={scroll} />
      <Environment preset="city" />
    </Suspense>
    <color attach="background" args={["#050505"]} />
  </Canvas>
  )
}
