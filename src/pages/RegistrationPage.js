import React from 'react';

const RegistrationPage = () => {
	return (
		<>
			<div class="top-head center">
				<h2 class="top-head__heading">REGISTRATION</h2>
			</div>
			<section class="registration center">
				<div class="registration__left-block">
					<h2 class="registration__title">Your Name</h2>
					<input type="text" class="registration__field" placeholder="First Name" />
					<input type="text" class="registration__field" placeholder="Last Name" />
					<div class="registration__radio-items">
						<input class="registration__radio-item" type="radio" id="option1" name="radiogroup" checked />
						<label for="Male">Male</label>
						<input class="registration__radio-item" type="radio" id="" name="radiogroup" />
						<label for="Female">Female</label>
					</div>
					<h2 class="registration__title">Login details</h2>
					<input type="text" class="registration__field" placeholder="Email" />
					<input type="text" class="registration__field" placeholder="Password" />
					<p class="registration__info">Please use 8 or more characters, with at least 1 number and a mixture of
						uppercase and lowercase letters</p>
					<button class="registration__button">JOIN NOW</button>
				</div>
				<div class="registration__right-block">
					<h2 class="registration__title">LOYALTY HAS ITS PERKS</h2>
					<p class="registration__text">Get in on the loyalty program where you can earn points and unlock serious
						perks. Starting with these as soon as you
						join:</p>
					<ul class="registration__list">
						<li class="registration__list-item">15% off welcome offer</li>
						<li class="registration__list-item">Free shipping, returns and exchanges on all orders
						</li>
						<li class="registration__list-item">$10 off a purchase on your birthday
						</li>
						<li class="registration__list-item">Early access to products</li>
						<li class="registration__list-item">Exclusive offers & rewards</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default RegistrationPage;