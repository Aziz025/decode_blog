const buttonMore = document.querySelector('.button-more');
const options = document.querySelector('.options');

buttonMore.addEventListener('click', () => {
    options.classList.toggle('show');
});