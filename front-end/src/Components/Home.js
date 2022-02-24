import React from "react";
import { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import TextSection from "./TextSection";

import Footer from "./footer";
import { OrbitControls } from "@react-three/drei";

import Box from "./Box";

export default function Home() {
	return (
		<Wrapper>
			<TextSection />
			<Canvas clasName="canvas">
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} />
				<Suspense fallback={null}>
					<Box />
				</Suspense>
			</Canvas>
			<Footer />
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
