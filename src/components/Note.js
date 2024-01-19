import React, { useContext } from "react";

import Tag from "./Tag";
import { NotesContext } from "../App";

import deleteNote from "../utils/deleteNote";

import { Trash2 } from "react-feather";

export default function Note({ note }) {
    const { notes, setNotes } = useContext(NotesContext)
    const { noteId, noteTitle, noteBody, noteTag } = note;

    return (
        <div className="flex flex-col gap-[8px] p-[16px] shadow-md rounded-lg h-fit w-[20rem]">
            <div className="flex justify-between align-middle font-semibold py-[8px] border-b-2">
                <h2 className="text-xl">{noteTitle}</h2>
                <button className="hover:cursor-pointer ">
                    <Trash2
                        size={24}
                        onClick={() => {
                            deleteNote(notes, setNotes, noteId);
                        }}
                        className="hover:scale-115 transition-all"
                    />
                </button>
            </div>
            <div>{noteBody}</div>
            <div className="flex flex-row gap-[8px]">
                <Tag tagName={noteTag} size="sm" />
            </div>
        </div>
    );
}
