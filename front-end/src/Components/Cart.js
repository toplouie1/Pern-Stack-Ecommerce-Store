import React from "react";
import "./Cart.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart({ cartItems, setCartItems }) {
	const buyAll = () => {
		alert("CARD DECLINED !!!!!!!");
	};
	const removingAll = () => {
		setCartItems([]);
	};
	let total = cartItems.map((item) => item.price).reduce((a, b) => a + b, 0);

	return (
		<div className="cartItems">
			{cartItems.length !== 0 && <div className="cartHeader">Cart Items</div>}
			{cartItems.length === 0 && (
				<div className="emptyItems">Cart is Empty</div>
			)}
			<div className="cartInfo">
				{cartItems.map((item) => (
					<div key={item.id} className="allCartItem">
						<div className="cartItems">
							<img className="cartImg" src={item.image} alt={item.name} />
						</div>
						<div>
							<div>Name: {item.name}</div>
							<div>Price: ${item.price}</div>
						</div>
					</div>
				))}
			</div>
			<div className="cartBottom">
				<div>
					{cartItems.length !== 0 && (
						<Button
							onClick={removingAll}
							className="cartHeader"
							size="small"
							variant="outlined"
							color="error"
							startIcon={<DeleteIcon />}
						>
							Remove All
						</Button>
					)}
				</div>
				<div>
					{cartItems.length !== 0 && (
						<Button
							onClick={buyAll}
							className="cartButton"
							size="large"
							variant="outlined"
						>
							Buy
						</Button>
					)}
				</div>
				<div>
					{cartItems.length !== 0 && (
						<div>Total: ${total.toLocaleString()}</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Cart;
