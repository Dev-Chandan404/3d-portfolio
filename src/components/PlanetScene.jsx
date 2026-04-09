// src/components/PlanetScene.jsx
import { Canvas } from "@react-three/fiber";
import { Planet } from "./Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

// Preload the model as soon as this module loads (optional)
import { useGLTF } from "@react-three/drei";
useGLTF.preload('/models/Planet.glb');

const PlanetScene = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <Canvas
      shadows={!isMobile}
      camera={{ position: [0, 0, -10], fov: isMobile ? 20 : 17.5 }}
      dpr={isMobile ? [0.5, 1.5] : [1, 2]}
    >
      <ambientLight intensity={isMobile ? 0.8 : 0.5} />
      <Float speed={0.5} floatIntensity={isMobile ? 0.3 : 1}>
        <Planet scale={isMobile ? 0.5 : 1} />
      </Float>
      <Environment resolution={isMobile ? 64 : 256}>
        <group rotation={[-Math.PI / 3, 4, 1]}>
          {isMobile ? (
            <Lightformer form="circle" intensity={1.2} position={[0, 5, -9]} scale={6} />
          ) : (
            <>
              <Lightformer form="circle" intensity={2} position={[0, 5, -9]} scale={10} />
              <Lightformer form="circle" intensity={2} position={[0, 3, 1]} scale={10} />
              <Lightformer form="circle" intensity={2} position={[-5, -1, -1]} scale={10} />
              <Lightformer form="circle" intensity={2} position={[10, 1, 0]} scale={16} />
            </>
          )}
        </group>
      </Environment>
    </Canvas>
  );
};

export default PlanetScene;