import { OrbitControls, View } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IphoneModel from "./IphoneModel";
import * as THREE from "three";
import Loader from "./Loader";

function ModelView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) {
  return (
    <View
      className={` w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      }`}
      index={index}
      id={gsapType}
    >
      {/* Ambient light: which lights up all the objects in the secene equally */}

      <ambientLight intensity={0.3} />

      {/* setting up camera */}
      <perspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? "small" : "large" `}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IphoneModel
            scale={index === 1 ? [20, 20, 20] : [25, 25, 25]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
}

export default ModelView;
