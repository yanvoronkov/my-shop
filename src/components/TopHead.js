import React from "react";

const TopHead = () => {
	return (
		<div className="top-head center">
			<h2 className="top-head__heading">NEW ARRIVALS</h2>
			<nav className="breadcrumbs">
				<a href="/" className="breadcrumbs__link"> HOME</a>
				<a href="/" className="breadcrumbs__link"> MEN</a>
				<a href="/" className="breadcrumbs__link breadcrumbs__link_site"> NEW ARRIVALS</a>
			</nav>
		</div>
	);
};

export default TopHead;