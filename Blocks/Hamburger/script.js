"use strict";
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const aside = document.querySelector('.aside__nav');
menuBtn.addEventListener('click', event => {
  event.preventDefault();
  menuBtn.classList.toggle('menu-btn_active');
  menu.innerHTML = aside.innerHTML + navigation.innerHTML;
  menu.classList.toggle('menu_active');
});
