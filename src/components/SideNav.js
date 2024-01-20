import React from "react";

import { BookOpen, Tag, PenTool, GitHub } from "react-feather";

export default function SideNav({
    setIsModalOpen,
    setNotesWindow,
    setTagsWindow,
}) {
    return (
        <>
            <div className="grow-0 md:h-[100%] inset-0 min-w-[320px] flex flex-col justify-between border-r-2 p-[20px]">
                <div className="flex flex-col justify-center align-top gap-[20px]">
                    <h1 className="text-3xl border-b-2 pb-[8px] font-semibold">
                        <PenTool size={36} className="inline mr-[8px]" />
                        EasyInk
                    </h1>
                    <div className="flex flex-col justify-center align-top gap-[8px]">
                        <div
                            className="flex flex-row gap-[12px] align-middle hover:cursor-pointer text-lg hover:bg-gray-100 py-[8px] px-[12px] rounded-md"
                            onClick={() => {
                                setNotesWindow(true);
                                setTagsWindow(false);
                            }}
                        >
                            <BookOpen size={24} />
                            <p>Notes</p>
                        </div>
                        <div
                            className="flex flex-row gap-[12px] align-middle hover:cursor-pointer text-lg hover:bg-gray-100 py-[8px] px-[12px] rounded-md"
                            onClick={() => {
                                setNotesWindow(false);
                                setTagsWindow(true);
                            }}
                        >
                            <Tag size={24} />
                            <p>Tags</p>
                        </div>
                        <a
                            href="https://github.com/iammohitvs/EasyInk-Advanced-Note-Taking-App"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex flex-row gap-[12px] align-middle hover:cursor-pointer text-lg hover:bg-gray-100 py-[8px] px-[12px] rounded-md">
                                <GitHub size={24} />
                                <p>Github</p>
                            </div>
                        </a>
                    </div>
                </div>
                <button
                    className="text-white bg-black text-xl rounded-md p-[8px] mt-[16px] hover:bg-gray-800"
                    onClick={setIsModalOpen}
                >
                    Add New Note +
                </button>
            </div>
        </>
    );
}
