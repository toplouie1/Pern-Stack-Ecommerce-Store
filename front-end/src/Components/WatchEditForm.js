import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css";
import { Button } from "@mui/material";

// import TextField from "@material-ui/core/TextField";

const API = process.env.REACT_APP_API_URL;

function WatchEditForm() {
	const { id } = useParams();
	let navigate = useNavigate();

	const [watch, setWatch] = useState({
		name: "",
		description: "",
		rating: "",
		image: "",
		featured: "",
		price: "",
	});

	const updateWatch = (updatedWatch) => {
		axios
			.put(`${API}/watches/${id}`, updatedWatch)
			.then(
				() => {
					navigate(`/watches`);
				},
				(error) => console.error(error)
			)
			.catch((c) => console.warn("catch", c));
	};

	const handleTextChange = (event) => {
		setWatch({ ...watch, [event.target.id]: event.target.value });
	};
	const handleCheckboxChange = () => {
		setWatch({ ...watch, featured: !watch.featured });
	};

	useEffect(() => {
		axios
			.get(`${API}/watches/${id}`)
			.then(
				(res) => {
					setWatch(res.data);
				},
				(error) => navigate(`not-found`)
			)
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		updateWatch(watch, id);
		navigate("/watches");
	};

	return (
		<div className="newForm">
			<h1>Edit Watch</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						id="name"
						type="text"
						value={watch.name}
						onChange={handleTextChange}
						required
					/>
				</div>
				<div>
					<input
						id="description"
						type="text"
						value={watch.description}
						onChange={handleTextChange}
						required
					/>
				</div>
				<div>
					<input
						id="image"
						type="text"
						value={watch.image}
						onChange={handleTextChange}
					/>
				</div>
				<div>
					<input
						id="rating"
						type="number"
						value={watch.rating}
						onChange={handleTextChange}
					/>
				</div>
				<div>
					<input
						id="price"
						type="number"
						value={watch.price}
						onChange={handleTextChange}
					/>
				</div>
				<div>
					<div>
						<label htmlFor="featured">Featured</label>
					</div>
					<input
						id="featured"
						type="checkbox"
						onChange={handleCheckboxChange}
						checked={watch.featured}
					/>
				</div>
				<br />
				<Button type="submit" variant="outlined">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default WatchEditForm;
