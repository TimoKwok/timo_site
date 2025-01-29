import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('models/desk.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.129, 1.126, -0.31]} rotation={[1.295, -0.021, 0.074]} scale={[0.384, 0.263, 0.263]}>
        <mesh geometry={nodes.Mesh002.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Mesh002_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Mesh002_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/desk.glb')