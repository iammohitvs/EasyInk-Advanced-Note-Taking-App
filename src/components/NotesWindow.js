import React, { useContext } from "react";

import Note from "./Note";
import { NotesContext } from "../App";

export default function NotesWindow() {
    const { notes, setNotes } = useContext(NotesContext);

    return (
        <div className="ml-[320px] p-[20px] w-[100%]">
            <h1 className="text-3xl mb-[16px] pb-[12px] border-b-2 font-semibold">
                Notes
            </h1>
            <div className="flex flex-row flex-wrap justify-start align-baseline gap-[16px]">
                {notes.map((note, index) => (
                    <Note
                        note={note}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
