import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductList = ({ products, selectedSizes }) => {
	const [visibleCount, setVisibleCount] = useState(6);
	const navigate = useNavigate();
	const { addToCart } = useContext(CartContext);
	const [addedProductId, setAddedProductId] = useState(null);
	const filteredProducts = selectedSizes.length > 0
		? products.filter(product =>
			product.sizes.some(size => selectedSizes.includes(size))
		)
		: products;

	const loadMoreProducts = () => {
		setVisibleCount((prevCount) => prevCount + 6);
	};

	const handleProductClick = (id) => {
		navigate(`/catalogue/${id}`);
	};

	const handleAddToCart = (product) => {
		setAddedProductId(product.id);
		addToCart(product);
		setTimeout(() => setAddedProductId(null), 300);
	};

	return (
		<section className="fetured_items center">
			<div className="fetured_item item-fetured">

				{filteredProducts.length > 0 ? (
					filteredProducts
						.slice(0, visibleCount)
						.map(product => (
							<div key={product.id} className="item-fetured__item">
								<img
									onClick={() => handleProductClick(product.id)}
									src={product.cat_image}
									alt={product.title}
									className="item-fetured__img"
								/>
								<div className="item-fetured__box">
									<h2 className="item-fetured__title">{product.title}</h2>
									<p className="item-fetured__text">{product.description}</p>
									<div className="item-fetured__price-btn">
										<p className="item-fetured__price">${product.price}</p>
										<button
											onClick={() => handleAddToCart(product)}
											className={`item-fetured__btn ${addedProductId === product.id ? 'adding' : ''}`}
										>
											Add to Cart
										</button>
									</div>
								</div>
							</div>
						))
				) : (
					<p>No products available for the selected sizes.</p>
				)}

			</div>

			{visibleCount < filteredProducts.length && (
				<button
					className="fetured_items__btn"
					onClick={loadMoreProducts}
				>
					Browse All Product
				</button>
			)}
		</section>
	);
};

export default ProductList;