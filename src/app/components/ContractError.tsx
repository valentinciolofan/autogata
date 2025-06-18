const ContractError = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M1 21h22L12 2 1 21zm13-2h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>

            <h2 className="text-2xl font-semibold text-red-700">
                Eroare la generarea contractului
            </h2>

            <p className="text-gray-600 max-w-md">
                Din păcate a apărut o problemă. Te rugăm să încerci din nou sau să contactezi suportul.
            </p>

            <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
                Încearcă din nou
            </button>
        </div>
    );
};

export default ContractError;
