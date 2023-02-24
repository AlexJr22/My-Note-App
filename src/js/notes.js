import { generateNote } from "./generateNotes.js";

const inputTitle = document.getElementById("title");
const inputContent = document.getElementById("content");

const Notes = {
    generateNewNote: () => {
        // recuperando as notas no localStorage
        const savedNotes = localStorage.getItem("AllNotes");
        const notes = savedNotes ? JSON.parse(savedNotes) : [];

        // criar um objeto para adicionar uma nova nova
        const newNote = [];

        newNote.push({
            title: inputTitle.value,
            content: inputContent.value,
        });

        notes.push(newNote[0]);
        console.log(notes);
        localStorage.setItem("AllNotes", JSON.stringify(notes));

        inputTitle.value = "";
        inputContent.value = "";
    },

    DeleteNote: (index) => {
        const savedNotes = localStorage.getItem("AllNotes");
        const notes = JSON.parse(savedNotes);

        notes.splice(index, 1);

        localStorage.setItem("AllNotes", JSON.stringify(notes));
        console.log(notes);
        generateNote();
    },
};

export { Notes };
