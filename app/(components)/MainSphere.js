import { Float, useGLTF, useScroll } from "@react-three/drei";
import { motion } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import React, { useRef,  } from "react";

function MainSphere({ material }) {
  const scroll = useScroll();
  const main = useRef();
  const { scene } = useGLTF("/models/shield.glb");


  useFrame(() => {
    let scrollY = scroll.offset * 100;
    if (scrollY <= 20) main.current.position.x = Math.min(scrollY * 0.2, 3);
    if (scrollY > 20 && scrollY < 40)
      main.current.position.x = Math.max(3 - (scrollY - 20) * 0.15, 0);
    if (scrollY > 40 && scrollY < 60)
      main.current.position.x = Math.max(0 - (scrollY - 40) * 1.6, -8);
    if (scrollY > 60)
      main.current.position.x = Math.min(-8 + (scrollY - 60) * 0.2, -3);
  });

 

  // main sphere rotates following the mouse position

  return (
    <>
    <Float>
    <motion.primitive
      ref={main}
      object={scene}
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
    >
    </motion.primitive>

    </Float>
    </>
  );
}

export default MainSphere;
