import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, memo } from "react";

useGLTF.preload("/RobotExpressive.glb");

const Model = memo(() => {
  const { scene } = useGLTF("/RobotExpressive.glb");

  return (
    <primitive object={scene} scale={0.22} castShadow position={[0, -0.4, 0]} />
  );
});

Model.displayName = "Model";

const ThreeModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 3], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      frameloop="always"
      style={{ pointerEvents: "auto" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[2, 10, -2]}
          intensity={1}
          castShadow
          shadow-mapSize={[512, 512]}
          shadow-bias={-0.0001}
        />

        <ContactShadows
          frames={1}
          position={[0, -0.4, 0]}
          scale={10}
          opacity={0.4}
          blur={2}
          color="#000"
        />

        <Model />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.8}
          minDistance={2}
          maxDistance={5}
          makeDefault
        />
      </Suspense>
    </Canvas>
  );
};

export default memo(ThreeModel);
