import React from "react";

function Cart({ cartItems }) {
	return (
		<div className="cartItems">
			<div className="cartHeader">Cart Items</div>
			{cartItems.length === 0 && (
				<div className="emptyItems"> No items are added.</div>
			)}
			<div>
				{cartItems.map((item) => (
					<div key={item.id} className="cartItems">
						<div>{item.name}</div>
						<img className="cartImg" src={item.image} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Cart;
