const jokes = document.querySelector(".joke"),
btn = document.querySelector(".btn"),
url = "https://api.chucknorris.io/jokes/random";


const getJoke = async () => {
    const response = await fetch(url);

    if(response.status !== 200) {
        throw new Error("Cannot fetch data");
    } 

    const data = await response.json();
    console.log(data.value);
    jokes.innerHTML = data.value;
    return data 
}

btn.addEventListener("click", getJoke);