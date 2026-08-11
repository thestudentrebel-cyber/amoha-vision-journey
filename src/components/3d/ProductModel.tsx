import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Neutral, unbranded product placeholder.
 * Replace by dropping a GLB at /public/models/product.glb and loading it here
 * with useGLTF — the animation props below stay identical.
 */
export function ProductModel({
  progress,
  pointer,
  reducedMotion,
}: {
  progress: number;
  pointer: { x: number; y: number };
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  const profile = (() => {
    const pts: THREE.Vector2[] = [];
    const shape: [number, number][] = [
      [0, -1.15],
      [0.52, -1.15],
      [0.56, -0.95],
      [0.56, 0.25],
      [0.5, 0.5],
      [0.22, 0.72],
      [0.2, 1.02],
      [0.28, 1.06],
      [0.28, 1.3],
      [0, 1.3],
    ];
    shape.forEach(([x, y]) => pts.push(new THREE.Vector2(x, y)));
    return pts;
  })();

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const float = reducedMotion ? 0 : Math.sin(t * 0.6) * 0.06;
    const targetRotY = progress * Math.PI * 1.1 + (reducedMotion ? 0 : pointer.x * 0.18);
    g.rotation.y += (targetRotY - g.rotation.y) * 0.06;
    g.rotation.x += (pointer.y * 0.06 - g.rotation.x) * 0.05;
    g.position.y += (float + Math.min(progress, 0.4) * -0.4 - g.position.y) * 0.08;
    const scale = 1 + Math.min(progress / 0.3, 1) * 0.22 - Math.max(0, progress - 0.35) * 0.9;
    const s = Math.max(0.05, scale);
    g.scale.setScalar(s);
  });

  return (
    <group ref={group}>
      <mesh castShadow>
        <latheGeometry args={[profile, 96]} />
        <meshPhysicalMaterial
          color="#f3ede3"
          roughness={0.25}
          metalness={0.05}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          transmission={0.15}
          thickness={0.6}
        />
      </mesh>
      <mesh position={[0, 1.34, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.16, 64]} />
        <meshStandardMaterial color="#2f2b28" roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
}
