import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<nav>
			<h4>
				<Link to="/">Home</Link>
			</h4>
			<h4>
				<Link to="/watches">All Watches</Link>
			</h4>
			<button>
				<Link to="/watches/new">Add Watch</Link>
			</button>
		</nav>
	);
}

export default NavBar;
