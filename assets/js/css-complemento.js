const contactoInput = document.querySelectorAll('.formcontato__input');
const contactoTextarea = document.querySelector('.formcontato__textarea');

contactoInput.forEach(input => {
    input.addEventListener('click', e => e.target.previousElementSibling.style.color = '#2A7AE4');
    input.addEventListener('blur', e => e.target.previousElementSibling.style.color = 'inherit');
});

contactoTextarea.addEventListener('click', e => e.target.previousElementSibling.style.color = '#2A7AE4');
contactoTextarea.addEventListener('blur', e => e.target.previousElementSibling.style.color = 'inherit');