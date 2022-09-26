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
	// Главный слайдер
	const swiperTopBanner = new Swiper('.top-banner__slider', {
		loop: true,
		slidesPerView: 1,
		draggable: true,
		autoplay: {
			delay: 5000,
		  },

		pagination: {
			el: '.top-banner__pagination-js',
			clickable: true,
		  },
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

	// Слайдер товаров

	document.querySelectorAll('.slider-block').forEach(n => {
		const swiperNew = new Swiper(n.querySelector('.slider-block__swiper'), {
			slidesPerView: 1,		
			loop: true,			
			breakpoints: {
				991: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 20,					
				},
			},			
			navigation: {
				hide: false,
				nextEl: n.querySelector('.slider-block__button-next-js'),
				prevEl: n.querySelector('.slider-block__button-prev-js'),
			  },

	
		  });
	});

	// Слайдер выполненных работ (широкий) 

	document.querySelectorAll('.our-work-slider').forEach(n => {
		const swiperNew = new Swiper(n.querySelector('.our-work-slider__swiper'), {
			slidesPerView: 1.2,		
			spaceBetween: 20,	
			loop: true,			
			centeredSlides: true,	
			
			breakpoints: {
				1500: {
					slidesPerView: 1.9,	
				},
				1300: {
					slidesPerView: 1.7,	
				},
				1100: {
					slidesPerView: 1.5,	
				},
				991: {
					slidesPerView: 1.6,	
				},
				767: {
					slidesPerView: 1.3,					
				},
			},	
			
			navigation: {
				hide: false,
				nextEl: n.querySelector('.our-work-slider__button-next'),
				prevEl: n.querySelector('.our-work-slider__button-prev'),
			  },
			  pagination: {
				el: n.querySelector('.our-work-slider__pagination'),
				clickable: true,
				},
	
		  });
	});

	// Слайдер отзывов

	const reviewsSlider = new Swiper('.reviews__slider', {
		loop: true,
		slidesPerView: 1,
		draggable: true,
		autoHeight: true,		

		navigation: {
			nextEl: '.reviews__button-next',
			prevEl: '.reviews__button-prev',
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

	// Tabs
	$('.card-tabs__caption').on('click', '.card-tabs__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.card-tabs').find('.card-tabs__content').hide().removeClass('active')
			.eq($(this).index()).show().addClass('active');

	});
	$('.card-tabs__btn-mob').change(function() {
		$(this).closest('.card-tabs').find('.card-tabs__content').hide().removeClass('active')
		.eq($(this).val()-1).show().addClass('active');

	});

	// Слайдер с табами

	const tabsSlider = new Swiper('.content-swiper__slider', {
		slidesPerView: 1,
		simulateTouch: false,
		autoplayDisableOnInteraction: false,
		autoHeight: true,	
	});

	$('.tabs-swiper__item').click(function(){
		if(!$(this).hasClass('active')){
			$(this).parents('.tabs-swiper').find('.tabs-swiper__item').removeClass('active'); 
			tabsSlider.slideTo($(this).index());
			$(this).addClass('active');					
		} 
	});

	// Прокрутка наверх страницы
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
		$('.button-up').addClass('scroll');
		} else {
		$('.button-up').removeClass('scroll');
		}
		});
		$('.button-up').click(function(){
		$('body,html').animate({
		scrollTop: 0
		}, 500);
		return false;
	});

	// Кастомный ползунок
	function currencyFormat(num) {
		return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
	} // currencyFormat(num)

	$(".range-wrap").each(function () {
		let _this = $(this);

		var $range = _this.find(".range-slider-js");
		var $inputFrom = _this.find(".input_from");
		var $inputTo = _this.find(".input_to");

		var instance,
				from,
				to,
				min = $range.data('min'),
				max = $range.data('max');
		$range.ionRangeSlider({
			skin: "round",
			type: "double",
			grid: false,
			grid_snap: false,
			hide_min_max: true,
			hide_from_to: true,
			onStart: updateInputs,
			onChange: updateInputs,
			onFinish: updateInputs
		});
		instance = $range.data("ionRangeSlider");

		function updateInputs(data) {
			from = data.from;
			to = data.to;
			$inputFrom.prop("value", currencyFormat(from));
			$inputTo.prop("value", currencyFormat(to)); // InputFormat();
		}

		$inputFrom.on("change input ", function () {
			var val = +$(this).prop("value").replace(/\s/g, ''); // validate

			if (val < min) {
				val = min;
			} else if (val > to) {
				val = to;
			}

			instance.update({
				from: val
			});
			$(this).prop("value", currencyFormat(val));
			console.log(val);
		});
		$inputTo.on("change input ", function () {
			var val = +$(this).prop("value").replace(/\s/g, ''); // validate

			if (val < from) {
				val = from;
			} else if (val > max) {
				val = max;
			}

			instance.update({
				to: val
			});
			$(this).prop("value", currencyFormat(val));
		});
	});

	// Кнопка раскрытия содержимого
	$('.collaps-btn').on('click', function () {
        $(this).parent().toggleClass('collapsed');
        if($(this).parent().hasClass('collapsed')) {
            $(this).text($(this).data('collapsed-disabled'));
        }else {
            $(this).text($(this).data('collapsed-enabled'));
        }
    });

	// Раскрытие фильтра в каталоге для моб
	$('.filter-btn-js').on('click', function () {
		$('.catalog__sidebar').fadeToggle();
        $(this).toggleClass('collapsed');
        if($(this).hasClass('collapsed')) {
            $(this).text($(this).data('collapsed-disabled'));
        }else {
            $(this).text($(this).data('collapsed-enabled'));
        }
		
    });

}