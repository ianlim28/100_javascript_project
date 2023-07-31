const submit = document.querySelector('.check-btn');
const result = document.querySelector('.result');

// const user_input = document.querySelector('#input-text').value;

const countVowels = (user_input) => {
    let clean_input = user_input.replace(/[^A-Za-z]/g, '').match(/[aeiou]/gi).length;
    result.innerHTML = `${user_input} has ${clean_input} ${clean_input > 1 ? 'vowels' : 'vowel'}`;

};

submit.addEventListener('click', () => {
    const user_input = document.querySelector('#input-text').value;
    countVowels(user_input);
})

