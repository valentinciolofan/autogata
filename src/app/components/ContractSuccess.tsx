import Button from "./Button";
import { useEffect, useState } from "react";

interface ContractSuccessProps {
  downloadLink: string;
}

const ContractSuccess = ({ downloadLink }: ContractSuccessProps) => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleDownload = () => {
    console.log("Attempting download with link:", downloadLink);
    if (!downloadLink || downloadLink === "#") {
      console.error("Invalid link:", downloadLink);
      setDownloadError("Invalid link downloaded");
      return;
    }

    try {
      const a = document.createElement("a");
      a.href = downloadLink;
      a.download = "contract-auto.pdf";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      console.log("Download triggered successfully for:", downloadLink);
      setIsDownloaded(true);
      setDownloadError(null);

      setTimeout(() => {
        try {
          URL.revokeObjectURL(downloadLink);
          console.log("Revoked blob URL:", downloadLink);
        } catch (err) {
          console.error("Failed to revoke blob URL:", err);
        }
      }, 120000); 
    } catch (error: any) {
      console.error("Download failed:", error);
      setDownloadError(error.message ?? "Unknown error during download");

      setTimeout(() => window.open(downloadLink, "_blank"), 500);
    }
  };

  useEffect(() => {
    ["seller", "buyer", "contractSubject", "contractDetails"].forEach((key) => {
      localStorage.removeItem(key);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6em"
        height="6em"
        viewBox="0 0 24 24"
      >
        <path
          fill="#ef5350"
          d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.93 10.44c.41.9.93 1.64 1.53 2.15l.41.32c-.87.16-2.07.44-3.34.93l-.11.04l.5-1.04c.45-.87.78-1.66 1.01-2.4m6.48 3.81c.18-.18.27-.41.28-.66c.03-.2-.02-.39-.12-.55c-.29-.47-1.04-.69-2.28-.69l-1.29.07l-.87-.58c-.63-.52-1.2-1.43-1.6-2.56l.04-.14c.33-1.33.64-2.94-.02-3.6a.85.85 0 0 0-.61-.24h-.24c-.37 0-.7.39-.79.77c-.37 1.33-.15 2.06.22 3.27v.01c-.25.88-.57 1.9-1.08 2.93l-.96 1.8l-.89.49c-1.2.75-1.77 1.59-1.88 2.12c-.04.19-.02.36.05.54l.03.05l.48.31l.44.11c.81 0 1.73-.95 2.97-3.07l.18-.07c1.03-.33 2.31-.56 4.03-.75c1.03.51 2.24.74 3 .74c.44 0 .74-.11.91-.30m-.41-.71l.09.11c-.01.1-.04.11-.09.13h-.04l-.19.02c-.46 0-1.17-.19-1.9-.51c.09-.10.13-.10.23-.10c1.40 0 1.80.25 1.90.35M7.83 17c-.65 1.19-1.24 1.85-1.69 2c.05-.38.50-1.04 1.21-1.69zm3.02-6.91c-.23-.90-.24-1.63-.07-2.05l.07-.12l.15.05c.17.24.19.56.09 1.10l-.03.16l-.16.82z"
        />
      </svg>

      <h2 className="text-2xl font-semibold text-green-700">
        Contractul a fost generat cu succes!
      </h2>

      <p className="text-gray-600 max-w-md">
        Documentul PDF este pregătit. Poți să-l descarci folosind butonul de mai
        jos.
      </p>

      <Button
        variant="primary"
        label={"Descarcă PDF"}
        onClick={handleDownload}
      />
      
      {downloadError && (
        <p className="text-red-600 mt-2">Error: {downloadError}</p>
      )}
    </div>
  );
};

export default ContractSuccess;
