import { VRButton, XR, Controllers, Interactive } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import CubeSimple from "./models/CubeSimple";
import CubeComplex from "./models/CubeComplex";
import { useState } from "react";

function App() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <ambientLight />
          <pointLight position={[0, 3, 0]} />

          <Interactive onHover={() => setHover1(true)} onBlur={() => setHover1(false)}>
            <CubeSimple position={[-3, 1, -6]} scale={hover1 ? 1.1 : 1} />
          </Interactive>
          <Interactive onHover={() => setHover2(true)} onBlur={() => setHover2(false)}>
            <CubeComplex position={[3, 1, -6]} scale={hover2 ? 1.1 : 1} />
          </Interactive>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
