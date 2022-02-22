import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Watches.css";
import Button from "@mui/material/Button";

const API = process.env.REACT_APP_API_URL;

function Watches() {
	const [watches, setWatches] = useState([]);
	useEffect(() => {
		axios
			.get(API + "/watches")
			.then((res) => {
				setWatches(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<main className="mainWatches" type="video/mp4">
			{watches.map((e) => {
				return (
					<article key={e.id}>
						<div>
							<img className="mainImg" src={e.image} alt={e.name} />
							<h4>{e.name}</h4>
							<h4>Price: ${e.price}</h4>
							{/* <button className="watchBtn">
								<Link to={`/watches/${e.id}`}>View</Link>
							</button> */}
							<Button className="watchBtn" size="small" variant="outlined">
								<Link to={`/watches/${e.id}`}>View</Link>
							</Button>
						</div>
					</article>
				);
			})}
		</main>
	);
}

export default Watches;
