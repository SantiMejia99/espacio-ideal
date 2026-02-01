"use client";

import { Suspense, useRef, useMemo, useEffect } from "react";
import type { FC } from "react";
import * as THREE from "three";

import { Canvas, useFrame, invalidate, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
  Center,
  Resize,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */
export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableManualRotation?: boolean;
  enableManualZoom?: boolean;
  environmentPreset?:
    | "city"
    | "forest"
    | "studio"
    | "apartment"
    | "park"
    | "lobby"
    | "none";
  placeholderSrc?: string;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  // --- New Props ---
  scale?: number;
  position?: [number, number, number];
  cameraPosition?: [number, number, number];
}

const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

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
          alt="loading placeholder"
        />
      ) : (
        <div className="text-white text-sm font-mono">
          {Math.round(progress)}%
        </div>
      )}
    </Html>
  );
};

/* -------------------------------------------------------------------------- */
/* Model Component                                                            */
/* -------------------------------------------------------------------------- */
interface ModelInnerProps {
  url: string;
  enableManualRotation: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  scale: number;
  position: [number, number, number];
}

const ModelInner: FC<ModelInnerProps> = ({
  url,
  enableManualRotation,
  autoRotate,
  autoRotateSpeed,
  scale,
  position,
}) => {
  const outer = useRef<THREE.Group>(null!);
  const { gl } = useThree();
  const vel = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split(".").pop()!.toLowerCase(), [url]);
  const content = useMemo(() => {
    if (ext === "glb" || ext === "gltf") return useGLTF(url).scene.clone();
    if (ext === "fbx") return useFBX(url).clone();
    // @ts-ignore
    if (ext === "obj") return useLoader(OBJLoader, url).clone();
    return null;
  }, [url, ext]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let dragging = false;
    let lx = 0,
      ly = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragging = true;
      lx = e.clientX;
      ly = e.clientY;
      el.style.cursor = "grabbing";
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

    const up = () => {
      dragging = false;
      el.style.cursor = "grab";
      window.removeEventListener("pointerup", up);
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl, enableManualRotation]);

  useFrame((_, dt) => {
    if (!outer.current) return;

    // FIX 1: Trigger re-render (invalidate) when auto-rotating
    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      invalidate();
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;

    if (Math.abs(vel.current.x) > 0.001 || Math.abs(vel.current.y) > 0.001)
      invalidate();
  });

  if (!content) return null;

  return (
    <group ref={outer} position={position}>
      <group scale={scale}>
        <Resize>
          <Center top>
            <primitive object={content} />
          </Center>
        </Resize>
      </group>
    </group>
  );
};

/* -------------------------------------------------------------------------- */
/* Main Viewer                                                                */
/* -------------------------------------------------------------------------- */
const ModelViewer: FC<ViewerProps> = ({
  url,
  width = "100%",
  height = "100%",
  defaultZoom = 2.5,
  minZoomDistance = 1,
  maxZoomDistance = 15,
  enableManualRotation = true,
  enableManualZoom = true,
  environmentPreset = "forest",
  placeholderSrc,
  autoRotate = false,
  autoRotateSpeed = 0.5,
  scale = 2.5,
  position = [0, 0, 0],
  cameraPosition,
}) => {
  return (
    <div className="relative w-full h-full" style={{ width, height }}>
      <Canvas
        className="w-full h-full touch-none"
        shadows
        frameloop="demand"
        camera={{ fov: 45, position: cameraPosition || [0, 0, defaultZoom] }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          {environmentPreset !== "none" && (
            <Environment preset={environmentPreset as any} />
          )}

          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

          <ModelInner
            url={url}
            enableManualRotation={enableManualRotation}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            scale={scale}
            position={position}
          />

          {/* FIX 2: Move ContactShadows down by the same Y amount as the object */}
          <ContactShadows
            position={[0, position[1], 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />

          {!isTouch && (
            <OrbitControls
              makeDefault
              enablePan={false}
              enableRotate={false}
              enableZoom={enableManualZoom}
              minDistance={minZoomDistance}
              maxDistance={maxZoomDistance}
              target={[0, 0, 0]}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
