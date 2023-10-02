const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#search-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction = document.querySelector(".instruction");
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// check if the user's browser supports webspeech API
if (speechRecognition) {
    console.log("speech supported");

    // create a new speech object

    const recognition = new speechRecognition();
    micBtn.addEventListener("click", micBtnClicked);

    function micBtnClicked(e) {
        e.preventDefault();
        if (micBtn.classList.contains("fa-microphone")) {
            recognition.start();
        } else {
            recognition.stop();
        }       
    }
    // start speech recognition
    recognition.addEventListener("start", () => {
        micBtn.classList.remove("fa-microphone");
        micBtn.classList.add("fa-microphone-slash");
        instruction.textContent = "Recording...";
        searchInput.focus();
        console.log("Speech recog enabled");
    });

    // stop speech recognition
    recognition.addEventListener("end", () => {
        micBtn.classList.remove("fa-microphone-slash");
        micBtn.classList.add("fa-microphone");
        instruction.textContent = "Click the Mic icon to start";
        searchInput.focus();
        console.log("Speech recog disabled");
    });

    // get result of speech recognication
    recognition.continuous = true;
    let content = "";
    recognition.addEventListener("result", (e) => {
        console.log(e);
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        content += transcript;
        searchInput.value = content;
        searchInput.focus();
    })

} else {
    console.log("speech NOT supported");
    speechBtnDiv.style.visibility = 'hidden';
}





