import React from "react";
import "./Cart.css";
import Button from "@mui/material/Button";

function Cart({ cartItems }) {
	const buyAll = () => {
		alert("THIS IS NOT A REAL PRODUCT ");
	};
	return (
		<div className="cartItems">
			<div className="cartHeader">Cart Items</div>
			<Button
				className="cartHeader"
				size="small"
				variant="outlined"
				color="error"
			>
				Remove All
			</Button>
			{cartItems.length === 0 && (
				<div className="emptyItems"> No items are added.</div>
			)}
			<div className="cartInfo">
				{cartItems.map((item) => (
					<div className="allCartItem">
						<div key={item.id} className="cartItems">
							<img className="cartImg" src={item.image} alt={item.name} />
						</div>
						<div>
							<div>Name: {item.name}</div>
							<div>Price: ${item.price}</div>
							<Button size="small" variant="outlined" color="error">
								Remove
							</Button>
						</div>
					</div>
				))}
			</div>
			<Button
				onClick={buyAll}
				className="cartButton"
				size="small"
				variant="contained"
			>
				Buy
			</Button>
		</div>
	);
}

export default Cart;
