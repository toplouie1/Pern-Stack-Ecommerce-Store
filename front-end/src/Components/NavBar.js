import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "@mui/material/Button";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function NavBar({ cartItems }) {
	return (
		<nav>
			<h4>
				<Link to="/">Home</Link>
			</h4>
			<Link className="middleNav" to="/watches">
				<WatchOutlinedIcon fontSize="large" color="primary" />
			</Link>
			<div>
				<Button style={{ margin: "10px" }} size="small" variant="outlined">
					<Link to="/watches/new">Add Watch</Link>
				</Button>
				<Link style={{ color: "white", marginTop: "30px" }} to="/cart">
					<ShoppingCartOutlinedIcon />
					<span className="cartLength">
						{cartItems.length === 0 ? "" : cartItems.length}
					</span>
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
