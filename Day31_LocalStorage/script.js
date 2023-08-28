// console.log(Object.getOwnPropertyNames(window));

// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key","value");
window.localStorage.setItem("firstName","Lewis");
window.localStorage.setItem("lastName","Hamilton");

// localStorage can only store strings

const person = {
    fullName: "Lewis Hamilton",
    location: "New York"
}

localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Pineapple", "Mango","Pawpaw"];

localStorage.setItem("fruits",JSON.stringify(fruits));

// get item from localStorage
console.log(localStorage.getItem("fruits"));

// remove item from local storage
localStorage.removeItem("person");

// clear everything from local storage
// localStorage.clear();


// pick a specific local storage
console.log(localStorage.key(0));
