import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function TextSection() {
	return (
		<Wrapper>
			<div>
				<Title className="theTitle">Top Watch</Title>
			</div>
			<Button
				size="small"
				variant="outlined"
				style={{
					margin: "10px",
				}}
			>
				<Link style={{ color: "white" }} to="/watches">
					View All
				</Link>
			</Button>
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
