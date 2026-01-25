"use client";

import { Suspense, useRef, useLayoutEffect, useEffect, useMemo } from "react";
import type { FC } from "react";

import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  invalidate,
} from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import * as THREE from "three";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableMouseParallax?: boolean;
  enableManualRotation?: boolean;
  enableHoverRotation?: boolean;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?:
    | "city"
    | "sunset"
    | "night"
    | "dawn"
    | "studio"
    | "apartment"
    | "forest"
    | "park"
    | "none";
  autoFrame?: boolean;
  placeholderSrc?: string;
  showScreenshotButton?: boolean;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const deg2rad = (d: number) => (d * Math.PI) / 180;

const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;

/* -------------------------------------------------------------------------- */
/* Loader                                                                     */
/* -------------------------------------------------------------------------- */

const Loader: FC<{ placeholderSrc?: string }> = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;

  return (
    <Html center>
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          width={128}
          height={128}
          className="rounded-lg blur-lg"
        />
      ) : (
        `${Math.round(progress)} %`
      )}
    </Html>
  );
};

/* -------------------------------------------------------------------------- */
/* Desktop Controls                                                           */
/* -------------------------------------------------------------------------- */

const DesktopControls: FC<{
  pivot: THREE.Vector3;
  min: number;
  max: number;
  zoomEnabled: boolean;
}> = ({ pivot, min, max }) => {
  const ref = useRef<any>(null);
  useFrame(() => ref.current?.target.copy(pivot));

  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={false}
      minDistance={min}
      maxDistance={max}
    />
  );
};

/* -------------------------------------------------------------------------- */
/* Model                                                                      */
/* -------------------------------------------------------------------------- */

interface ModelInnerProps {
  url: string;
  xOff: number;
  yOff: number;
  pivot: THREE.Vector3;
  initYaw: number;
  initPitch: number;
  minZoom: number;
  maxZoom: number;
  enableManualRotation: boolean;
  autoFrame: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  onLoaded?: () => void;
}

const ModelInner: FC<ModelInnerProps> = ({
  url,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableManualRotation,
  autoFrame,
  autoRotate,
  autoRotateSpeed,
  onLoaded,
}) => {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split(".").pop()!.toLowerCase(), [url]);

  const content = useMemo<THREE.Object3D | null>(() => {
    if (ext === "glb" || ext === "gltf") return useGLTF(url).scene.clone();
    if (ext === "fbx") return useFBX(url).clone();
    if (ext === "obj") return useLoader(OBJLoader, url).clone();
    console.error("Unsupported format:", ext);
    return null;
  }, [url, ext]);

  useLayoutEffect(() => {
    if (!content) return;

    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3()
      .setFromObject(g)
      .getBoundingSphere(new THREE.Sphere());

    const scale = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(scale);

    pivot.set(0, 0, 0);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (autoFrame && (camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const cam = camera as THREE.PerspectiveCamera;
      const d =
        (sphere.radius * scale * 1.4) / Math.sin((cam.fov * Math.PI) / 180 / 2);

      cam.position.set(0, 0, THREE.MathUtils.clamp(d, minZoom, maxZoom));
      cam.near = d / 10;
      cam.far = d * 10;
      cam.updateProjectionMatrix();
    }

    onLoaded?.();
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;

    const el = gl.domElement;
    let dragging = false;
    let lx = 0,
      ly = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener("pointerup", up);
    };

    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };

    const up = () => (dragging = false);

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);

    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl, enableManualRotation]);

  useFrame((_, dt) => {
    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;

    invalidate();
  });

  if (!content) return null;

  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

/* -------------------------------------------------------------------------- */
/* Viewer                                                                     */
/* -------------------------------------------------------------------------- */

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = "100%",
  height = "100%",
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 3,
  minZoomDistance = 0.6,
  maxZoomDistance = 10,
  enableManualRotation = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = "forest",
  autoFrame = true,
  placeholderSrc,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded,
}) => {
  const pivot = useRef(new THREE.Vector3()).current;

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);

  return (
    <div className="relative w-full h-full" style={{ width, height }}>
      <Canvas
        className="w-full h-full"
        shadows
        frameloop="demand"
        camera={{ fov: 45, position: [0, 0, defaultZoom] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        {environmentPreset !== "none" && (
          <Environment preset={environmentPreset as any} />
        )}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[5, 5, 5]} intensity={keyLightIntensity} />
        <directionalLight
          position={[-5, 2, 5]}
          intensity={fillLightIntensity}
        />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows
          position={[0, -0.6, 0]}
          opacity={0.35}
          scale={12}
          blur={2}
        />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={0}
            yOff={0}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableManualRotation={enableManualRotation}
            autoFrame={autoFrame}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={minZoomDistance}
            max={maxZoomDistance}
            zoomEnabled
          />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
