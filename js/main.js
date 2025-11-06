const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const phone = document.querySelector('.phone');

menuOpen.addEventListener('click', () => {
	phone.classList.add('show');
});

menuClose.addEventListener('click', () => {
	phone.classList.remove('show');
});
