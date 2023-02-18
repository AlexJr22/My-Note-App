const notes = [
    {
        title: "Compras",
        content: "Comprar frutas e legumes",
    },
    {
        title: "Entregar o trabalho",
        content: "Entregar o trabalho de estrutura de dados",
    },
];

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

const addBtn = document.getElementById("addNote");

const containerNewNote = document.getElementById("containerNewNote");

// containerNewNote.addEventListener("click", (event) => console.log(event));
document.addEventListener("keydown", (e) => {
    if (containerNewNote.className == "active" && e.key == "Escape") {
        containerNewNote.classList.toggle("active");
    }
});


addBtn.addEventListener("click", (e) => {
    containerNewNote.classList.toggle("active");
});

generateNotes();
