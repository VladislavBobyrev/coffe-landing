const burger = document.querySelector('.header-burger')
burger.addEventListener('click', () => {
	burger.classList.toggle('header-burger--active')
	document.querySelector('.header-burger__span').classList.toggle('header-burger__span--active')
	document.querySelector('.nav').classList.toggle('nav--active')
	document.querySelector('.html').classList.toggle('html-hidden')
})
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  depay: 400,
  reset: true,
});

sr.reveal(`.banner-title`, { scale: 0.8 });
sr.reveal(`.personalized-container__subtitle`, { origin: "top" });
sr.reveal(`.personalized-container__title`, { origin: "top" });
sr.reveal(`.personalized-list__item`, { origin: "bottom" });
sr.reveal(`.favorite-container__subtitle`, { origin: "bottom" });
sr.reveal(`.favorite-container__title`, { origin: "bottom" });
sr.reveal(`.favorite__slider`, { origin: "top" });
sr.reveal(`.set-container__title`, { origin: "bottom" });
sr.reveal(`.set-container__subtitle`, { origin: "bottom" });
sr.reveal(`.set-card__image`, { scale: 0.8 });
sr.reveal(`.slider__filter`, { scale: 0.9 });
sr.reveal(`.set-card__body`, { origin: "top" });
sr.reveal(`.combo-container__subtitle`, { origin: "top" });
sr.reveal(`.combo-container__title`, { origin: "top" });
sr.reveal(`.combo__slider`, { origin: "top" });
// sr.reveal(`.page__footer`, { origin: "top" });

// slick
$(".favorite__slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
	responsive: [
		{
      breakpoint: 4000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 2,
      },
    },
		{
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".combo__slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  responsive: [
		{
      breakpoint: 4000,
      settings: {
        slidesToShow: 4,
      },
    },
		{
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
		{
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
