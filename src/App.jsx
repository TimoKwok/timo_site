import { Canvas } from "@react-three/fiber";
import { NavBar } from "./components/NavBar";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <NavBar />
      <Canvas shadows camera={{ position: [0, 3, 9], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;

