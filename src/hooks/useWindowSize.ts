import { useEffect, useState } from "react";

export function useWindowSize(): number[] {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        function onResize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return size;
}
