const containerNotes = document.getElementById("container");

const generateNote = () => {
    containerNotes.innerHTML = "";

    // recuperando as notas no localStorage
    const savedNotes = localStorage.getItem("AllNotes");
    const notes = savedNotes ? JSON.parse(savedNotes) : [];

    // gerando notas para cada item no array
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

export { generateNote };
