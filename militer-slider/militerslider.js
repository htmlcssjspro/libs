"use strict";
class MiliterSlider {

  constructor(options) {
    this.main = document.querySelector(options.main);
    this.control = document.querySelector(options.control);
    this.wrapper = this.main.querySelector(options.wrapper);
    this.slides = this.wrapper.children;
    console.log('this.slides: ', this.slides);
    this.slidesQuantity = this.slides.length;

    this.arrows = options.arrows ? options.arrows : true;
    this.prev = options.prev;
    this.next = options.next;
    this.dots = options.dots ? options.dots : true;
    this.infinity = options.infinity ? options.infinity : true;
    this.slidesToShow = options.slidesToShow ? options.slidesToShow : 1;

    this.positionMin = 0;
    this.positionMax = this.slidesQuantity - this.slidesToShow;
    this.position = options.startPosition ? options.startPosition : 0;
    this.transform = 0;
    this.step = 100 / this.slidesToShow;


    // this.addStyle();
    this.addMiliterClass();
    this.sliderControls();

  }

  init() {}

  addMiliterClass() {
    this.main.classList.add('militer-slider');
    this.wrapper.classList.add('militer-slider__wrapper');
    for (let slide of this.slides) {
      slide.classList.add('militer-slider__slide');
      slide.style.flex = `0 0 ${this.step}%`;
    }
  }

  // addStyle() {
  //   const style = document.createElement('style');
  //   style.id = 'militer-slider-style';
  //   style.innerHTML = `
  //     .militer-slider {
  //       overflow: hidden !important;}
  //     .militer-slider__wrapper {
  //       display: -webkit-box !important;
  //       display: flex !important;
  //       -webkit - transition: -webkit - transform 0.5 s;
  //       transition: -webkit - transform 0.5 s;
  //       transition: transform 0.5 s;
  //       transition: transform 0.5 s, -webkit - transform 0.5 s;
  //     }
  //     .militer-slider__slide {
  //       -webkit-box-flex: 0 !important;
  //       flex: 0 0 ${100/this.slidesToShow}% !important;}
  //     .militer-slider__dots {
  //       display: -webkit-box !important;
  //       display: flex !important;
  //       -webkit-box-pack: center !important;
  //       justify-content: center !important;
  //       -webkit-box-align: center !important;
  //       align-items: center !important;}
  //     .militer-slider__dot {
  //       margin: 1 em;
  //       width: 0.5 em;
  //       height: 0.5 em;
  //       border - radius: 0.25 em;
  //       background: #6c757d;}
  //     .militer-slider__dot.active {
  //       background: #007bff;}
  //   `;
  //   this.main.prepend(style);
  // }

  sliderControls() {

    if (this.arrows) {
      if (!this.prev || !this.next) {
        const prev = document.createElement('button');
        prev.classList.add('militer-slider__arrow_prev');
        prev.innerText = '<';
        const next = document.createElement('button');
        next.classList.add('militer-slider__arrow_next');
        next.innerText = '>';
        const arrows = document.createElement('div');
        arrows.classList.add('militer-slider__arrows');
        arrows.append(prev, next);

        this.main.append(arrows);
        // this.wrapper.append(arrows);

      } else {}
      this.prev = this.main.querySelector('.militer-slider__arrow_prev');
      this.prev.addEventListener('click', () => {
        this.swipe('prev');
      });
      this.next = this.main.querySelector('.militer-slider__arrow_next');
      this.next.addEventListener('click', () => {
        this.swipe('next');
      });
    }

    if (this.dots) {
      const dots = document.createElement('div');
      dots.classList.add('militer-slider__dots');
      for (let i = 0; i < this.slidesQuantity; i++) {
        const dot = document.createElement('span');
        dot.classList.add('militer-slider__dot');
        dots.append(dot);
      }
      dots.children[this.position].classList.add('active');
      this.main.append(dots);

      this.dots = this.main.querySelector('.militer-slider__dots');
    }
  }

  swipe(position) {
    if (position === 'next' && this.position < this.positionMax) {
      this.transform -= this.step;
      ++this.position;
    }
    if (position === 'prev' && this.position > this.positionMin) {
      this.transform += this.step;
      --this.position;
    }
    if (position !== 'prev' && position !== 'next') {
      this.transform += this.step * (this.position - position);
      this.position = position;
    }

    if (this.dots) {
      this.dots.querySelector('.active').classList.remove('active');
      this.dots.children[this.position].classList.add('active');
    }

    this.wrapper.style.transform = `translateX(${this.transform}%)`;
  }
}
