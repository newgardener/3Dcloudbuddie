import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

import type { Group, Object3D, Object3DEventMap } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function CloudBuddie() {
  const loader = new GLTFLoader();

  useEffect(() => {
    loader.load(
      "models/buddie.glb",
      function (gltf) {
        gltf.scene;
        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log("ERROR", error);
      }
    );
  }, []);

  return (
    <Canvas
      shadows
      gl={{ antialias: false }}
      camera={{ position: [0, 0.5, 2.5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
    </Canvas>
  );
}

export default CloudBuddie;
