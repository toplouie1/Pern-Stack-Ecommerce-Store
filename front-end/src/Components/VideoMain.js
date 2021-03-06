import React from "react";
import WatchBack from "./img/main.mp4";

function VideoMain() {
	return (
		<div>
			{" "}
			<video
				autoPlay
				loop
				muted
				style={{
					position: "relative",
					width: "100%",
					left: "50%",
					top: "50%",
					height: "100%",
					objectFit: "cover",
					transform: "translate(-50%, -0%)",
					zIndex: "1",
				}}
			>
				<source src={WatchBack} />
			</video>
			<div className="headerAll">
				<h2>Top Watch</h2>
				<h3>BEST OF THE BEST</h3>
			</div>
		</div>
	);
}

export default VideoMain;
