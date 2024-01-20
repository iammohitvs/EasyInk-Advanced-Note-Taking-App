import React from "react";
import { useContext } from "react";

import { NotesContext } from "../App";

import deleteNote from "../utils/deleteNote";

export default function ConfirmDeleteForm({ handleDismiss, noteId }) {
    const { notes, setNotes } = useContext(NotesContext);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                deleteNote(notes, setNotes, noteId);
                handleDismiss();
            }}
            className="flex flex-col gap-[16px] text-center"
        >
            <h2 className="text-xl ">
                Are you sure you want to delete this note?
            </h2>
            <div className="flex flex-col md:flex-row justify-between gap-[16px]">
                <button
                    onClick={handleDismiss}
                    className="grow rounded-md text-lg hover:bg-gray-100 py-[8px]"
                >
                    Cancel
                </button>
                <button
                    onClick={() => {
                        deleteNote(notes, setNotes, noteId);
                        handleDismiss();
                    }}
                    className="grow rounded-md text-lg bg-black text-white hover:bg-gray-800 py-[8px]"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
}
