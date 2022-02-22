import styled from "styled-components";

export default function TextSection() {
	return (
		<Wrapper>
			<Title>Top Watch</Title>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	max-width: 600px;
	display: grid;
	text-align: center;
	margin: 0 auto;
`;

const Title = styled.h2`
	color: rgba(255, 255, 255, 1);
	font-family: "Courier New", Courier, monospace;
	font-size: 80px;
	font-weight: 400;
`;
