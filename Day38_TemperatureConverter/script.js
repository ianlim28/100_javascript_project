let celsius = document.querySelector(".celcius"),
fahrenheit = document.querySelector(".fahrenheit"),
kelvin = document.querySelector(".kelvin"),
form = document.querySelector("form");


//event delegation
//Pounds converter
form.addEventListener('input', convertTemperature);

function convertTemperature(e) {
    e.preventDefault();
    if (e.target.classList.contains("celcius")) {
        let x = parseFloat(e.target.value);
        fahrenheit.value =((x * 1.8) + 32).toFixed(2);
        kelvin.value = (x + 273.15).toFixed(2);
        
    }

    if (e.target.classList.contains("fahrenheit")) {
        let x = parseFloat(e.target.value);
        celsius.value = ((x - 32) / 1.8).toFixed(2); 
        kelvin.value = ((x -32) / 1.8 + 273.15).toFixed(2);
    }

    if (e.target.classList.contains("kelvin")) {
        let x = parseFloat(e.target.value);
        fahrenheit.value = ((x - 273.15) * 1.8 + 32).toFixed(2);
        celsius.value = (parseFloat(x) - 273.15).toFixed(2);
    }
}