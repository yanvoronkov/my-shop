import React from 'react'
import TopHead from '../components/TopHead'
import Advantages from '../components/Advantages'
import FilteredProductList from '../components/FilteredProductList'

export default function CataloguePage() {
	return (
		<>
			<TopHead />
			<FilteredProductList />
			<Advantages />

		</>
	)
}