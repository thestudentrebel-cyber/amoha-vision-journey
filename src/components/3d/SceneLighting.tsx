/** Lighting that evolves across the cinematic timeline. */
export function SceneLighting({ progress }: { progress: number }) {
  // key warms slightly as the journey moves from botanical to lab to packaging
  const keyIntensity = 2.2 + Math.sin(progress * Math.PI) * 0.8;
  const rimIntensity = 1.2 + progress * 1.4;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 4]} intensity={keyIntensity} color="#fff6ea" />
      <directionalLight position={[-4, 1, -3]} intensity={rimIntensity} color="#cfe0d2" />
      <pointLight position={[0, -2, 3]} intensity={0.6} color="#ffd9e2" />
    </>
  );
}
