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
          defaultZoom={2.2}
          minZoomDistance={1.4}
          maxZoomDistance={4}
          modelXOffset={0} // center horizontally
          modelYOffset={-0.2}
          autoFrame={true}
          enableMouseParallax
          enableHoverRotation
          environmentPreset="park"
          fadeIn={true}
          autoRotate={true}
          enableManualZoom={false}
          autoRotateSpeed={0.35}
          modelScale={0.45}
        />
      </div>
    </section>
  );
};

export default ThreeDHero;
