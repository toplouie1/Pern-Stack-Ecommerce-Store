// dependencies
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./Components/Home";
import FourOfFour from "./pages/FourOfFour";
import Index from "./pages/Index";

// components
import NavBar from "../src/Components/NavBar";
import WatchDetails from "./Components/WatchDetails";
import WatchEditForm from "./Components/WatchEditForm";
import WatchNew from "./Components/WatchNew";

function App() {
	return (
		<div>
			<NavBar />
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/watches" element={<Index />} />
					<Route path="/watches/:id" element={<WatchDetails />} />
					<Route path="/watches/:id/edit" element={<WatchEditForm />} />
					<Route path="/watches/new" element={<WatchNew />} />
					<Route path="*" element={<FourOfFour />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
