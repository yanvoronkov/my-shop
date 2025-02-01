import React from 'react';

const ProductCard = ({ product }) => {
	return (

		<section className="catalogue-item center">
			<div className="catalogue-item__slider-box">
				<div class="catalogue-item__arrow-box-left">
					<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
							fill="black" />
					</svg>

				</div>
				<img
					src={product.card_image}
					alt={product.title}
					className="catalogue-item__img1"
				/>
				<div class="catalogue-item__narrow-box-right">
					<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
							fill="#F16D7F" />
					</svg>
				</div>
			</div>
			<div className="catalogue-item__description-box center">
				<h3 className="catalogue-item__subtitle">WOMEN COLLECTION</h3>
				<div className="catalogue-item__delimiter-short"></div>
				<h2 className="catalogue-item__title">{product.title}</h2>
				<p className="catalogue-item__text">{product.description}</p>
				<p className="catalogue-item__price">{product.price}</p>
				<div className="catalogue-item__delimiter-long"></div>
				<div className="catalogue-item__button-block">
					<button className="catalogue-item__button">
						<span>Add to Cart</span>
					</button>
				</div>
			</div>

		</section>


	);
};

export default ProductCard;