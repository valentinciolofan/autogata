import Button from "./Button";

const ContractSuccess = () => {
    const handleDownload = () => {
        // const pdfUrl = "/contracte/contract-final.pdf"; // Înlocuiește cu path-ul real
        // const link = document.createElement("a");
        // link.href = pdfUrl;
        // link.download = "contract-final.pdf";
        // link.click();
    };

    return (
        <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
            {/* SVG icon PDF */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-red-600"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 
        2 0 002-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM9 13H8v5H6v-5H5v-2h4v2zm3 
        5h-2v-7h2a3 3 0 110 6zm-1-5v3h1a1.5 1.5 0 000-3H11zm6 
        5h-2v-2h-1v2h-2v-5h5v5zm-2-4h-1v1h1v-1z" />
            </svg>

            <h2 className="text-2xl font-semibold text-green-700">
                Contractul a fost generat cu succes!
            </h2>

            <p className="text-gray-600 max-w-md">
                Documentul PDF este pregătit. Poți să-l descarci folosind butonul de mai jos.
            </p>

            <Button
                href={"/"}
                variant={"primary"}
                label={"Descarcă PDF"}
            />
        </div>
    );
};

export default ContractSuccess;
