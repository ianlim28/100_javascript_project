const submit = document.querySelector('.check-btn');
const result = document.querySelector('.result');

// udemy's result is a little diff but would produce the same outcome
// it takes the first and last letter and flips it around
const checkPalindrome = (user_input) => {
    let clean_input = user_input.toLocaleLowerCase().replace(/[^A-Za-z]/g, '');
    let rev = Array.from(clean_input).reverse().join('');    
       
    result.innerHTML = `${user_input} is ${clean_input === rev ? '' : 'not '}a palindrome`;
};

submit.addEventListener('click', () => {
    const user_input = document.querySelector('#input-text').value;
    checkPalindrome(user_input);
})

