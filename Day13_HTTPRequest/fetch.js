const btn = document.getElementById('btn');
const getUsers = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    
        if(response.status !== 200) {
            throw new Error('cannot fetch the data'); //when you throw a new error, the promise inside async is rejected
        }
        const todos = await response.json(); 
        let output = "";
        todos.forEach( todo => {
            output += `
                <hr>
                <ul>
                    <li> ID: ${todo.id} </li>
                    <li> Title: ${todo.title} </li>
                </ul>
            `
        })
        document.getElementById("users").innerHTML = output;
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener('click', getUsers);