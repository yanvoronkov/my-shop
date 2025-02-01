import React from 'react'
import Advantages from '../components/Advantages'
import FilteredProductList from '../components/FilteredProductList'

export default function HomePage() {
	return (
		<>
			<section class="main center">
				<img src='/assets/images/main/product1.png' alt="product1" class="main__img" />
				<div class="main__text">
					<div class="main__delimiter"></div>
					<div class="main__text_item">
						<h2 class="main__title">THE BRAND</h2>
						<p class="main__subtitle">OF LUXERIOUS <span class="main__decor">FASHION</span></p>
					</div>
				</div>
			</section>
			<section class="sections center">
				<div class="sections__item women">
					<p class="sections__subtitle">30% OFF</p>

					<a href="/catalogue" class="sections__title">FOR WOMEN</a>
				</div>
				<div class="sections__item men">
					<p class="sections__subtitle">HOT DEAL</p>
					<h2 class="sections__title">FOR MEN</h2>
				</div>
				<div class="sections__item kids">
					<p class="sections__subtitle">NEW ARRIVALS</p>
					<h2 class="sections__title">FOR KIDS</h2>
				</div>
				<div class="sections__item accesories item__big">
					<p class="sections__subtitle">LUXIROUS & TRENDY</p>
					<h2 class="sections__title">ACCESORIES</h2>
				</div>
			</section>
			<FilteredProductList />
			<Advantages />
		</>
	)
}