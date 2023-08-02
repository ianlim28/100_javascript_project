const txt_input = document.querySelector('input');
const display_key = document.querySelector('.cnt-display');

txt_input.addEventListener('keyup', () => {
    display_key.innerHTML = txt_input.value.length;
});