"use client";
import ModelViewer from "@/components/ModelViewer";
import { useGLTF } from "@react-three/drei";

const MODEL_URL =
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb";

useGLTF.preload(MODEL_URL);

const ThreeDHero = () => {
  return (
    <section className="relative h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-950 to-neutral-900" />

      {/* Model container */}
      <div className="relative h-full w-full flex items-center justify-center">
        <ModelViewer
          url={MODEL_URL}
          environmentPreset="forest"
          enableManualRotation={false}
          enableManualZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          scale={1.2}
          position={[0, -0.4, 0]}
          cameraPosition={[0, 0, 6]}
        />

        {/* scroll layer */}
        <div
          className="absolute inset-0 z-10 bg-transparent touch-pan-y pointer-events-auto"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ThreeDHero;
