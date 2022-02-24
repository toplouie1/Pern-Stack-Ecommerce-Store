import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Watches.css";
import Button from "@mui/material/Button";

const API = process.env.REACT_APP_API_URL;

function Watches({ handleAddProduct }) {
	const [watches, setWatches] = useState([]);
	useEffect(() => {
		axios
			.get(API + "/watches")
			.then((res) => {
				setWatches(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const allwatches = watches.map((each) => {
		return (
			<article key={each.id}>
				<div>
					<img className="mainImg" src={each.image} alt={each.name} />
					<div className="priceName">
						<h4>{each.name}</h4>
						<h4>${each.price}</h4>
					</div>
					<Button className="watchBtn" size="small" variant="outlined">
						<Link to={`/watches/${each.id}`}>View</Link>
					</Button>
					<Button
						onClick={() =>
							handleAddProduct(watches.find((watch) => watch.id === each.id))
						}
						className="watchBtn"
						size="small"
						variant="outlined"
						style={{ color: "black" }}
					>
						Add to Cart
					</Button>
				</div>
			</article>
		);
	});

	return <main className="mainWatches">{allwatches}</main>;
}

export default Watches;
