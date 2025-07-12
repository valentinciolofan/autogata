import React from "react";

const ContractError = () => {
    const handleRetry = () => window.location.reload();

    return (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <circle cx="12" cy="12" r="10" className="fill-yellow-100/80" />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01"
                />
            </svg>
            
            <h2 className="text-2xl font-medium text-slate-800">
                Ups! A apărut ceva neașteptat
            </h2>

            <p className="text-gray-600 max-w-sm">
                Din păcate nu am putut crea contractul. Te rugăm să încerci din nou.
            </p>

            <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
                <span>Încearcă din nou</span>
            </button>
        </div>
    );
};

export default ContractError;
