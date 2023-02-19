const inputTitle = document.getElementById("title");
const inputContent = document.getElementById("content");

const generateNewNote = () => {
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
};

export { generateNewNote };
