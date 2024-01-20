import React, { useState } from "react";

import Tag from "./Tag";
import ConfirmDeleteForm from "./ConfirmDeleteForm";
import Modal from "./Modal";

import { Trash2 } from "react-feather";

export default function Note({ note }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { noteId, noteTitle, noteBody, noteTag } = note;

    return (
        <>
            {isModalOpen && (
                <Modal
                    handleDismiss={() => {
                        setIsModalOpen(!isModalOpen);
                    }}
                >
                    <ConfirmDeleteForm
                        handleDismiss={() => {
                            setIsModalOpen(!isModalOpen);
                        }}
                        noteId={noteId}
                    />
                </Modal>
            )}
            <div className="flex flex-col gap-[8px] p-[16px] shadow-md rounded-lg h-fit w-[100%] md:w-[20rem]">
                <div className="flex justify-between align-middle font-semibold py-[8px] border-b-2">
                    <h2 className="text-xl">{noteTitle}</h2>
                    <button className="hover:cursor-pointer ">
                        <Trash2
                            size={24}
                            onClick={setIsModalOpen}
                            className="hover:scale-115 transition-all"
                        />
                    </button>
                </div>
                <div>{noteBody}</div>
                <div className="flex flex-row gap-[8px]">
                    <Tag tagName={noteTag} size="sm" />
                </div>
            </div>
        </>
    );
}
