import { useEffect, useRef } from "react";

export default function useOutsideClick<T extends HTMLElement>(
  cb: () => void,
  listenCapturing: boolean = true
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        cb();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [cb]);

  return ref;
}
