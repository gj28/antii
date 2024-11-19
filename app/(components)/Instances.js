import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react'
import MainSphere from './MainSphere';
import { Icosahedron } from '@react-three/drei';

function Instances({ material }) {
  
 // we use this array ref to store the spheres after creating them
 const [sphereRefs] = useState(() => []);
 // we use this array to initialize the background spheres
 const initialPositions = [
   [-4, 20, -12],
   [-10, 12, -4],
   [-11, -12, -23],
   [-16, -6, -10],
   [12, -2, -3],
   [13, 4, -12],
   [14, -2, -23],
   [8, 10, -20]
 ];
 // smaller spheres movement
 useFrame(() => {
   // animate each sphere in the array
   sphereRefs.forEach((el) => {
     el.position.y += 0.02;
     if (el.position.y > 19) el.position.y = -18;
     el.rotation.x += 0.06;
     el.rotation.y += 0.06;
     el.rotation.z += 0.02;
   });
 });
 return (
   <>
     <MainSphere material={material} />
     {initialPositions.map((pos, i) => (
       <Icosahedron
         args={[1, 4]}
         position={[pos[0], pos[1], pos[2]]}
         material={material}
         key={i}
         ref={(ref) => (sphereRefs[i] = ref)}
       />
     ))}
   </>
 );
}

export default Instances