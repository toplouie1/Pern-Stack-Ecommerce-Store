import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box() {
	const ref = useRef();

	useFrame((state, delta) => (ref.current.rotation.x += 0.01));
	return (
		<mesh ref={ref} rotation={[90, 0, 20]}>
			<boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
			<meshNormalMaterial attach="material" />
		</mesh>
	);
}
