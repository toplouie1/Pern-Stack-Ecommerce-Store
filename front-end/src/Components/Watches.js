import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Watches.css";

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
		<main className="mainWatches">
			{watches.map((e) => {
				return (
					<article key={e.id}>
						<div>
							<img className="mainImg" src={e.image} alt={e.name} />
							<h4>{e.name}</h4>
							<h4>Price: ${e.price}</h4>
							<button className="watchBtn">
								<Link to={`/watches/${e.id}`}>View</Link>
							</button>
						</div>
					</article>
				);
			})}
		</main>
	);
}

export default Watches;
