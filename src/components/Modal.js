import React from "react";

import { X } from "react-feather";

export default function Modal({ handleDismiss, children }) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === "Escape") {
                handleDismiss();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleDismiss]);

    return (
        <div className="fixed inset-0 grid place-content-center p-16px">
            <div
                className="absolute inset-0 bg-black opacity-65"
                onClick={handleDismiss}
            />
            <div className="relative bg-white rounded-md p-[28px]">
                <button
                    className="absolute top-0 right-0 p-[16px] text-white translate-y-[-100%] hover:cursor-pointer"
                    onClick={handleDismiss}
                >
                    <X size={36} />
                </button>
                {children}
            </div>
        </div>
    );
}
