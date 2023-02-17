const notes = [
    {
        "titulo": "Compras",
        "content": "Comprar frutas e legumes"
    },
    {
        "titulo": "Entregar o trabalho",
        "content": "Entregar o trabalho de estrutura de dados"
    }
]

const containerNotes = document.getElementById("container");

notes.forEach(note => {
    containerNotes.innerHTML += `
    <div class="noteCard">
        <h2 class="titleCard">${note.titulo}</h2>

        <p>
            ${note.content}
        </p>
    </div>
    `
});
