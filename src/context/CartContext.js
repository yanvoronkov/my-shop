import React, { createContext, useState } from "react";

// Создаем контекст корзины
export const CartContext = createContext();

// Создаем провайдер для корзины
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false); // Состояние модального окна
	const [productToDelete, setProductToDelete] = useState(null); // Товар, который нужно удалить

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

		if (updatedCart.length < cart.length) {
			// Если товар удален (количество стало 0), показываем модальное окно
			setProductToDelete(productId);
			setIsModalOpen(true);
		}

		setCart(updatedCart);
	};

	// Функция для удаления товара из корзины
	const removeFromCart = (productId) => {
		setProductToDelete(productId);
		setIsModalOpen(true);
	};

	// Подтверждение удаления товара
	const confirmDelete = () => {
		setCart(cart.filter((item) => item.id !== productToDelete));
		setIsModalOpen(false);
		setProductToDelete(null);
	};

	// Закрытие модального окна
	const closeModal = () => {
		setIsModalOpen(false);
		setProductToDelete(null);
	};

	// Возвращаем провайдер с состоянием корзины и функциями
	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				decreaseQuantity,
				removeFromCart,
				isModalOpen,
				confirmDelete,
				closeModal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
