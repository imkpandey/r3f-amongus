import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./App.css";
import { Background } from "./components/Background";
import { Environment, Text } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Particles } from "./components/Particles";

function ScrollAnimation() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });

  return <Particles />;
}

function App({ count = 20, depth = 80 }) {
  return (
    <>
      <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 100, fov: 30 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <Environment preset="dawn" />
          <ScrollAnimation />
          {Array.from({ length: count }, (_, i) => (
            <Background key={i} scale={0.06} z={-(i / count) * depth - 15} />
          ))}
          <EffectComposer>
            <DepthOfField
              target={[0, 0, depth / 2]}
              focalLength={1}
              bokehScale={1}
              height={700}
            />
          </EffectComposer>
          <Text
            position={[0, 0, -depth / 3]}
            font="/bangers-v20-latin-regular.woff"
            scale={1.2}
          >
            Remebering the crewmates
          </Text>
          <Text
            position={[0, -1, -depth / 3]}
            scale={0.5}
            font="/bangers-v20-latin-regular.woff"
            color="#A9A9A9"
          >
            May they forever float among the stars, free from accusations and
            emergency meetings. Rest In Pixels
          </Text>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
