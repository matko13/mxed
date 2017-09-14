document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    const docEl = document.documentElement;
    const header = document.querySelector('.header__wrapper');
    const dropdown = document.querySelector('.js-burger');
    const menu = document.querySelector('.header__nav-list');
    const slider = document.querySelector('.js_slider');
    const menuButtons = Array.from(document.querySelectorAll('.js-button'));
    const footerCloseIcon = document.querySelector('.js-footer__icon');
    lory(slider, { infinite: 1 });

    function closeMobileMenu() {
      dropdown.classList.remove('is-active');
      menu.classList.remove('is-active');
    }

    menuButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        closeMobileMenu()
      });
    })
    
    $('a').click(function() {
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 30
      }, 500);
      closeMobileMenu();
      return false;
    });
  
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();  
      dropdown.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });

    window.onscroll = function () {
      const sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
      if (sTop > 625) {
        header.classList.add('no-bg');
        menu.classList.add('no-bg');
      } else {
        header.classList.remove('no-bg');
        menu.classList.remove('no-bg');
      }
    };

    footerCloseIcon.addEventListener('click', (e) => {
      e.stopPropagation();  
      document.querySelector('.footer__wrapper').style.display = 'none';
    });
  }
}
