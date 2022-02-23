import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "@mui/material/Button";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";

function NavBar() {
	return (
		<nav>
			<h4>
				<Link to="/">Home</Link>
			</h4>
			<Link to="/watches">
				<WatchOutlinedIcon fontSize="large" color="primary" />
			</Link>

			<div>
				<Button size="small" variant="outlined">
					<Link to="/watches/new">Add Watch</Link>
				</Button>
				<Button size="small" variant="outlined">
					<Link syyle={{ color: "white" }} to="/cart">
						Cart
					</Link>
				</Button>
			</div>
		</nav>
	);
}

export default NavBar;
