import { useEffect, useRef, useState } from "react";

interface TooltipProps {
    label: string;
}

const Tooltip = ({ label }: TooltipProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);


    const handleTooltipOnMobile = () => {
        const isMobileScreen = window.matchMedia(("max-media: 768px")).matches;

        if (isMobileScreen) {
            setOpen((v) => !v)
        }
    }

    useEffect(() => {
        const handleOutside = (e: PointerEvent) => {
            if (
                open &&
                ref.current &&
                !ref.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        window.addEventListener("pointerdown", handleOutside, true);
        return () => {
            window.removeEventListener("pointerdown", handleOutside, true);
        };
    }, [open]);

    return (
        <span ref={ref} className="relative group ml-1 tooltip">
            <button
                type="button"
                aria-label={label}
                onClick={handleTooltipOnMobile}
                className="p-1 text-gray-500 cursor-pointer  hover:text-gray-700 focus:outline-none"
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

            <span className={`
          tooltiptext
          absolute z-10 
          bg-secondary text-white text-xs p-2 rounded-md shadow-lg
          top-[100%]
          ${open ? "block" : "hidden"}           
          sm:group-hover:block 
          max-w-[80vw]
          h-fit
          shadow-lg
          rounded-md
          md:max-w-fit
          md:text-nowrap
          md:whitespace-none
          md:top-[-110%]
        `}>
                {label}
            </span>
        </span>
    );
};

export default Tooltip;
