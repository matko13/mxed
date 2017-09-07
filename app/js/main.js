document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    const ACTIVE_CLASS = 'is-active';
  
    const dropdown = document.querySelector('.js-burger');
  
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();  
      dropdown.classList.toggle('is-active');
    });
  }
}
