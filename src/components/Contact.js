import React from 'react'

export default function Contact() {
	return (
		<section className="contact center">
			<div className="contact__review">
				<img src='/assets/images/contact/img.jpeg' alt="face" className="contact__img" />
				<div className="contact__text">"Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span
					className="contact__span">a pulvinar purus
					condimentum"</span> </div>
			</div>
			<div className="contact__subscribe">
				<h2 className="contact__title">SUBSCRIBE</h2>
				<h3 className="contact__subtitle">FOR OUR NEWLETTER AND PROMOTION</h3>
				<div className="contact__email_block">
					<input className="contact__input" type="text" placeholder="Enter Your Email" />
					<button className="contact__button">Subscribe</button>
				</div>
			</div>
		</section>
	)
}
