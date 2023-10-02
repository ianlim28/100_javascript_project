const searchForm = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#search-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction = document.querySelector(".instruction");
const speechSynthesis = window.speechSynthesis;

// check if the user's browser supports webspeech API
if (speechSynthesis) {
    console.log("speech supported");

    // create a new speech recognition object

    const recognition = new webkitSpeechRecognition();
    micBtn.addEventListener("click", speak);

    function speak(e) {
        e.preventDefault();
        const inputValue = input.value;
        const speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = inputValue;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        speech.voice = speechSynthesis.speak(speech);
    };

} else {
    console.log("speech synthesis NOT supported");
    speechBtnDiv.style.visibility = 'hidden';
}

