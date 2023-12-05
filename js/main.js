
window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
	menuItem = document.querySelectorAll('.menu_item'),
	burger = document.querySelector('.burger'),
	overflow = document.querySelector('.overflow');

	burger.addEventListener('click', () => {
			burger.classList.toggle('burger_active');
			menu.classList.toggle('menu_active');
			overflow.classList.toggle('overflow_active');

	});
	overflow.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		menu.classList.toggle('menu_active');
		overflow.classList.toggle('overflow_active');
	});

	menuItem.forEach(item => {
			item.addEventListener('click', () => {
					burger.classList.toggle('burger_active');
					menu.classList.toggle('menu_active');
					overflow.classList.toggle('overflow_active');
			})
	})
})
