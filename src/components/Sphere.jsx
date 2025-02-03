import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";


export function Sphere(props){
  
  //use this for making stuff random
  const { count, shape } = props;

  //using this to add some randomness maybe?
  
  
  // This reference gives us direct access to our points
  const points = useRef();
  // generate attributes arrays:
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "sphere") {
        const distance = 1;
       
        for (let i = 0; i < count; i++) {
          const theta = THREE.MathUtils.randFloatSpread(360); 
          const phi = THREE.MathUtils.randFloatSpread(360); 
  
          let x = distance * Math.sin(theta) * Math.cos(phi)
          let y = distance * Math.sin(theta) * Math.sin(phi);
          let z = distance * Math.cos(theta);
  
          positions.set([x, y, z], i * 3);
        }
      }
      return positions;
    }, [count, shape]);


    ///rotate points
    useFrame(() => {
       if (points.current) {
            points.current.rotation.y += 0.0003; // Rotate around the Y-axis
            points.current.rotation.z += 0.0007;
        }
        });

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points} scale={[10,10,10]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.04} 
        color="#eeabff" 
        sizeAttenuation 
        depthWrite={false} 
        emissive="#eeabff"  
        emissiveIntensity={10}
      
      />
    </points>
  );
};

