import { gsap } from 'gsap';
import AOS from 'aos';

AOS.init({
  easing: 'ease-in-out',
  once: true,
  duration: 1000,
});

// Open/Close Hamburger Menu
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
var tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from('.logo', { x: -50, opacity: 0 }, '-=.1');

tl.from('.stagger', { y: 50, opacity: 0, stagger: 0.7 }, '-=.7') // Fade Up
  .from('.hero__sponsors', { y: 50, opacity: 0, stagger: 0.7 }, '-=.7') // Fade Up
  .to('h1 span', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' }, '-=.8') // Swipe with Delay
  .from('.hero__content-visual', { scaleX: 0.8, scaleY: 0.8, opacity: 0 }, '-=1'); // Fade Up with Delay
