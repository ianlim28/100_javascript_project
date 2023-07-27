const genButton = document.querySelector('.gen-btn');
const hexOutput = document.querySelector('.hex-code');

const randomCombo = () => {
    let num = Math.floor(Math.random() * 255 + 1);
    let hex = num.toString(16).toUpperCase();
    hex = hex.length < 2 ? "0".concat(hex) : hex;
    return hex;
}

const genHex = () => {
    let randomHex = "";
    for (let i = 0; i < 3; i++) {
        randomHex = randomHex.concat(randomCombo());
    }    
    return "#".concat(randomHex);
};

genButton.addEventListener('click', () => {
    hexOutput.innerHTML = genHex();
    document.body.style.backgroundColor = hexOutput.innerHTML;
})