import React from 'react'
import Advantages from '../components/Advantages'
import FilteredProductList from '../components/FilteredProductList'

export default function HomePage() {
	return (
		<>
			<section className="main center">
				<img src='/assets/images/main/product1.png' alt="product1" className="main__img" />
				<div className="main__text">
					<div className="main__delimiter"></div>
					<div className="main__text_item">
						<h2 className="main__title">THE BRAND</h2>
						<p className="main__subtitle">OF LUXERIOUS <span className="main__decor">FASHION</span></p>
					</div>
				</div>
			</section>
			<section className="sections center">
				<div className="sections__item women">
					<p className="sections__subtitle">30% OFF</p>

					<a href="/catalogue" className="sections__title">FOR WOMEN</a>
				</div>
				<div className="sections__item men">
					<p className="sections__subtitle">HOT DEAL</p>
					<h2 className="sections__title">FOR MEN</h2>
				</div>
				<div className="sections__item kids">
					<p className="sections__subtitle">NEW ARRIVALS</p>
					<h2 className="sections__title">FOR KIDS</h2>
				</div>
				<div className="sections__item accesories item__big">
					<p className="sections__subtitle">LUXIROUS & TRENDY</p>
					<h2 className="sections__title">ACCESORIES</h2>
				</div>
			</section>
			<FilteredProductList />
			<Advantages />
		</>
	)
}