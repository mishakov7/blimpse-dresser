import { useRef, useEffect } from "react";

export function usePreviousValue(value, initial) {
    const ref = useRef(initial);

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}