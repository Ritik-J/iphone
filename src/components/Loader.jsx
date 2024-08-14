import { Html } from "@react-three/drei";
import { useState } from "react";
import { FadeLoader } from "react-spinners";

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          <FadeLoader color={color} loading={loading} />
        </div>
      </div>
    </Html>
  );
}

export default Loader;
