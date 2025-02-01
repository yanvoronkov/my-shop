import React from 'react'

function ShoppingCart() {
	return (

		<>
			<div className="top-head center">
				<h2 className="top-head__heading">SHOPPING CART</h2>
			</div>
			<section className="shopping-cart center">
				<div className="shopping-cart__left-block left-block">
					<div className="left-block__product-items">
						<img
							src="/assets/images/shopping_card/product_1.jpeg"
							alt="product_1"
							className="left-block__img"
						/>
						<div className="left-block__info">
							<h2 className="left-block__title">MANGO PEOPLE T-SHIRT</h2>
							<p className="left-block__price">Price:</p>
							<p className="left-block__color">Color:</p>
							<p className="left-block__size">Size:</p>
							<p className="left-block__quantity">Quantity:</p>
						</div>
						<div className="left-block__button-block" />
					</div>
					<div className="left-block__product-items">
						<img
							src="/assets/images/shopping_card/product_2.jpeg"
							alt="product_1"
							className="left-block__img"
						/>
						<div className="left-block__info">
							<h2 className="left-block__title">MANGO PEOPLE T-SHIRT</h2>
							<p className="left-block__price">Price:</p>
							<p className="left-block__color">Color:</p>
							<p className="left-block__size">Size:</p>
							<p className="left-block__quantity">Quantity:</p>
						</div>
						<div className="left-block__button-block" />
					</div>
					<div className="left-block__buttons-block">
						<button className="left-block__button">CLEAR SHOPPING CART</button>
						<button className="left-block__button">CONTINUE SHOPPING</button>
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
						<p className="right-block__subtotal-price">SUB TOTAL</p>
						<p className="right-block__grandtotal-price">GRAND TOTAL</p>
						<div className="right-block__delimiter"></div>
						<button className="right-block__button-checkout">
							PROCEED TO CHECKOUT
						</button>
					</div>
				</div>
			</section>
		</>

	)
}

export default ShoppingCart




