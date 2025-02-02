import React, { createContext, useState, useEffect } from "react";

// Создаем контекст корзины
export const CartContext = createContext();

// Создаем провайдер для корзины
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		try {
			const storedCart = localStorage.getItem('cart');
			return storedCart ? JSON.parse(storedCart) : [];
		} catch (error) {
			console.error("Error reading cart from localStorage", error);
			return [];
		}
	});


	useEffect(() => {
		try {
			localStorage.setItem('cart', JSON.stringify(cart));
		} catch (error) {
			console.error("Error saving cart to localStorage", error);
		}
	}, [cart]);


	// Функция для добавления товара в корзину
	const addToCart = (product) => {
		const existingItem = cart.find((item) => item.id === product.id);
		if (existingItem) {
			setCart(
				cart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCart([...cart, { ...product, quantity: 1 }]);
		}
	};

	// Функция для уменьшения количества товара
	const decreaseQuantity = (productId) => {
		const updatedCart = cart
			.map((item) =>
				item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
			)
			.filter((item) => item.quantity > 0);
		setCart(updatedCart);
	};

	// Функция для удаления товара из корзины
	const removeFromCart = (productId) => {
		setCart(cart.filter((item) => item.id !== productId));
	};


	const getTotalQuantity = () => {
		return cart.reduce((total, item) => total + item.quantity, 0);
	};

	const getTotalPrice = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	// Возвращаем провайдер с состоянием корзины и функциями
	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				decreaseQuantity,
				removeFromCart,
				getTotalQuantity,
				getTotalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};