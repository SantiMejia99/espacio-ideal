import ModelViewer from "@/components/ModelViewer";

const ThreeDHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-neutral-950 to-neutral-900" />

      {/* 3D Model */}
      <div className="relative h-full w-full">
        <ModelViewer
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb"
          modelXOffset={0.5}
          modelYOffset={0}
          enableMouseParallax
          enableHoverRotation
          environmentPreset="forest"
          fadeIn={false}
          autoRotate={false}
          autoRotateSpeed={0.35}
          showScreenshotButton
        />
      </div>

      {/* Overlay content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-16 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Espacio Ideal
        </h1>
        <p className="mt-2 text-sm md:text-base text-neutral-400">
          Interior design, visualized in 3D
        </p>
      </div>
    </section>
  );
};

export default ThreeDHero;
