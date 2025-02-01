import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		try {
			const storedCart = localStorage.getItem('cart');
			return storedCart ? JSON.parse(storedCart) : {};
		} catch (error) {
			console.error("Error reading cart from localStorage", error);
			return {};
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem('cart', JSON.stringify(cart));
		} catch (error) {
			console.error("Error saving cart to localStorage", error);
		}
	}, [cart]);


	const addToCart = (product) => {
		setCart(prevCart => {
			const updatedCart = { ...prevCart };
			if (updatedCart[product.id]) {
				updatedCart[product.id].quantity += 1;
			} else {
				updatedCart[product.id] = { ...product, quantity: 1 };
			}
			return updatedCart;
		});
	};

	const removeFromCart = (productId) => {
		setCart(prevCart => {
			const updatedCart = { ...prevCart };
			if (updatedCart[productId]) {
				delete updatedCart[productId]
			}
			return updatedCart;
		});
	};


	const updateQuantity = (productId, newQuantity) => {
		setCart(prevCart => {
			const updatedCart = { ...prevCart };
			if (updatedCart[productId]) {
				updatedCart[productId].quantity = newQuantity;
			}
			return updatedCart;
		});
	};

	const clearCart = () => {
		setCart({});
	};


	const getTotalQuantity = () => {
		return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
	};

	const getTotalPrice = () => {
		return Object.values(cart).reduce((total, item) => total + (item.price * item.quantity), 0);
	};

	const cartValue = {
		cart,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		getTotalQuantity,
		getTotalPrice
	};

	return (
		<CartContext.Provider value={cartValue}>
			{children}
		</CartContext.Provider>
	);
};