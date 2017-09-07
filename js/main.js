document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    const options = document.querySelectorAll('.js-select-form__item');
    const selectButton = document.querySelector('.js-select-form__button');
    const form = document.querySelector('.js-select-form');

    selectButton.addEventListener('click', (event) => {
      event.preventDefault();
      form.classList.add('is-animated');

      setTimeout(() => {
        event.target.textContent = 'Thank you!';
        form.classList.add('is-submitted');

        options.forEach((option) => {
          if (option.childNodes[1].checked) {
            option.classList.add('is-selected');
          } else {
            option.classList.add('is-hidden');
          }
        });
      }, 1000);
    });
  }
}
