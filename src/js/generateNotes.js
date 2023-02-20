const containerNotes = document.getElementById("container");

const generateNote = () => {
    // containerNotes.innerHTML = "";

    // recuperando as notas no localStorage
    const savedNotes = localStorage.getItem("AllNotes");
    const notes = savedNotes ? JSON.parse(savedNotes) : [];

    // gerando notas para cada item no array
    notes.forEach((note) => {
        containerNotes.innerHTML += `
        <div class="noteCard">
            <div>
                <h2 class="titleCard">${note.title}</h2>

                <button id="deleteNote">
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
                </button>
            </div

            <p>
                ${note.content}
            </p>
        </div>
        `;
    });
};

export { generateNote };
