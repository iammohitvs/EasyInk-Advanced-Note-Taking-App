import { useState, useEffect } from "react";

const PREFIX = "advancedNoteApp--";

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;

    const [value, setValue] = useState(() => {
        const jsonValue = window.localStorage.getItem(prefixedKey);
        if (jsonValue != null) {
            return JSON.parse(jsonValue);
        }

        if (typeof initialValue === "function") {
            return initialValue();
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        window.localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);

    return [value, setValue];
}
