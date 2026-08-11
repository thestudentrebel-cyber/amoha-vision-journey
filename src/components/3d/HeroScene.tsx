import { Canvas } from "@react-three/fiber";
import { ProductModel } from "./ProductModel";
import { BotanicalParticles } from "./BotanicalParticles";
import { SceneLighting } from "./SceneLighting";

export default function HeroScene({
  progress,
  pointer,
  isMobile,
  reducedMotion,
}: {
  progress: number;
  pointer: { x: number; y: number };
  isMobile: boolean;
  reducedMotion: boolean;
}) {
  const camZ = 6.4 - Math.min(progress / 0.3, 1) * 1.4 + Math.max(0, progress - 0.35) * 4;

  return (
    <Canvas
      dpr={isMobile ? [1, 1.3] : [1, 1.8]}
      gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6.4], fov: 38 }}
      onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      frameloop={reducedMotion ? "demand" : "always"}
    >
      <CameraRig z={camZ} pointer={pointer} reducedMotion={reducedMotion} />
      <SceneLighting progress={progress} />
      <group position={isMobile ? [0, 0.5, 0] : [1.7, 0.1, 0]} scale={isMobile ? 0.6 : 0.78}>
        <ProductModel progress={progress} pointer={pointer} reducedMotion={reducedMotion} />
      </group>
      <BotanicalParticles count={isMobile ? 120 : 420} reducedMotion={reducedMotion} />
    </Canvas>
  );
}

import { useFrame, useThree } from "@react-three/fiber";

function CameraRig({
  z,
  pointer,
  reducedMotion,
}: {
  z: number;
  pointer: { x: number; y: number };
  reducedMotion: boolean;
}) {
  const { camera } = useThree();
  useFrame(() => {
    const tx = reducedMotion ? 0 : pointer.x * 0.22;
    const ty = reducedMotion ? 0 : -pointer.y * 0.16;
    camera.position.x += (tx - camera.position.x) * 0.05;
    camera.position.y += (ty - camera.position.y) * 0.05;
    camera.position.z += (z - camera.position.z) * 0.06;
    camera.lookAt(0, 0, 0);
  });
  return null;
}
