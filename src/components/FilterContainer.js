import React, { useState, useRef, useEffect } from "react";

const FilterContainer = ({ selectedSizes, onSizeChange }) => {
	const [isSizeOpen, setIsSizeOpen] = useState(false); // Для блока с размерами
	const [isFilterListOpen, setIsFilterListOpen] = useState(false); // Для блока filter-list
	const sizeDropdownRef = useRef(null);
	const filterListRef = useRef(null);

	const sizes = ["XS", "S", "M", "L"]; // Доступные размеры

	const handleSizeChange = (event) => {
		const { value, checked } = event.target;
		if (checked) {
			onSizeChange([...selectedSizes, value]); // Добавляем выбранный размер
		} else {
			onSizeChange(selectedSizes.filter((size) => size !== value)); // Убираем снятый размер
		}
	};

	const toggleSizeDropdown = () => {
		setIsSizeOpen((prevState) => !prevState); // Переключаем видимость списка размеров
	};

	const toggleFilterList = () => {
		setIsFilterListOpen((prevState) => !prevState); // Переключаем видимость filter-list
	};

	const handleClickOutside = (event) => {
		// Проверяем, был ли клик вне dropdowns
		if (
			sizeDropdownRef.current &&
			!sizeDropdownRef.current.contains(event.target)
		) {
			setIsSizeOpen(false); // Закрываем dropdown размеров
		}
		if (
			filterListRef.current &&
			!filterListRef.current.contains(event.target)
		) {
			setIsFilterListOpen(false); // Закрываем filter-list
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="filter-container center">
			<div
				className="filter-header"
				ref={filterListRef} // Референс на filter-list
			>
				<div
					className="filter-header__category"
					onClick={toggleFilterList} // Переключаем видимость filter-list
				>
					<span className="filter-label">FILTER</span>
					<span className="filter-icon"></span>
				</div>
				{isFilterListOpen && (
					<div className="filter-list">
						<div className="filter-category">
							<h3 className="category-title">CATEGORY</h3>
							<ul className="hover_menu_chapter">
								<li className="hover_menu_paragraph">Accessories</li>
								<li className="hover_menu_paragraph">Bags</li>
								<li className="hover_menu_paragraph">Denim</li>
								<li className="hover_menu_paragraph">T-Shirts</li>
								<li className="hover_menu_paragraph">Accessories</li>
								<li className="hover_menu_paragraph">Jackets & Coats</li>
								<li className="hover_menu_paragraph">Polos</li>
								<li className="hover_menu_paragraph">T-Shirts</li>
								<li className="hover_menu_paragraph">Shirts</li>
							</ul>
							<h3 className="category-title">BRAND</h3>
						</div>
						<h3 className="category-title">DESIGNER</h3>
					</div>
				)}
			</div>
			<div className="filter-options">
				<div className="filter-option">
					<span>Trending Now</span>
					<span className="dropdown-icon"></span>
				</div>
				<div
					className="filter-option-size"
					onClick={toggleSizeDropdown}
					ref={sizeDropdownRef} // Референс на dropdown размеров
				>
					<span>Size</span>
					<span className="dropdown-icon"></span>
					{isSizeOpen && (
						<div
							className="size-options"
							onClick={(e) => e.stopPropagation()} // Останавливаем всплытие событий
						>
							<ul>
								{sizes.map((size) => (
									<li key={size}>
										<label className="size-option__label">
											<input className="size-option__input"
												type="checkbox"
												value={size}
												checked={selectedSizes.includes(size)}
												onChange={handleSizeChange}
											/>
											{size}
										</label>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
				<div className="filter-option">
					<span>Price</span>
					<span className="dropdown-icon"></span>
				</div>
			</div>
		</div>
	);
};

export default FilterContainer;