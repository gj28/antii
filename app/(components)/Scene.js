import { MeshDistortMaterial, useCubeTexture, useTexture } from '@react-three/drei';
import React, { useState, useEffect } from 'react'
import Instances from './Instances';

function Scene() {
    const bumpMap = useTexture("/bump.jpg");
    const envMap = useCubeTexture(
      ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
      { path: "/cube/" }
    );
    const [material, setMaterial] = useState(null); // Initialize material state

    useEffect(() => {
        if (bumpMap && envMap) {
            setMaterial({
                bumpMap,
                envMap,
                color: "#010101",
                roughness: 0.1,
                metalness: 1,
                bumpScale: 0.005,
                clearcoat: 1,
                clearcoatRoughness: 1,
                radius: 1,
                distort: 0.4,
            });
        }
    }, [bumpMap, envMap]); // Set material when bumpMap and envMap are ready

    return (
      <>
        {material && (
          <MeshDistortMaterial
            {...material} // Spread the material properties
          />
        )}
        {material && <Instances material={material} />}
      </>
    );
}

export default Scene
