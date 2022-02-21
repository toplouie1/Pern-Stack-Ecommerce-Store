import React from "react";
import { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import TextSection from "./TextSection";
import AnimatedSphere from "./AnimatedSphere";

export default function Home() {
	return (
		<Wrapper>
			<TextSection />
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
	position: relative;
	background: #000;

	canvas {
		height: 1000px;
	}
`;
