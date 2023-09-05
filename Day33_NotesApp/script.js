const noteBtn = document.getElementById('add-btn'),
noteTitle = document.getElementById('note-title'),
noteText = document.getElementById('note-text'),
clear = document.querySelector('.clear');


// get notes from localstorage
function getNotes () {
    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesObj = []  
    } else {
        notesObj = JSON.parse(notes);
    }
}

// Note btn event listener
noteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // if (noteTitle.value == "" || noteText.value == ""){
    if (!noteTitle || !noteText){
        alert("Please fill in all fields");
    }

    getNotes() //notesObj array

    let myObj = {
        title: noteTitle.value,
        text: noteText.value,
    }

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    document.querySelector("form").reset();
    showNotes();
})

// Display notes on the page
function showNotes() {
    getNotes()
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="note">
        <div class="note-cta">
          <p class="note-counter">
            Note ${index + 1}
          </p>
          <div class="note-cta-btn">
            <button id="${index}" onClick="deleteNote(this.id)" class="notes-btn"> <i class="fas fa-trash"></i>
              Delete</button>
            <button id="${index}" onClick="editNote(this.id)" class="notes-btn edit-btn"> <i class="fas fa-edit"></i>
            
              Edit</button>
          </div>
        </div>
        <hr>
        <h3 class="note-title">Title: ${element.title}</h3>
        <p class="note-text">${element.text}</p>
      </div>
        `;
    });
    

    if (notesObj.length != 0) {
        document.getElementById("notes").innerHTML=html;
    } else {
        document.getElementById("notes").innerHTML="There is no notes, please add";
    }
}

// delete a single note
function deleteNote(index) {
    let confirmDel = confirm("Delete this note");
    if (confirmDel) {
        getNotes();
        notesObj.splice(index,1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}

//Delete all notes
clear.addEventListener('click', () => {
    let confirmClearAll = confirm ("Are you sure?");
    localStorage.clear();
    showNotes();
})

// edit note
function editNote(index) {
    if (noteTitle.value !== "" || noteText.value !== "") {
      return alert("Please clear the form before editing");
    }
    getNotes();
  
    noteTitle.value = notesObj[index].title;
    noteText.value = notesObj[index].text;
  
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }
  
showNotes();