import { useState, useEffect } from "react";
import Button from "./Button";
import { ContractFormProps } from "../types";
import Link from "next/link";

const DetaliiContract = ({ invalidFields }: ContractFormProps) => {
    const [storedFields, setStoredFields] = useState<Record<string, any>>({});
    const [annexes, setAnnexes] = useState<"Da" | "Nu">(
        storedFields?.["annexes"] === "Da" ? "Da" : "Nu"
    );

    useEffect(() => {
        const raw = localStorage.getItem("contractDetails");
        if (!raw) return;

        let parsed: unknown;
        parsed = JSON.parse(raw);

        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            setStoredFields(parsed as Record<string, any>);
        }
    }, []);

    return (
        <fieldset className="flex flex-col gap-6 w-full">
            <legend className="font-bold mb-6">4. Preț și detalii contract</legend>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>
                    Prețul (în cifre) <span className="text-red-500">*</span>
                </span>
                <input
                    name="priceDigits"
                    type="number"
                    required
                    pattern="[0-9]{1,7}"
                    minLength={1}
                    maxLength={7}
                    min={100}
                    max={9999999}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("priceDigits") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["priceDigits"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>
                    Prețul (în litere) <span className="text-red-500">*</span>
                </span>
                <input
                    name="priceLetters"
                    type="text"
                    required
                    pattern="[A-Za-zăâîșț\s-]{3,100}"
                    minLength={3}
                    maxLength={100}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("priceLetters") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["priceLetters"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-700">
                        Anexe la contract
                    </span>

                    <div className="grid grid-cols-2 gap-3">
                        {(["Da", "Nu"] as const).map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => setAnnexes(option)}
                                aria-pressed={annexes === option}
                                className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${annexes === option
                                        ? "border-blue-600 bg-blue-50 text-blue-700"
                                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <input
                        type="text"
                        name="annexes"
                        value={annexes}
                        readOnly
                        required
                        pattern="^(Da|Nu)$"
                        className="sr-only"
                        tabIndex={-1}
                        aria-label="Anexe la contract"
                    />

                    {Object.prototype.hasOwnProperty.call(
                        invalidFields ?? {},
                        "annexes"
                    ) && (
                            <span className="text-xs text-red-600">
                                Selectează o opțiune validă.
                            </span>
                        )}
                </div>
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Data încheierii contractului</span>
                <input
                    name="contractDate"
                    type="date"
                    min="2025-07-12"
                    max="2030-12-31"
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("contractDate") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["contractDate"] ?? new Date().toISOString().slice(0, 10)}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Locul încheierii contractului</span>
                <input
                    name="contractPlace"
                    type="text"
                    pattern="[A-Za-zăâîșț\s-]{3,50}"
                    minLength={3}
                    maxLength={50}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("contractPlace") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["contractPlace"] ?? ""}
                />
            </label>

            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <p>
                    Am citit
                    <Link
                        href="/politica-de-confidentialitate"
                        className="font-semibold hover:text-secondary hover:text-underline"
                    >
                        {" Politica de confidențialitate "}
                    </Link>
                    și sunt de acord cu
                    <Link
                        href="/termeni-si-conditii"
                        className="font-semibold hover:text-secondary hover:text-underline"
                    >
                        {" Termenii și condițiile."}
                    </Link>
                </p>
                <input
                    name="consimtamant"
                    type="checkbox"
                    className={`appearance-none w-4 h-4 rounded-sm border cursor-pointer
        checked:appearance-auto
        ${invalidFields?.hasOwnProperty("consimtamant")
                            ? "!border-2 !border-danger bg-red-50"
                            : "border-gray-400"
                        }
    `}
                    required
                />
            </label>
        </fieldset>
    );
};

export default DetaliiContract;