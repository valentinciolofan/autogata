interface TooltipProps {
    label: string;
}

const Tooltip = ({ label }: TooltipProps) => {
    return (
        <span className="relative group ml-1 cursor-pointer tooltip">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="#777777"
                viewBox="0 0 24 24"
            >
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4h-2V7h2z" />
            </svg>

            <div className="tooltiptext absolute hidden group-hover:block top-[-230%] left-[-4px] z-10 bg-secondary text-white text-xs p-2 rounded-md shadow-lg whitespace-nowrap">
                {label}
            </div>
        </span>
    );
};

export default Tooltip;
