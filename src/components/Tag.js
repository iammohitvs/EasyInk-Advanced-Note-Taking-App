import React from "react";

export default function Tag({ tagName, size }) {
    return (
        <div
            className={`${size === "sm" && "border-2"} w-fit py-[2px] px-[4px] rounded-md text-${size}`}
        >
            {tagName}
        </div>
    );
}
