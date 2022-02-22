import React from "react";
import { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./AnimatedSphere";

export default function AllDetailsBackground() {
	return (
		<Wrapper>
			<Canvas className="canvas">
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} />
				<Suspense fallback={null}>
					<AnimatedSphere />
				</Suspense>
			</Canvas>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	// background: linear-gradient(180deg, #322d6d 6.33%, #663182 39.13%);
	text-align: center;
	// overflow: hidden;
	background: #000;
	z-index: -3;
	canvas {
		height: 1000px;
	}
`;
