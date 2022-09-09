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