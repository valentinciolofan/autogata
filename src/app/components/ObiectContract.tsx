import { useState, useEffect } from "react";
import Button from "./Button";
import Tooltip from "./Tooltip";
import { ContractFormProps } from "../types";

const ObiectContract = ({ invalidFields }: ContractFormProps) => {
    const [storedFields, setStoredFields] = useState<Record<string, any>>({});

    useEffect(() => {
        const raw = localStorage.getItem("contractSubject");
        if (!raw) return;

        let parsed: unknown;
        parsed = JSON.parse(raw);

        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            setStoredFields(parsed as Record<string, any>);
        }
    }, []);

    return (
        <fieldset className="flex flex-col gap-6">
            <legend className="font-bold mb-6">3. Obiectul contractului</legend>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Marca autovehiculul <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia D.1 din talon" />
                </span>
                <input
                    name="vehicleBrand"
                    type="text"
                    required
                    pattern="[A-Za-z\s-]{2,50}"
                    minLength={2}
                    maxLength={50}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleBrand") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleBrand"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Tipul modelului <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia D.3 din talon" />
                </span>
                <input
                    name="vehicleModel"
                    type="text"
                    required
                    pattern="[A-Za-z0-9\s-]{2,50}"
                    minLength={2}
                    maxLength={50}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleModel") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleModel"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Număr de identificare / Serie de șasiu
                    <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia E din talon" />
                </span>
                <input
                    name="vehicleChassisNumber"
                    type="text"
                    required
                    pattern="[A-HJ-NPR-Z0-9a-hj-npr-z]{17}"
                    minLength={17}
                    maxLength={17}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleChassisNumber") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleChassisNumber"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Serie motor <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia 10 din cartea autovehicului" />
                </span>
                <input
                    name="vehicleEngineSeries"
                    type="text"
                    required
                    pattern="[A-Za-z0-9\s-]{5,20}"
                    minLength={5}
                    maxLength={20}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleEngineSeries") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleEngineSeries"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Capacitate cilindrică cm³ <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia P.1 din talonul autovehiculului" />
                </span>
                <input
                    name="vehicleCubicCapacity"
                    type="number"
                    required
                    pattern="[0-9]{3,4}"
                    minLength={3}
                    maxLength={4}
                    min={500}
                    max={9999}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleCubicCapacity") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleCubicCapacity"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Greutate maximă admisă
                    <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia F.1 din talonul autovehiculului" />
                </span>
                <input
                    name="vehicleMaxWeight"
                    type="number"
                    required
                    pattern="[0-9]{3,4}"
                    minLength={3}
                    maxLength={4}
                    min={500}
                    max={9999}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleMaxWeight") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleMaxWeight"] ?? ""}
                />
            </label>

            <label className="relative flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Număr de înmatriculare <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia A din talonul autovehiculului" />
                </span>
                <input
                    name="vehicleRegistrationNumber"
                    type="text"
                    required
                    pattern="[A-Za-z]{1,2}\s?[0-9]{2,3}\s?[A-Za-z]{0,3}"
                    minLength={3}
                    maxLength={10}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleRegistrationNumber") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleRegistrationNumber"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Data expirării ITP</span>
                <input
                    name="vehicleItpExpiry"
                    type="date"
                    min="2025-07-12"
                    max="2030-12-31"
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleItpExpiry") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleItpExpiry"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Seria și numărul CIV <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia X / Y din talonul autovehiculului sau pe prima pagina a CIV" />
                </span>
                <input
                    name="vehicleCivSeries"
                    type="text"
                    required
                    pattern="[A-Za-z]{2}[0-9]{6}"
                    minLength={8}
                    maxLength={8}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleCivSeries") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleCivSeries"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    An fabricație <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia 5 din cartea autovehiculului imediat dupa numărul de omologare" />
                </span>
                <input
                    name="vehicleYear"
                    type="number"
                    required
                    pattern="[0-9]{4}"
                    minLength={4}
                    maxLength={4}
                    min={1900}
                    max={2025}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleYear") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleYear"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Norma euro <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia 5 din cartea autovehiculului la sfârșitul numărului de omologare" />
                </span>
                <input
                    name="vehicleEuroNorm"
                    type="text"
                    required
                    pattern="[1-6](d|D)?"
                    minLength={1}
                    maxLength={2}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleEuroNorm") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleEuroNorm"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Data dobândirii autovehiculului</span>
                <input
                    name="vehicleAcquisitionDate"
                    type="date"
                    min="1900-01-01"
                    max="2025-07-12"
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleAcquisitionDate") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["vehicleAcquisitionDate"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Actul dobândirii</span>
                <input
                    name="acquisitionDocument"
                    type="text"
                    pattern="[A-Za-z0-9\s-]{3,50}"
                    minLength={3}
                    maxLength={50}
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("acquisitionDocument") ? "border-2 !border-danger" : ""
                        }`}
                    defaultValue={storedFields?.["acquisitionDocument"] ?? ""}
                />
            </label>
        </fieldset>
    );
};

export default ObiectContract;