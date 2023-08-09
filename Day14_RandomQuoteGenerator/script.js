const btn = document.querySelector(".get-quotes");
const number = document.getElementById('number');

const shuffle = (quotes) => {
    let CI = quotes.length;
    let tempValue;
    let randomIndex;
    //while elements exist in the array
    while (CI > 0) {
        randomIndex = Math.floor(Math.random() * CI);
        // decrease CI by 1
        CI --;
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes;
}

const getQuotes = async (e) => {
    e.preventDefault();
    const response = await fetch('https://type.fit/api/quotes');
    if (response.status !== 200) {
        throw new Error('cannot fetch data')
    }
    let quotes = await response.json();
    quotes = shuffle(quotes);
    
    quotes = quotes.slice(0,`${number.value}`);

    let output = "";
    quotes.forEach(quote => {
        output += `
        <hr>
        <ul>
            <li> Author: ${quote.author} </li>
            <li> Quote: ${quote.text} </li>
        </ul>
        `
    })
    document.querySelector('.quotes').innerHTML = output;
}

btn.addEventListener('click', getQuotes);
