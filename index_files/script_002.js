"use strict";

document.addEventListener('DOMContentLoaded', function(){
	
	var header = document.querySelector('.js-header-stick');

	if(header){
		window.addEventListener("scroll", headerStick);
	}

	function headerStick(){
		var scrollTop = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;

		if(scrollTop > 100){
			header.classList.add('stick');
		} else {
			header.classList.remove('stick');
		}
	}

	var search = document.querySelector('.header__search');

	if(search){
		search.querySelector('.search__toggle').addEventListener('click', function(){
			if(search.classList.contains('active')){
				search.classList.remove('active');
			} else {
				search.classList.add('active');
			}
		});
	}

	if($('.js-fancybox').length){
		$('.js-fancybox').fancybox();	
	}


	$('.js-spoiler-toggle').click(function(){
		var box = $(this).closest('.js-spoiler-box');

		if(box.hasClass('active')){
			box.removeClass('active');
			box.find('.js-spoiler-hidden').removeAttr('style');
		} else {
			var h = box.find('.js-spoiler-content').innerHeight();

			box.addClass('active');
			box.find('.js-spoiler-hidden').height(h);
		}

	});


	function PopupWin(el, close){
		var close = close ? true : false;

		if(el.hasClass('active') && !close) return;

		if(el.hasClass('active')){
			$('body').removeClass('pop-up-enabled');
			
			$('body').scrollTop($('body').data('scrolltop'));
			$(window).scrollTop($('body').data('scrolltop'));

			el.removeClass('active').addClass('unactive');
				setTimeout(function(){
					el.removeClass('unactive');
				},200);
		} else {
			var scrolltop = $('body').scrollTop() ? $('body').scrollTop() : $(window).scrollTop();
			$('body').data('scrolltop', scrolltop);
			$('body').css('top', -scrolltop);

			el.removeClass('unactive');
			el.addClass('active');
			$('body').addClass('pop-up-enabled');
		}
	}
	function ShowForm(cls){
		if($('.popup-form.active').length){
			if($('.popup-form.active').hasClass(cls)){
				$('.popup-form.active').removeClass('active');
			} else {
				$('.popup-form.active').removeClass('active');
				$(cls).addClass('active');
			}
		} else {
			$(cls).addClass('active');
		}
	}

	$('.js-open-popup').click(function(e){
		e.preventDefault();

		PopupWin($('.popup-win'));
		ShowForm($($(this).data('target')));
	});

	$('.js-popup-close').click(function(e){
		e.preventDefault();

		PopupWin($('.popup-win'), true);
		$('.popup-form').removeClass('active');
	});

});