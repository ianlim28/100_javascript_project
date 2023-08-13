const api = {
    key: '',
    baseLonLat: 'https://api.openweathermap.org/geo/1.0/'
}

// The https://openweathermap.org/api doesnt have a free version of API other than long lat, therefore i wont go ahead

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');


const getLonLat = async () => {

    const response = await fetch(`${api.baseLonLat}direct?q=${search.value}&limit=5&appid=${api.key}`);
    if(response.status !==200) {
        throw new Error('cannot fetch Lon Lat');
    }
    const data = await response.json();
    const firstLocation = data[0];
    const { lon, lat } = firstLocation;
    console.log(lon, lat)
    return {lon, lat};
}

const getData = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api.key}`);
    console.log(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api.key}`);
    if(response.status !==200){
        throw new Error('cannot fetch weather data')
    }
    const data = await response.json()
    return data;
}

const getInput = async (e) => {
    e.preventDefault();
    if (e.type == "click") {
        try {
            const { lon, lat } = await getLonLat(search.value);
            const result = await getData(lat, lon);
            console.log(result);
            // console.log(lon, lat);
        } catch (error) {
            console.error(error);
        }
    }
}


btn.addEventListener('click', getInput);
