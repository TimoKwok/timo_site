import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Waver } from "./Waver";

export const Experience = () => {
  return (
    <>
      <group position={[-2,0,2]}>
        <Avatar />
      </group>
      <group position={[2,-1,1] }>
        <Waver />
      </group>
      <ambientLight intensity={3} color={"#ffedf5"}/>
      <directionalLight 
        position={[-1, 4, 3]} 
        intensity={2} 
        castShadow
        color={"#ffe0b3"}
      />
    </>
  );
};
