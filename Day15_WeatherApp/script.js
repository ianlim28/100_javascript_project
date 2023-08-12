const api = {
    key: '2b7a85fd68e4df0c1717dcf33693c087',
    base: 'https://api.openweathermap.org/geo/1.0/'
}

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

// const displayData = () => {
//     console.log()
// }

const getData = async () => {

    const response = await fetch(`${api.base}direct?q=${search.value}&limit=5&appid=${api.key}`);
    if(response.status !==200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    const firstLocation = data[0];
    const { lon, lat } = firstLocation;
    return {lon, lat};
}

const getInput = async (e) => {
    e.preventDefault();
    if (e.type == "click") {
        try {
            const { lon, lat } = await getData(search.value);
            console.log(lon, lat);
        } catch (error) {
            console.error(error);
        }
    }
}


btn.addEventListener('click', getInput);
