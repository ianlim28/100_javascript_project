const search = document.querySelector("input");
const form = document.querySelector("form");
const searchResults = document.querySelector(".results");
const errorMsg = document.querySelector(".alert.alert-danger");
const line = document.querySelector("hr");

const apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = search.value;
    if (searchValue === "") {
        errorMessage("Search cannot be empty, i need a search term");
    } else {
        getResults(searchValue);
    }
})

// error message
function errorMessage(msg) {
    errorMsg.style.display = 'block';
    line.style.display = 'block';
    errorMsg.textContent = msg;
}

async function getResults(searchVal) {
    const response = await fetch(apiURL + searchVal);
    const results = await response.json();
    console.log(results);
    if (results.query.search.length == 0) {
        return errorMessage("Invalid search, please enter another search term");
    } else {
        displayResults(results);
    }
}


// display results
function displayResults(results) {
    line.style.display = 'block';
    let output = "";
    results.query.search.forEach((result) => {
        let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;
        output += `
        <div class="result p-2">
        <a href="${resultURL}" class="h3 fw-bold" target="_blank" rel="noopener">${result.title}</a>
        <br>
        <a class="fs-5 text-success" target="_blank" rel="noopener">${resultURL}</a>
        <p class="fs-5">
          ${result.snippet}
        </p>
      </div>
        `;
    searchResults.innerHTML = output;
    })
}


