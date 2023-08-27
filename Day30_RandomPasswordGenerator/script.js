const empty = "",
uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lCase = "abcdefghijklmnopqrstuvwxyz",
number = "0123456789",
symbol = "!@#$%^&*()_+=";

const pLength = document.getElementById('p-length'),
upperCase = document.getElementById('p-uppercase'),
lowerCase = document.getElementById('p-lowercase'),
pNumber = document.getElementById('p-number'),
pSymbol = document.getElementById('p-symbol'),
submit = document.getElementById('submit'),
password = document.getElementById('password'),
copy = document.getElementById('copy');

const generatePassword = (l, initialPassword) => {
    let pass = "";
    for (let i = 0; i < l; i++ ) {
        pass += initialPassword.charAt(
            Math.floor(Math.random() * initialPassword.length)
            );
    }
    return pass;
}


submit.addEventListener('click', () => {
    let initialPassword = "";
    // add character if an option is checked
    upperCase.checked ? (initialPassword += uCase) : "";
    lowerCase.checked ? (initialPassword += lCase) : "";
    pNumber.checked ? (initialPassword += number) : "";
    pSymbol.checked ? (initialPassword += symbol) : "";

    password.value = generatePassword(pLength.value, initialPassword);
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  }
  

copy.addEventListener('click', () => {
    if (password.value == "") {
        alert('Please generate a password')
    } else {
        // password.select();
        copyToClipboard(password.value);
    }
})