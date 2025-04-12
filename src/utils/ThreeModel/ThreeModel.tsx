import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Model = () => {
  const { scene } = useGLTF("/RobotExpressive.glb");
  return <primitive object={scene} scale={0.2} castShadow />;
};

const ThreeModel = () => {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[2, 10, -2]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-near={0.1}
        shadow-bias={-0.001}
      />

      <ContactShadows
        frames={50}
        position={[0, -0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
        opacity={0.8}
        blur={1}
        color="#333"
      />
      <Model />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
};

export default ThreeModel;
