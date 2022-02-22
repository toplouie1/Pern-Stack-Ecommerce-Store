import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "@mui/material/Button";

function NavBar() {
	return (
		<nav>
			<h4>
				<Link to="/">Home</Link>
			</h4>
			<h4>
				<Link to="/watches">Watch</Link>
			</h4>
			<Button size="small" variant="outlined">
				<Link to="/watches/new">Add Watch</Link>
			</Button>
		</nav>
	);
}

export default NavBar;
