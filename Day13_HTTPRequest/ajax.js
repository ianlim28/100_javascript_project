const btn = document.getElementById('btn');

const getUsers = (e) => {
    e.preventDefault();
    const http = new XMLHttpRequest();
    http.open("GET",'https://jsonplaceholder.typicode.com/todos/');
    http.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText)
            const users = JSON.parse(this.responseText);
            let output = "";
            users.forEach(user => {
                output += `
                <hr>
                <ul>
                    <li> ID: ${user.id} </li>
                    <li> Title: ${user.title} </li>
                </ul>
                `
            });
        document.getElementById("users").innerHTML = output;
        }
    }
    
    http.send();
}

btn.addEventListener('click', getUsers);