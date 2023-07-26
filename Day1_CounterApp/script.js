const subtract = document.querySelector('.subtract');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');
const num_display = document.querySelector('.count')
const buttons = document.querySelector('.buttons')

// this was my way, but use delegation instead
// let num = 0;

// const updateDisplay = () => {num_display.textContent = num};

// subtract.addEventListener('click', () => {
//     num --;
//     updateDisplay();
// })

// reset.addEventListener('click', () => {
//     num = 0;
//     updateDisplay();
// })

// add.addEventListener('click', () => {
//     num ++;
//     updateDisplay();
// })



buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('add')){
        num_display.innerHTML ++;
        setColor();
    } else if (e.target.classList.contains('subtract')) {
        num_display.innerHTML --;
        setColor();
    } else if (e.target.classList.contains('reset')) {
        num_display.innerHTML = 0;
        setColor();
    }
});

const setColor = () => {
    if (num_display.innerHTML > 0){
        num_display.style.color = 'yellow';
    } else if (num_display.innerHTML < 0) {
        num_display.style.color = 'red';
    } else if (num_display.innerHTML == 0) {
        num_display.style.color = 'white';
    }
};


