import React, { useState } from 'react';
import FilterContainer from './FilterContainer'; // Импортируем компонент фильтра
import ProductList from './ProductList'; // Импортируем компонент списка товаров
import products from "../data/products" // Импортируем данные товаров

const FilteredProductList = () => {
	const [selectedSizes, setSelectedSizes] = useState([]); // Состояние для выбранных размеров

	const handleSizeChange = (newSizes) => {
		setSelectedSizes(newSizes); // Обновляем выбранные размеры
	};

	return (
		<div className="filtered-product-list">
			<FilterContainer selectedSizes={selectedSizes} onSizeChange={handleSizeChange} />
			<ProductList products={products} selectedSizes={selectedSizes} />
		</div>
	);
};

export default FilteredProductList;