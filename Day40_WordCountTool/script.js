let input = document.querySelector(".input"),
character = document.querySelector(".character"),
word = document.querySelector(".word"),
readingTime = document.querySelector(".reading-time"),
wordLimit = document.querySelector(".word-limit");
// WORD_LIMIT = 225 ;

input.addEventListener("keyup", characterCount);
input.addEventListener("keyup", wordCounter);

function characterCount() {
    character.innerHTML = input.value.length;
}

function wordCounter(e) {
    // gi is caseinsensitive
    let words = input.value.match(/\b[-?'?(\w+)?]+\b/gi);
    let wordsLeft = 255;

    if (words) {
        word.innerHTML = words.length;
        wordLimit.innerHTML = wordsLeft - words.length;    
    } else {
        word.innerHTML = 0;
    }

    // word limit block
    input.addEventListener("keydown", (e) => {
        let words = input.value.match(/\b[-?'?(\w+)?]+\b/gi);
        if (words && words.length > wordsLeft - 1 && e.code !== "Backspace") {
            e.preventDefault();
            console.log("limit reached")
        }
    });

    // reading time based on 225 words/min
    if (words) {
        let seconds = Math.floor((words.length * 60) / 225);
        if (seconds > 59) {
            const minutes = Math.floor(seconds / 60);
            seconds = seconds - minutes * 60;
            readingTime.innerHTML = minutes + "m" + seconds + "s";
        } else {
            readingTime.innerHTML = seconds + "s";
        } 
    } else {
            readingTime.innerHTML = 0 + "s";
        }
}
