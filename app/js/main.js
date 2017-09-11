document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    let scroll = new SmoothScroll('a[href*="#"]');
    
    const ACTIVE_CLASS = 'is-active';
  
    const dropdown = document.querySelector('.js-burger');
    const menu = document.querySelector('.header__nav-list');
    const menuItem = Array.from(document.querySelectorAll('.js-menu'));
  
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();  
      dropdown.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });

    menuItem.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.remove('is-active');
        menu.classList.remove('is-active');
      })
    });

    const slider = document.querySelector('.js_slider');
    lory(slider, { infinite: 1 });

    const win = window,
    docEl = document.documentElement,
    $header = document.querySelector('.header__wrapper');

    win.onscroll = function () {
      const sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
      if (sTop > 720) {
        $header.classList.add("no-bg");
        menu.classList.add("no-bg");
      } else {
        $header.classList.remove("no-bg");
        menu.classList.remove("no-bg");
      }
    };
  }
}
