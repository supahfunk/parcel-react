import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
// import Effects from './three/Effects'
import Model from './three/Model'
import Button from './components/Button'
import './styles.css'

export default function App() {
  return (
    <>
      <Button
        background="blue"
        color="white"
      >
        ok
      </Button>
      <Canvas
        className="canvas"
        colorManagement
        shadowMap
        pixelRatio={[1, 2]}
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 10], fov: 35 }}
      >
        <Suspense fallback={null}>
          <OrbitControls />
          <Environment preset="city" />
          <Model />
          {/* <Effects /> */}
        </Suspense>
      </Canvas>
    </>
  )
}
