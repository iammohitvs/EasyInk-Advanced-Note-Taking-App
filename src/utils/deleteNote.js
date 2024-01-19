export default function deleteNote(notes, setNotes, noteId) {
    const newNotes = notes.filter((note) => {
        return note.noteId !== noteId;
    });

    setNotes(newNotes);
}

