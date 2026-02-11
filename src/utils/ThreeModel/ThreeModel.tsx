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
            dpr={[1, 2]}
            gl={{ antialias: true }}
        >
            <Suspense fallback={null}>
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
                    position={[0, -0.4, 0]}
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
                    minDistance={2}
                    maxDistance={5}
                />
            </Suspense>
        </Canvas>
    );
};

export default ThreeModel;