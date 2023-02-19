import { generateNote } from "./generateNotes.js";
import { generateNewNote } from "./notes.js";

const addBtn = document.getElementById("addNote");
const containerNewNote = document.getElementById("containerNewNote");

const submitButton = document.getElementById("submitNote");

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

    generateNewNote();
    generateNote();
});

generateNote();
