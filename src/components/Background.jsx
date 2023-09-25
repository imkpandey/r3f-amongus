import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function Background({ scale, z }) {
  const ref = useRef();
  const body = useRef();
  const { nodes, materials } = useGLTF("/scene-transformed.glb");
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "purple",
    "brown",
    "cyan",
    "maroon",
    "lime",
  ];

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.002),
      (data.rY += 0.003),
      (data.rZ += 0.004)
    );
    ref.current.position.set(data.x * width, (data.y += 0.04), z);
    if (data.y > height) {
      data.y = -height;
    }
  });
  return (
    <>
      <group ref={ref} scale={scale} dispose={null}>
        <mesh
          ref={body}
          geometry={nodes.Cube_personnage_0.geometry}
          material={materials.personnage}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.156}
        >
          <meshStandardMaterial color={colors[Math.floor(Math.random() * colors.length)]} />
        </mesh>
        <mesh
          geometry={nodes.Cube_pourtour_0.geometry}
          material={materials.pourtour}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.156}
        />
        <mesh
          geometry={nodes.Cube_ecran_0.geometry}
          material={materials.ecran}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.156}
        />
      </group>
    </>
  );
}
