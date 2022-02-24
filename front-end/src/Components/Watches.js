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

	const allwatches = watches.map((e) => {
		return (
			<article key={e.id}>
				<div>
					<img className="mainImg" src={e.image} alt={e.name} />
					<div className="priceName">
						<h4>{e.name}</h4>
						<h4>${e.price}</h4>
					</div>

					<Button className="watchBtn" size="small" variant="outlined">
						<Link to={`/watches/${e.id}`}>View</Link>
					</Button>

					<Button
						onClick={() =>
							handleAddProduct(watches.find((watch) => watch.id === e.id))
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
