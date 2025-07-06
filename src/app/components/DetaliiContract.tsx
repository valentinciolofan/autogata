import Button from "./Button";
import { ContractFormProps } from "../types";

const DetaliiContract = ({ invalidFields }: ContractFormProps) => {
    return (
        <fieldset className="flex flex-col gap-6">
            <legend className="font-bold mb-6">4. Preț și detalii contract</legend>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Prețul (în cifre) <span className="text-red-500">*</span></span>
                <input
                    name="priceDigits"
                    type="number"
                    required
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("priceDigits") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Prețul (în litere) <span className="text-red-500">*</span></span>
                <input
                    name="priceLetters"
                    type="text"
                    required
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("priceLetters") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Anexe la contract (Da/Nu)</span>
                <input
                    name="anexeYes"
                    type="text"
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("anexeYes") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Data încheierii contractului</span>
                <input
                    name="contractDate"
                    type="text"
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("contractDate") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Locul încheierii contractului</span>
                <input
                    name="contractPlace"
                    type="text"
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("contractPlace") ? "border-2 !border-danger" : ""}`}
                />
            </label>
        </fieldset>
    );
};

export default DetaliiContract;