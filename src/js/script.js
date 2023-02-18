import { generateNotes } from "./generateNotes.js";

const addBtn = document.getElementById("addNote");
const containerNewNote = document.getElementById("containerNewNote");

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

generateNotes();
