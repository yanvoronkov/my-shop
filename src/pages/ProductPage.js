import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductPage = ({ products }) => {
	const { id } = useParams(); // Получаем id из URL
	const product = products.find(p => p.id === parseInt(id)); // Находим товар

	if (!product) {
		return <p className='product-not-found'>Product not found.</p>; // Если товар не найден
	}

	return (
		<ProductCard product={product} /> // Передаем данные в ProductCard
	);
};

export default ProductPage;