import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css";

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
					{/* <label htmlFor="name">Name</label> */}
					<input
						id="name"
						type="text"
						value={watch.name}
						onChange={handleTextChange}
						required
					/>
				</div>
				<div>
					{/* <label htmlFor="description">description</label> */}
					<input
						id="description"
						type="text"
						value={watch.description}
						onChange={handleTextChange}
						required
					/>
				</div>
				<div>
					{/* <label htmlFor="image">Image</label> */}
					<input
						id="image"
						type="text"
						value={watch.image}
						onChange={handleTextChange}
					/>
				</div>

				<div>
					{/* <label htmlFor="rating">Rating</label> */}
					<input
						id="rating"
						type="number"
						value={watch.rating}
						onChange={handleTextChange}
					/>
				</div>

				<div>
					{/* <label htmlFor="featured">Featured</label> */}
					<input
						id="featured"
						type="checkbox"
						onChange={handleCheckboxChange}
						checked={watch.featured}
					/>
				</div>

				<div>
					{/* <label htmlFor="price">Price</label> */}
					<input
						id="price"
						type="number"
						value={watch.price}
						onChange={handleTextChange}
					/>
				</div>

				<br />
				<input type="submit" />
			</form>
		</div>
	);
}

export default WatchEditForm;

// "featured": true,
