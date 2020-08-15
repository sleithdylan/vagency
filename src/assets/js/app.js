import { gsap } from 'gsap';
import AOS from 'aos';

// Initialization
//- ----------------------------------------------
AOS.init({
  easing: 'ease-in-out',
  once: true,
  duration: 1000,
});

// Open/Close Hamburger Menu
//- ----------------------------------------------
const get = element => document.getElementById(element);

let open = get('menu-btn');
let nav = get('nav');
let exit = get('nav__btn--exit');

open.addEventListener('click', () => {
  nav.classList.add('open-nav');
});

exit.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});

// Create GSAP Instance
//- ----------------------------------------------
var tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from('.logo', { x: -50, opacity: 0 }, '-=.1');

tl.from('.stagger', { y: 50, opacity: 0, stagger: 0.7 }, '-=.7') // Fade Up
  .from('.hero__sponsors', { y: 50, opacity: 0, stagger: 0.7 }, '-=.7') // Fade Up
  .to('h1 span', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' }, '-=.8') // Swipe with Delay
  .from('.hero__content-visual', { scaleX: 0.8, scaleY: 0.8, opacity: 0 }, '-=1'); // Fade Up with Delay

// Carousel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 35,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        loop: true,
      },
      600: {
        items: 2,
        dots: false,
        loop: true,
      },
      1000: {
        items: 3,
        dots: true,
        loop: true,
      },
    },
  });
});

// Smooth Scroll
//- ----------------------------------------------
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
      }
    }
  });

// Custom Cursor Primary
//- ----------------------------------------------
let $cursor = $('.cursor');
let $cursorHover = $('.cursorHover');

// Move
function cursorMover(e) {
  gsap.to($cursor, {
    x: e.clientX,
    y: e.clientY,
  });
  gsap.to($cursorHover, {
    x: e.clientX,
    y: e.clientY,
  });
}

// Hover
function cursorHover(e) {
  gsap.to($cursor, {
    scale: 0,
  });
  gsap.to($cursorHover, {
    scale: 5,
    opacity: 0.25,
    ease: 'Power2.easeOut',
  });
}

// Normal
function cursor(e) {
  gsap.to($cursor, {
    scale: 0,
  });
  gsap.to($cursorHover, {
    scale: 1,
    opacity: 1,
    ease: 'Power2.easeOut',
  });
}

// Normal Hide
function cursorHide(e) {
  gsap.to($cursor, {
    scale: 0,
  });
  gsap.to($cursorHover, {
    scale: 0,
    opacity: 0,
    ease: 'Power2.easeOut',
  });
}

// Hover Hide
function cursorHoverHide(e) {
  gsap.to($cursor, {
    scale: 0,
  });
  gsap.to($cursorHover, {
    scale: 0,
    opacity: 0,
    ease: 'Power2.easeOut',
  });
}

$(window).on('mousemove', cursorMover);
$('a').hover(cursorHover, cursor);
$('.services__card').hover(cursorHover, cursor);
$('.testimonials__card').hover(cursorHover, cursor);
$('svg').hover(cursorHover, cursor);
$('.cell').hover(cursorHover, cursor);

// Custom Cursor Primary
//- ----------------------------------------------
let $cursorLight = $('.cursorLight');
let $cursorHoverLight = $('.cursorHoverLight');

// Move
function cursorMoverLight(e) {
  gsap.to($cursorLight, {
    x: e.clientX,
    y: e.clientY,
  });
  gsap.to($cursorHoverLight, {
    x: e.clientX,
    y: e.clientY,
  });
}

// Hover
function cursorHoverLight(e) {
  gsap.to($cursorLight, {
    scale: 0,
  });
  gsap.to($cursorHoverLight, {
    scale: 5,
    opacity: 0.25,
    ease: 'Power2.easeOut',
  });
}

// Normal
function cursorLight(e) {
  gsap.to($cursorLight, {
    scale: 0,
  });
  gsap.to($cursorHoverLight, {
    scale: 1,
    opacity: 1,
    ease: 'Power2.easeOut',
  });
}

$(window).on('mousemove', cursorMoverLight);
$('a').hover(cursorHoverLight, cursorLight);
$('svg').hover(cursorHoverLight, cursorLight);

if ($('.footer, a').on('mousemove', cursorMoverLight)) {
  $('.footer').hover(cursorHoverHide, cursor);
  $('a').hover(cursorHoverHide, cursorHide);
  $('svg').hover(cursorHoverHide, cursorHoverHide);
}
