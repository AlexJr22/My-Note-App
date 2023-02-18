import { generateNotes } from "./generateNotes.js";
import { notes } from "./notes.js";

const addBtn = document.getElementById("addNote");
const submitButton = document.getElementById("submitNote");
const containerNewNote = document.getElementById("containerNewNote");
const inputTitle = document.getElementById("title");
const inputContent = document.getElementById("content");

containerNewNote.addEventListener("click", (e) => {
    if (e.target.id == "containerNewNote") {
        containerNewNote.classList.toggle("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (containerNewNote.className == "active" && e.key == "Escape") {
        containerNewNote.classList.toggle("active");
    }
});

addBtn.addEventListener("click", () => {
    containerNewNote.classList.toggle("active");
});

submitButton.addEventListener("click", () => {
    containerNewNote.classList.toggle("active");
    notes.push(
        {
            title: inputTitle.value,
            content: inputContent.value
        }
    );
    generateNotes();
});

generateNotes();
