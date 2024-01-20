import React, { useContext } from "react";

import Tag from "./Tag";
import Note from "./Note";
import { NotesContext } from "../App";

import { allTags } from "../scritps/constants";

export default function TagsWindow() {
    const { notes, setNotes } = useContext(NotesContext)

    return (
        <div className="grow p-[20px] w-[100%]">
            <h1 className="text-3xl mb-[16px] pb-[12px] border-b-2 font-semibold">
                Tags
            </h1>
            <div className="flex flex-col justify-start align-baseline gap-[24px]">
                {allTags.map((tag, tagIndex) => {
                    return (
                        <div
                            key={tagIndex}
                            className="flex flex-col gap-[16px] justify-start align-baseline border-b-2 border-dashed pb-[16px]"
                        >
                            <Tag tagName={tag} size="3xl" />
                            <div className="flex flex-row flex-wrap justify-start align-baseline gap-[16px]">
                                {notes.map((note, noteIndex) => {
                                    if (note.noteTag === tag) {
                                        return (
                                            <Note note={note} key={noteIndex} />
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
