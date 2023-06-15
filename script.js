let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
	searchBtn.classList.remove('fa-times');
	searchBar.classList.remove('active');
}

window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
	searchBtn.classList.toggle('fa-times');
	searchBar.classList.toggle('active');
});

menu.addEventListener('click', () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
});

var swiper = new Swiper(".review-slider", {
	spaceBetween: 20,
	loop:true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	}
});

