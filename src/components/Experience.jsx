import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position={[1,-2,0]}>
        <Avatar />
      </group>
      <ambientLight intensity={3}/>
    </>
  );
};
