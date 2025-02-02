import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
	const { addToCart } = useContext(CartContext);
	const [isAdding, setIsAdding] = useState(false);

	const handleAddToCart = () => {
		setIsAdding(true);
		addToCart(product);
		setTimeout(() => setIsAdding(false), 300); // Анимация на 0.3 секунды
	};

	return (
		<section className="catalogue-item center">
			<div className="catalogue-item__slider-box">
				<div className="catalogue-item__arrow-box-left">
					<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
					</svg>
				</div>
				<img
					src={product.card_image}
					alt={product.title}
					className="catalogue-item__img1"
				/>
				<div className="catalogue-item__narrow-box-right">
					<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
					</svg>
				</div>
			</div>
			<div className="catalogue-item__description-box center">
				<h3 className="catalogue-item__subtitle">WOMEN COLLECTION</h3>
				<div className="catalogue-item__delimiter-short"></div>
				<h2 className="catalogue-item__title">{product.title}</h2>
				<p className="catalogue-item__text">{product.description}</p>
				<p className="catalogue-item__price">${product.price}</p>
				<div className="catalogue-item__delimiter-long"></div>
				<div className="filter-options">
					<div className="filter-option">
						<span>CHOOSE COLOR</span>
						<span className="dropdown-icon"></span>
					</div>
					<div className="filter-option">
						<span>CHOOSE SIZE </span>
						<span className="dropdown-icon"></span>
					</div>
					<div className="filter-option">
						<span>QUANTITY</span>
						<span className="dropdown-icon"></span>
					</div>
				</div>
				<div className="catalogue-item__button-block">
					<button className={`catalogue-item__button ${isAdding ? 'adding' : ''}`} onClick={handleAddToCart}>
						<span>Add to Cart</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProductCard;