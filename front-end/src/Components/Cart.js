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

	let removeEach = (itemId) => {
		let afterRemove = cartItems.filter((e) => e.id !== itemId);
		setCartItems(afterRemove);
	};

	let allCart = cartItems.map((item) => (
		<div key={item.id} className="allCartItem">
			<div className="cartItems">
				<img className="cartImg" src={item.image} alt={item.name} />
			</div>
			<div className="cartDiscription">
				<div>Name: {item.name}</div>
				<div>Price: ${item.price}</div>
			</div>
			<div>
				<Button
					onClick={() => removeEach(item.id)}
					color="error"
					startIcon={<DeleteIcon />}
				></Button>
			</div>
		</div>
	));

	return (
		<div className="cartItems">
			{cartItems.length !== 0 && <div className="cartHeader">Cart</div>}
			{cartItems.length === 0 && (
				<div className="emptyItems">Cart is Empty</div>
			)}
			<div className="cartInfo">{allCart}</div>
			<div className="cartBottom">
				<div>
					{cartItems.length !== 0 && (
						<Button
							onClick={buyAll}
							className="cartButton"
							size="small"
							variant="outlined"
						>
							Buy
						</Button>
					)}
				</div>
				<div>
					{cartItems.length !== 0 && (
						<div className="totalCart">Total: ${total.toLocaleString()}</div>
					)}
				</div>
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
							All
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Cart;
