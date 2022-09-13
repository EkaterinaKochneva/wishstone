window.onload = function () {
		// Кнопки в шапке
    $('.header-nav__icon').click(function () {		
		let parent = $(this).parents('.header-nav__item');
        parent.toggleClass("active");
		parent.children(".header-nav__submenu").slideToggle();
	});

    $('.top-header__burger').click(function () {
		$('.menu-header').addClass('active');
		$('body').addClass('fixed-mb');
	});
    $('.menu-header__close-mob').click(function () {
		$('.menu-header').removeClass('active');
		$('body').removeClass('fixed-mb');
	});

	// Слайдер выполненных работ

	document.querySelectorAll('.portfolio-slide').forEach(n => {
		const swiperPortfolioThumbs = new Swiper(n.querySelector('.portfolio-thumbs__swiper'), {
			slidesPerView: 3,	
			slidesPerColumn: 2,
			spaceBetween: 10,	

			breakpoints: {
				1200: {
					slidesPerView: 3,
					slidesPerColumn: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					slidesPerColumn: 3,
					spaceBetween: 10,
				}
			},
		  });

		const swiperPortfolio = new Swiper(n.querySelector('.portfolio-slide__swiper'), {
			slidesPerView: 1,		
			draggable: true,

			thumbs: {
				swiper: swiperPortfolioThumbs,
		  	},
		});

	});

	const swiperPortfolioBig = new Swiper('.portfolio__slider-big', {
		loop: true,
		slidesPerView: 1,
		draggable: true,

		navigation: {
			nextEl: '.portfolio__button-next-js',
			prevEl: '.portfolio__button-prev-js',
		  },

		pagination: {
			el: '.portfolio__pagination-js',
			clickable: true,
		  },
	});

		// Аккардион 

		$('.accordion__btn').click(function(){
			if(!$(this).hasClass('active')){
				$(this).parents('.accordion__wrapper').find('.accordion__btn').removeClass('active'); 
				$(this).parents('.accordion__wrapper').find('.accordion__content').slideUp();
				$(this).addClass('active');	
				$(this).parent().next().children().slideDown();	
				$(this).parent().next().addClass('active');
					
			} else {	
				$(this).removeClass('active');	
				$(this).parent().next().children().slideUp();
				$(this).parent().next().removeClass('active');
				
			}
		});

}