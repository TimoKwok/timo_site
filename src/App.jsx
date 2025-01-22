import { Canvas } from "@react-three/fiber";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Jobs } from "./components/Jobs";
import { Experience } from "./components/Experience";

function App() {
  return (
    <main className="max-w-9xl mx-auto">
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Jobs/>
    </main>

  );
}

export default App;

/*
      <Canvas shadows camera={{ position: [0, 3, 9], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>

*/