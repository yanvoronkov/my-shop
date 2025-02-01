import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ProductList = ({ products, selectedSizes }) => {
	const [visibleCount, setVisibleCount] = useState(6); // Состояние для отслеживания количества видимых товаров
	const navigate = useNavigate(); // Хук для навигации

	// Если есть выбранные размеры, фильтруем товары
	const filteredProducts = selectedSizes.length > 0
		? products.filter(product =>
			product.sizes.some(size => selectedSizes.includes(size))
		)
		: products; // Если фильтры не выбраны, показываем все товары

	const loadMoreProducts = () => {
		setVisibleCount((prevCount) => prevCount + 6); // Увеличиваем количество видимых товаров на 6
	};

	const handleProductClick = (id) => {
		navigate(`/catalogue/${id}`); // Перенаправляем на страницу товара
	};


	return (
		<section className="fetured_items center">
			<div className="fetured_item item-fetured">

				{filteredProducts.length > 0 ? (
					filteredProducts
						.slice(0, visibleCount) // Показываем только видимые товары
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
										<p className="item-fetured__price">{product.price}</p>
										<button
											onClick={() => handleProductClick(product.id)}
											className="item-fetured__btn"
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

			{/* Кнопка отображается только если есть еще товары */}
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