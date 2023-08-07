const userLocation = document.querySelector(".location"); 
const btn = document.querySelector(".btn"); 

const showPosition = (position) => {
    userLocation.innerHTML = `
        Latitude: ${position.coords.latitude} <br>
        Longitude: ${position.coords.longitude}
    `
}

btn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(showPosition);
})