"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Container from "./(components)/ChatbotComponents/Container";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Html, ScrollControls, useGLTF } from "@react-three/drei";
import HomeContent from "./(components)/HomeContent";
import Scene from "./(components)/Scene";

export default function Home() {
  // const { scene } = useGLTF("/models/shield.glb");

  return (
    <>
      <Canvas
        className="fixed z-0"
        camera={{ position: [0, 0, 3] }}
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <color attach="background" args={["#050505"]} />
        <fog color="#161616" attach="fog" near={8} far={30} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <ScrollControls damping={0.1} pages={5.5}>
            <HomeContent />
            <Scene />
          </ScrollControls>
        </Suspense>
        
        {/* Improved lighting setup */}
        <ambientLight intensity={4} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, -5]} intensity={2} />

        <EffectComposer multisampling={0} disableNormalPass={true}>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
            opacity={3}
          />
          <Noise opacity={0.025} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
      <Container/>
    </>
  );
}


