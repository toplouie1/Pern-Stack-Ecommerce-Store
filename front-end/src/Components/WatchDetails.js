import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function WatchDetails() {
	const [watch, setWatch] = useState([]);
	let { id } = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		axios
			.get(API + "/watches/" + id)
			.then((res) => {
				setWatch(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const handleDelete = () => {
		axios
			.delete(`${API}/watches/${id}`)
			.then((res) => {
				navigate("/watches");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<main className="detailsMain ">
			<aside>
				<div>
					<img className="mainImg" src={watch.image} alt={watch.name} />
				</div>
				<div>
					<h2 className="detailsTitle">Name: {watch.name}</h2>
					<h2 className="detailsP">- {watch.description}</h2>
					<h2 className="detailsP">Rating: {watch.rating}</h2>
					{/* <h2>: {watch.featured}</h2> */}
					<h2 className="detailsPrice">Price: ${watch.price}</h2>
				</div>{" "}
				<div>
					<button onClick={handleDelete}>Delete</button>
					<button>
						<Link to={`/watches/${id}/edit`}>Edit</Link>
					</button>
					<button>
						<Link to="/watches">Back</Link>
					</button>
				</div>
			</aside>
		</main>
	);
}

export default WatchDetails;
