const image = document.getElementById('image');
const statusDisplay = document.getElementById('status');
const bgColor = document.getElementById('main');

// this project doesnt work as intended

function setColor(){
    bgColor.classList.add("online");
}

async function connectionStatus() {
    try{
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
        image.src = "./images/connection.jpeg";
        setColor();
        return fetchResult.status > 200 && fetchResult.status < 300;
    } catch (error) {
        // console.log(error)
        statusDisplay.textContent = 'Opps your connection is down';
        image.src = "./images/kimi.jpeg";
        bgColor.classList.remove("online");
        return false;
    }
}

// monitor connection
setInterval(async () => {
    const result = await connectionStatus();
    if(result) {
        console.log('fired');
        statusDisplay.textContent = 'You are legend';
        setColor();
    }
}, 5000);

//check connection when the page loads

window.addEventListener('load', async (e) => {
    
    if (connectionStatus()) {
        statusDisplay.textContent = "You are good to go";
    } else {
        statusDisplay.textContent = "You are offline"
    }
})