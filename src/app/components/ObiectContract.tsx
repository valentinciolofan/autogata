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
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleBrand")
                            ? "border-2 !border-danger"
                            : ""
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
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleModel")
                            ? "border-2 !border-danger"
                            : ""
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
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleChassisNumber")
                            ? "border-2 !border-danger"
                            : ""
                        }`}
                    defaultValue={storedFields?.["vehicleChassisNumber"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Serie motor <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia 10 din cartea autovehiculului" />
                </span>
                <input
                    name="vehicleEngineSeries"
                    type="text"
                    required
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleEngineSeries")
                            ? "border-2 !border-danger"
                            : ""
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
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleCubicCapacity")
                            ? "border-2 !border-danger"
                            : ""
                        }`}
                    defaultValue={storedFields?.["vehicleCubicCapacity"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Greutate maximă admisă (pentru remorci/semiremorci)
                    <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia F.1 din talonul autovehiculului" />
                </span>
                <input
                    name="vehicleMaxWeight"
                    type="number"
                    required
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleMaxWeight")
                            ? "border-2 !border-danger"
                            : ""
                        }`}
                    defaultValue={storedFields?.["vehicleMaxWeight"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Număr de înmatriculare <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia A din talonul autovehiculului" />
                </span>
                <input
                    name="vehicleRegistrationNumber"
                    type="text"
                    required
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleRegistrationNumber")
                            ? "border-2 !border-danger"
                            : ""
                        }`}
                    defaultValue={storedFields?.["vehicleRegistrationNumber"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Data expirării ITP</span>
                <input
                    name="vehicleItpExpiry"
                    type="date"
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleItpExpiry")
                            ? "border-2 !border-danger"
                            : ""
                        }`}
                    defaultValue={storedFields?.["vehicleItpExpiry"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span className="flex items-center">
                    Seria și numărul CIV <span className="text-red-500">*</span>
                    <Tooltip label="Pozitia X / Y  din talonul autovehiculului sau pe prima pagina a CIV" />
                </span>
                <input
                    name="vehicleCivSeries"
                    type="number"
                    required
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleCivSeries")
                            ? "border-2 !border-danger"
                            : ""
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
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleYear")
                            ? "border-2 !border-danger"
                            : ""
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
                    type="number"
                    required
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleEuroNorm")
                            ? "border-2 !border-danger"
                            : ""
                        }`}
                    defaultValue={storedFields?.["vehicleEuroNorm"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Data dobândirii autovehiculului</span>
                <input
                    name="vehicleAcquisitionDate"
                    type="date"
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleAcquisitionDate")
                            ? "border-2 !border-danger"
                            : ""
                        }`}
                    defaultValue={storedFields?.["vehicleAcquisitionDate"] ?? ""}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Actul dobândirii</span>
                <input
                    name="acquisitionDocument"
                    type="text"
                    className={`contract-input-field ${invalidFields?.hasOwnProperty("acquisitionDocument")
                            ? "border-2 !border-danger"
                            : ""
                        }`}
                    defaultValue={storedFields?.["acquisitionDocument"] ?? ""}
                />
            </label>
        </fieldset>
    );
};

export default ObiectContract;