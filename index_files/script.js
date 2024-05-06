"use strict";

//var $ = require( "jquery" );

//import { spoiler } from '@utils/spoiler';

require('@libs/jquery.fancybox.min.js');
//require('@libs/slick.min.js');
//require('@libs/jquery.mCustomScrollbar.min.js');
//require('@libs/jquery.maskedinput.min.js');
//require('@libs/jquery-ui.min.js');

document.addEventListener('DOMContentLoaded', () => {
  const questionsList = document.querySelectorAll('.b-spoiler__item');
	console.log('check')
  if (questionsList.length >= 1) {
    questionsList.forEach((question) => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
      })
    })
  }
})

$(document).ready(function() {

	if(typeof isMobile == 'undefined'){
		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};
	}


	$('.actions-intro__slider').slick({
		infinite: false,
		autoplay: false,
		swipe:true,
		pauseOnHover: false,
		touchMove:true,
		slide: '.actions-intro__slide',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		appendDots: '.actions-intro__dots',
	});
});