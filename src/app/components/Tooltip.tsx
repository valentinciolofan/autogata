import { useEffect, useRef, useState } from "react";

interface TooltipProps {
    label: string;
}

const Tooltip = ({ label }: TooltipProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (
                open &&
                ref.current &&
                !ref.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [open]);

    return (
        <span ref={ref} className="relative group ml-1 cursor-pointer tooltip">
            <button
                type="button"
                aria-label={label}
                onClick={() => setOpen((v) => !v)}
                className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4h-2V7h2z" />
                </svg>
            </button>

            <div className={`
          absolute z-10 
          bg-secondary text-white text-xs p-2 rounded-md shadow-lg
          whitespace-nowrap
          top-[-140%]
          ${open ? "block" : "hidden"}           /* mobile / click */
          group-hover:block sm:group-hover:block /* desktop / hover */
          left-[-200%] sm:left-1/2 sm:-translate-x-1/2  /* responsive positioning */
          max-w-[80vw] sm:max-w-xs
          whitespace-normal sm:whitespace-nowrap
        `}>
                {label}

            </div>
        </span>
    );
};

export default Tooltip;
