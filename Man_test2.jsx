/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/man_test2.glb 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('/man_test2.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={2.174}>
        <primitive object={nodes.spine} />
        <skinnedMesh geometry={nodes.Cube061.geometry} material={materials['Material.010']} skeleton={nodes.Cube061.skeleton} />
        <skinnedMesh geometry={nodes.Cube061_1.geometry} material={materials['Material.013']} skeleton={nodes.Cube061_1.skeleton} />
        <skinnedMesh geometry={nodes.Cube061_2.geometry} material={materials['Material.006']} skeleton={nodes.Cube061_2.skeleton} />
        <skinnedMesh geometry={nodes.Cube061_3.geometry} material={materials['Material.009']} skeleton={nodes.Cube061_3.skeleton} />
        <skinnedMesh geometry={nodes.Cube061_4.geometry} material={materials['Material.011']} skeleton={nodes.Cube061_4.skeleton} />
        <skinnedMesh geometry={nodes.Cube061_5.geometry} material={materials['Material.012']} skeleton={nodes.Cube061_5.skeleton} />
        <skinnedMesh geometry={nodes.Cube061_6.geometry} material={materials['Material.004']} skeleton={nodes.Cube061_6.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/man_test2.glb')