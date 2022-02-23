import Watches from "../Components/Watches";
// import VideoMain from "../Components/VideoMain";
import Footer from "../Components/footer";

function Index({ handleAddProduct }) {
	return (
		<div className="indexMain">
			{/* <VideoMain /> */}
			<h1>Shop</h1>
			<Watches handleAddProduct={handleAddProduct} />
			<Footer />
		</div>
	);
}

export default Index;
