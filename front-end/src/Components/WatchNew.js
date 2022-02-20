import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL;

function WatchNew() {
	const [watch, setWatch] = useState({
		name: "",
		description: "",
		rating: "",
		image: "",
		featured: "",
		price: "",
	});
	const navigate = useNavigate();

	const handleTextChange = (event) => {
		setWatch({ ...watch, [event.target.id]: event.target.value });
	};
	const handleCheckboxChange = () => {
		setWatch({ ...watch, featured: !watch.featured });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${API}/watches`, watch)
			.then((res) => {
				navigate("/watches");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="newForm">
			<h1>Add Watch</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						id="name"
						type="text"
						value={watch.name}
						placeholder="Name"
						onChange={handleTextChange}
						required
					/>
				</div>
				<div>
					<input
						id="description"
						type="text"
						value={watch.description}
						placeholder="Description"
						onChange={handleTextChange}
						required
					/>
				</div>
				<div>
					<input
						id="image"
						type="text"
						value={watch.image}
						placeholder="Image "
						onChange={handleTextChange}
					/>
				</div>
				<div>
					<input
						id="rating"
						type="number"
						value={watch.rating}
						placeholder="rating"
						onChange={handleTextChange}
					/>
				</div>
				<div>
					<input
						id="price"
						type="number"
						value={watch.price}
						placeholder="$"
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
				<input type="submit" />
			</form>
		</div>
	);
}

export default WatchNew;
