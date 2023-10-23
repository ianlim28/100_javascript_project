const rangeSlider = document.querySelector("input");
const valueEl = document.querySelector(".value");
rangeSlider.oninput = function () {
    valueEl.textContent = rangeSlider.value;
    
}