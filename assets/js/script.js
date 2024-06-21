'use strict';

// * add event on element
const addEventOnElement = function (element, type, callback) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, callback);
    }
  } else {
    element.addEventListener(type, callback);
  }
};

// * navbar toggle
const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelectorAll('[data-nav-link');
const navToggler = document.querySelector('[data-nav-toggler]');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  navToggler.classList.toggle('active');
  document.body.classList.toggle('active');
};

addEventOnElement(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove('active');
  navToggler.classList.remove('active');
  document.body.classList.remove('active');
};

addEventOnElement(navbarLinks, 'click', closeNavbar);

// * header active
const header = document.querySelector('[data-header]');

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

addEventOnElement(window, 'scroll', activeHeader);

// * toggle active on add to fav
const addToFavBtns = document.querySelectorAll('[data-add-to-fav]');

const toggleActive = function () {
  this.classList.toggle('active');
};

addEventOnElement(addToFavBtns, 'click', toggleActive);

// * scroll revreal effect
const sections = document.querySelectorAll('[data-section]');
const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add('active');
    } else {
      sections[i].classList.remove('active');
    }
  }
};

scrollReveal();

addEventOnElement(window, 'scroll', scrollReveal);
