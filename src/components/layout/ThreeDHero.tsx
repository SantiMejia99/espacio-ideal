"use client";
import ModelViewer from "@/components/ModelViewer";
import { useGLTF } from "@react-three/drei";

// 1. Define URL as a constant
const MODEL_URL =
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb";

// 2. Preload the model
useGLTF.preload(MODEL_URL);

const ThreeDHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-950 to-neutral-900" />

      {/* Added flex, items-center, and justify-center to ensure the canvas container is centered */}
      <div className="relative h-full w-full flex items-center justify-center">
        <ModelViewer
          url={MODEL_URL}
          environmentPreset="forest"
          enableManualRotation={true}
          enableManualZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          scale={1.2}
          position={[0, -0.6, 0]}
          cameraPosition={[0, 0, 6]}
        />
      </div>
    </section>
  );
};

export default ThreeDHero;
