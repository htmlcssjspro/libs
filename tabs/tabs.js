const tabs = document.querySelector('.tabs');
tabs.querySelectorAll('.tabs__link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const link = event.currentTarget;
    if (!link.classList.contains('active')) {
      const img = link.dataset.img;
      const content = link.dataset.content;
      tabs.querySelector('.tabs__link.active').classList.remove('active');
      link.classList.add('active');
      tabs.querySelector('.tabs__img .active').classList.remove('active');
      tabs.querySelector(`.tabs__img_${img}`).classList.add('active');
      tabs.querySelector('.tabs__content .active').classList.remove('active');
      tabs.querySelector(`.tabs__content_${content}`).classList.add('active');
    }
  });
});
