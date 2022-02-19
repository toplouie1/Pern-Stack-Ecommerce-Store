// dependencies
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import FourOfFour from "./pages/FourOfFour";
import Index from "./pages/Index";

// components
import NavBar from "../src/Components/NavBar";

function App() {
	return (
		<div>
			<NavBar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/watches" element={<Index />} />

					<Route path="*" element={<FourOfFour />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
