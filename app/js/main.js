document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    const ACTIVE_CLASS = 'is-active';
  
    const dropdown = document.querySelector('.js-burger');
  
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();  
      dropdown.classList.toggle('is-active');
    });

    const win = window,
    docEl = document.documentElement,
    $header = document.querySelector('.header__wrapper');

    win.onscroll = function () {
      const sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
      if (sTop > 720) {
        $header.classList.add("no-bg");
      } else {
        $header.classList.remove("no-bg");
      }
    };
   
    const scroll = new SmoothScroll('a[href*="#"]');    
  }
}
