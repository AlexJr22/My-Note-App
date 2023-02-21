import { Notes } from "./notes.js";

const containerNotes = document.getElementById("container");

const generateNote = () => {
    containerNotes.innerHTML = "";

    // recuperando as notas no localStorage
    const savedNotes = localStorage.getItem("AllNotes");
    const notes = savedNotes ? JSON.parse(savedNotes) : [];

    // gerando notas para cada item no array
    notes.forEach((note, index) => {
        let divNoteCard = document.createElement("div");
        divNoteCard.classList.add("noteCard");

        let div = document.createElement("div");

        let h2Title = document.createElement("h2");
        h2Title.classList.add("titleCard");
        h2Title.innerHTML = `${note.title}`;

        let buttonDelete = document.createElement("button");
        buttonDelete.classList.add("deleteNote");
        buttonDelete.innerHTML = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
        >
            <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
            />
        </svg>
        `;

        buttonDelete.addEventListener("click", () => Notes.DeleteNote(index));

        div.appendChild(h2Title);
        div.appendChild(buttonDelete);

        let p = document.createElement("p");
        p.innerHTML = `${note.content}`;

        divNoteCard.appendChild(div);
        divNoteCard.appendChild(p);

        containerNotes.appendChild(divNoteCard);
    });
};

export { generateNote };
