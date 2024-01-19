import React, { useContext } from "react";
import { useState } from "react";

import { NotesContext } from "../App";

import { allTags } from "../scritps/constants";

export default function NewNoteForm({ handleDismiss }) {
    const { notes, setNotes } = useContext(NotesContext)

    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const [tag, setTag] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();

        let newNotes = [];
        const newNote = {
            noteId: crypto.randomUUID(),
            noteTitle: noteTitle,
            noteBody: noteBody,
            noteTag: tag,
        };

        newNotes = [...notes, newNote];

        setNotes(newNotes);

        handleDismiss();
    }

    return (
        <form className="flex flex-col gap-[16px]" onSubmit={handleFormSubmit}>
            <input
                value={noteTitle}
                onChange={(event) => {
                    setNoteTitle(event.target.value);
                }}
                type="text"
                id="noteTitle"
                maxLength={30}
                placeholder="Note Title"
                className="w-[24rem] p-[8px] text-xl semibold"
                required
            />
            <textarea
                value={noteBody}
                onChange={(event) => {
                    setNoteBody(event.target.value);
                }}
                id="noteBody"
                name="story"
                rows="5"
                cols="33"
                className="p-[8px] text-md"
                maxLength={300}
                placeholder="Note Body"
                required
            ></textarea>
            <select
                value={tag}
                onChange={(event) => {
                    setTag(event.target.value);
                }}
                className="w-[100%] p-[8px] text-lg"
            >
                <option value="">— Select Tag —</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>
            <button className="text-white bg-black text-lg rounded-md p-[8px]">
                Add Note
            </button>
        </form>
    );
}
