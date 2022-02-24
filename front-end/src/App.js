// dependencies
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// pages
import Home from "./Components/Home";
import FourOfFour from "./pages/FourOfFour";
import Index from "./pages/Index";
import Details from "./pages/Details";

// components
import NavBar from "../src/Components/NavBar";
import WatchEditForm from "./Components/WatchEditForm";
import WatchNew from "./Components/WatchNew";
import Cart from "./Components/Cart";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const handleAddProduct = (watch) => {
		const ProductExist = cartItems.find((item) => item.id === watch.id);
		if (!ProductExist) {
			setCartItems([...cartItems, watch]);
		} else {
			alert("The watch is alerady in the cart");
		}
	};

	return (
		<div>
			<NavBar cartItems={cartItems} />
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						path="/watches"
						element={<Index handleAddProduct={handleAddProduct} />}
					/>
					<Route path="/watches/:id" element={<Details />} />
					<Route path="/watches/:id/edit" element={<WatchEditForm />} />
					<Route path="/watches/new" element={<WatchNew />} />
					<Route
						path="/cart"
						element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
					/>
					<Route path="*" element={<FourOfFour />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
