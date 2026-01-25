"use client";
import ModelViewer from "@/components/ModelViewer";

const ThreeDHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-950 to-neutral-900" />

      <div className="relative h-full w-full">
        <ModelViewer
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb"
          environmentPreset="forest"
          /* 🎯 LOCK POSITION */
          modelXOffset={0}
          modelYOffset={0}
          enableMouseParallax={false}
          enableHoverRotation={false}
          /* 🚫 DISABLE INTERACTION */
          enableManualRotation={false}
          enableManualZoom={false}
          /* 🎥 HERO MOTION */
          autoRotate
          autoRotateSpeed={0.35}
          showScreenshotButton={false}
          autoFrame
        />
      </div>
    </section>
  );
};

export default ThreeDHero;
