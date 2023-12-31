/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\scene.gltf --transform 
Files: .\scene.gltf [9.71KB] > scene-transformed.glb [47.88KB] (-393%)
Author: Ḍ̸̈ē̵̺m̸͕̓ọ̷͗n̴̬̅B̴̝̆u̶̞̅ṇ̴͌ñ̵̳y̷͚̕B̸̝̌ò̷̟i̷ (https://sketchfab.com/DemonBunnyBoi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/among-us-485a43f24624415e939247c218ac4a25
Title: Among us
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube_personnage_0.geometry} material={materials.personnage} rotation={[-Math.PI / 2, 0, 0]} scale={8.156} />
      <mesh geometry={nodes.Cube_pourtour_0.geometry} material={materials.pourtour} rotation={[-Math.PI / 2, 0, 0]} scale={8.156} />
      <mesh geometry={nodes.Cube_ecran_0.geometry} material={materials.ecran} rotation={[-Math.PI / 2, 0, 0]} scale={8.156} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
