import { notes } from "./notes.js";

const containerNotes = document.getElementById("container");

const generateNotes = () => {
    containerNotes.innerHTML = "";
    notes.forEach((note) => {
        containerNotes.innerHTML += `
        <div class="noteCard">
            <h2 class="titleCard">${note.title}</h2>

            <p>
                ${note.content}
            </p>
        </div>
        `;
    });
};

export { generateNotes };
