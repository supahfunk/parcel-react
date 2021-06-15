import { useGLTF } from '@react-three/drei'

export default function Model() {
  const { nodes } = useGLTF('./suzanne.glb')

  return (
    <group dispose={null}>
      <mesh geometry={nodes.Suzanne.geometry} material={nodes.Suzanne.material} />
    </group>
  )
}

useGLTF.preload('./suzanne.glb')
