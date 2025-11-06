const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const phone = document.querySelector('.phone');
console.log(phone);

menuOpen.addEventListener('click', () => {
	phone.Classlist.remove('show');
});
