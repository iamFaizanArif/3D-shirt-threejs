import React from 'react';
import {easing} from "maath";
import {useSnapshot} from "valtio";
import {useFrame} from "@react-three/fiber";
import {Decal,useGLTF,useTexture} from "@react-three/drei";
import state from "../store/index.js";
const Shirt = () => {
    const snap =useSnapshot(state);
    const {nodes,materials}=useGLTF("/shirt_baked.glb");
    const logoTexture=useTexture(state?.logoDecal);
    const fullTexture=useTexture(state?.fullDecal);

    // easing to apply color smoothly
    useFrame((state, delta)=>easing?.dampC(materials?.lambert1?.color,snap?.color,0.25,delta));

    // While we're updating the shirt color, sometimes I might not be changing so we will provide a key to group. And that key can be a state.
    // Then react render the model when ever it's changes
    const stateString=JSON.stringify(snap);
    return (
        <group key={stateString}>
            <mesh castShadow
                  geometry={nodes?.T_Shirt_male?.geometry}
                  material={materials?.lambert1}
                  material-roughness={1}
                  dispose={null}>
                {/* This is for changing shirt texture*/}
                {snap.isFullTexture &&(
                    <Decal position={[0,0,0]} rotation={[0,0,0]} scale={1} map={fullTexture}/>
                )}
                {/* This is for changing shirt logo*/}
                {snap.isLogoTexture &&(
                    <Decal position={[0,0.04,0.15]} rotation={[0,0,0]} scale={0.15} map={logoTexture}
                    map-anisotropy={16} depthTest={false} depthWrite={true} />
                )}
            </mesh>
        </group>
    );
};

export default Shirt;
