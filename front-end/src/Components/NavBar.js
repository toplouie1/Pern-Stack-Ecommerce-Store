import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "@mui/material/Button";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";

function NavBar() {
	return (
		<nav active>
			<h4>
				<Link to="/">Home</Link>
			</h4>
			<Link to="/watches">
				<WatchOutlinedIcon fontSize="large" color="primary" />
			</Link>

			<Button size="small" variant="outlined">
				<Link to="/watches/new">Add Watch</Link>
			</Button>
		</nav>
	);
}

export default NavBar;
