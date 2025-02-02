import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import products from "../data/products";
import { useNavigate } from 'react-router-dom';




function ShoppingCart() {
	const { cart, removeFromCart, getTotalPrice, decreaseQuantity, addToCart } = useContext(CartContext);
	const navigate = useNavigate();

	const handleContinueShopping = () => {
		navigate('/catalogue');
	};


	return (
		<>
			<div className="top-head center">
				<h2 className="top-head__heading">SHOPPING CART</h2>
			</div>
			<section className="shopping-cart center">
				<div className="shopping-cart__left-block left-block">
					{cart.length > 0 ? (
						cart.map(cartItem => {
							const product = products.find(p => p.id === cartItem.id);
							return (
								<div key={cartItem.id} className="left-block__product-items">
									{product && ( // Проверяем, что товар найден
										<>
											<img
												src={product.card_image}
												alt={product.title}
												className="left-block__img"
											/>
											<div className="left-block__info">
												<h2 className="left-block__title">{product.title}</h2>
												<p className="left-block__price">Price: {product.price}</p>
												<p className="left-block__color">Color: {product.color}</p>
												<p className="left-block__size">Size: {product.size}</p>
												<div className="left-block__quantity">
													<p>Quantity:</p>
													<div className="quantity-buttons">
														<button className="quantity-button"
															onClick={() => decreaseQuantity(product.id)}>-</button>
														<span> {cartItem.quantity} </span>
														<button className="quantity-button"
															onClick={() => addToCart(product)}>+</button>
													</div>
												</div>
											</div>
											<div className="left-block__button-block">
												<button className="remove-button" onClick={() => removeFromCart(product.id)}>
													✕
												</button>
											</div>
										</>
									)}
									{!product && ( // Если товар не найден, показываем сообщение
										<p>Product not found</p>
									)}
								</div>
							)
						})
					) : (
						<p>Your cart is empty.</p>
					)}

					<div className="left-block__buttons-block">
						<button className="left-block__button">CLEAR SHOPPING CART</button>
						<button className="left-block__button" onClick={handleContinueShopping}>CONTINUE SHOPPING</button>
					</div>
				</div>
				<div className="shopping-cart__right-block right-block">
					<div className="right-block__adress-items">
						<h2 className="right-block__title">SHIPPING ADRESS</h2>
						<input
							type="text"
							className="right-block__field"
							placeholder="Bangladesh"
						/>
						<input type="text" className="right-block__field" placeholder="State" />
						<input
							type="text"
							className="right-block__field"
							placeholder="Postcode / Zip"
						/>
						<input
							type="text"
							className="right-block__field short"
							placeholder="GET A QUOTE"
						/>
					</div>
					<div className="right-block__total-price-items">
						<p className="right-block__subtotal-price">SUB TOTAL: ${getTotalPrice()}</p>
						<p className="right-block__grandtotal-price">GRAND TOTAL: ${getTotalPrice()}</p>
						<div className="right-block__delimiter"></div>
						<button className="right-block__button-checkout">
							PROCEED TO CHECKOUT
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default ShoppingCart