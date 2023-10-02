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
        instruction.textContent = "Recording... press control S to stop recording if you want";
        searchInput.focus();
        console.log("Speech recog enabled");
    });

    // stop speech recognition
    recognition.addEventListener("end", () => {
        micBtn.classList.remove("fa-microphone-slash");
        micBtn.classList.add("fa-microphone");
        instruction.textContent = "Press Ctrl + X or Click the Mic icon to start";
        searchInput.focus();
        console.log("Speech recog disabled");
    });

    // get result of speech recognication
    recognition.continuous = true;
    // let content = "";
    recognition.addEventListener("result", (e) => {
        console.log(e);
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;

        if (transcript.toLowerCase().trim() === "stop recording") {
            recognition.stop();
        } else if (!searchInput.value) {
            searchInput.value = transcript;
        } else {
            if (transcript.toLowerCase().trim() === "search") {
                searchForm.submit();
            } else if (transcript.toLowerCase().trim() === "reset form") {
                searchInput.value = "";
            } else {
                searchInput.value = transcript;    
            }
        };
    })

  // Add keyboard Event Listener
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "x") {
      // e.shiftKey
      recognition.start();
    }

    if (e.ctrlKey && e.key === "s") {
        // e.shiftKey
        recognition.stop();
      }
  });

} else {
    console.log("speech NOT supported");
    speechBtnDiv.style.visibility = 'hidden';
}





