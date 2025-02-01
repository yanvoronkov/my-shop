import React from 'react'

export default function Contact() {
	return (
		<section class="contact center">
			<div class="contact__review">
				<img src='/assets/images/contact/img.jpeg' alt="face" class="contact__img" />
				<div class="contact__text">"Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span
					class="contact__span">a pulvinar purus
					condimentum"</span> </div>
			</div>
			<div class="contact__subscribe">
				<h2 class="contact__title">SUBSCRIBE</h2>
				<h3 class="contact__subtitle">FOR OUR NEWLETTER AND PROMOTION</h3>
				<div class="contact__email_block">
					<input class="contact__input" type="text" placeholder="Enter Your Email" />
					<button class="contact__button">Subscribe</button>
				</div>
			</div>
		</section>
	)
}
