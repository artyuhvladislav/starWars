import { useEffect } from "react";

export const useOnClickOutside = (refChild, handler, refParent) => {
    useEffect(
        () => {
            const listener = (event) => {
                if (!refChild.current || refChild.current.contains(event.target)) {
                    return;
                }
                handler();
            };

            if (!refParent) {
                window.addEventListener("mousedown", listener);
                window.addEventListener("touchstart", listener);
            } else {
                refParent.current.addEventListener("mousedown", listener);
                refParent.current.addEventListener("touchstart", listener);
            }

            return () => {
                if (!refParent) {
                    window.removeEventListener("mousedown", listener);
                    window.removeEventListener("touchstart", listener);
                } else {
                    refParent.current.removeEventListener("mousedown", listener);
                    refParent.current.removeEventListener("touchstart", listener);
                }

            };
        },
        [refChild, refParent, handler]
    );
}