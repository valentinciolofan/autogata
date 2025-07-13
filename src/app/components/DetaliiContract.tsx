import { useState, useEffect } from "react";
import Button from "./Button";
import { ContractFormProps } from "../types";
import Link from "next/link";

const DetaliiContract = ({ invalidFields }: ContractFormProps) => {
    const [storedFields, setStoredFields] = useState<Record<string, any>>({});

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
                <span>Anexe la contract (Da/Nu)</span>
                <input
                    name="anexeYes"
                    type="text"
                    pattern="^(Da|Nu|da|nu|DA|NU)$"
                    minLength={2}
                    maxLength={2}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("anexeYes") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["anexeYes"] ?? ""}
                />
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
                <p>Am citit și sunt de acord cu <Link href="/termeni-si-conditii" className="font-semibold hover:text-secondary hover:text-underline">Termenii și condițiile.</Link></p>
                <input
                    name="consimtamant"
                    type="checkbox"
                    className={`${invalidFields?.hasOwnProperty("consimtamant") ? "border-2 !border-danger" : ""
                        }`}
                    required
                />
            </label>
        </fieldset>
    );
};

export default DetaliiContract;