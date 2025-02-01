// Функция для показа/скрытия меню
filterOptionSize.addEventListener("click", (event) => {
	event.stopPropagation(); // Предотвращаем всплытие клика
	const isVisible = sizeOptions.style.display === "block";
	sizeOptions.style.display = isVisible ? "none" : "block"; // Переключаем видимость
});

// Закрываем меню при клике вне его
document.addEventListener("click", () => {
	sizeOptions.style.display = "none";
});
