import Button from "./Button";
import Tooltip from "./Tooltip";
import { ContractFormProps } from "../types";

const ObiectContract = ({ invalidFields }: ContractFormProps) => {
    return (
        <fieldset>
            <legend className="font-bold mb-6">3. Obiectul contractului</legend>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Marca autovehiculul
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia D.1 din talon" />
                        </span>
                        <input
                            name="vehicleBrand"
                            type="text"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleBrand") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Tipul modelului
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia D.3 din talon" />
                        </span>
                        <input
                            name="vehicleModel"
                            type="text"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleModel") ? "border-2 !border-danger" : ""}`}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleChassisNumber") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Serie motor
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia 10 din cartea autovehiculului" />
                        </span>
                        <input
                            name="vehicleEngineSeries"
                            type="text"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleEngineSeries") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Capacitate cilindrică cm³
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia P.1 din talonul autovehiculului" />
                        </span>
                        <input
                            name="vehicleCubicCapacity"
                            type="number"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleCubicCapacity") ? "border-2 !border-danger" : ""}`}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleMaxWeight") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Număr de înmatriculare
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia A din talonul autovehiculului" />
                        </span>
                        <input
                            name="vehicleRegistrationNumber"
                            type="text"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleRegistrationNumber") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>
                </div>

                <div className="flex flex-col gap-4">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Data expirării ITP</span>
                        <input
                            name="vehicleItpExpiry"
                            type="number"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleItpExpiry") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Seria și numărul CIV
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia X / Y  din talonul autovehiculului sau pe prima pagina a CIV" />
                        </span>
                        <input
                            name="vehicleCivSeries"
                            type="number"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleCivSeries") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            An fabricație
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia 5 din cartea autovehiculului imediat dupa numărul de omologare" />
                        </span>
                        <input
                            name="vehicleYear"
                            type="number"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleYear") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span className="flex items-center">
                            Norma euro
                            <span className="text-red-500">*</span>
                            <Tooltip label="Pozitia 5 din cartea autovehiculului la sfârșitul numărului de omologare" />
                        </span>
                        <input
                            name="vehicleEuroNorm"
                            type="number"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleEuroNorm") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Data dobândirii autovehiculului</span>
                        <input
                            name="vehicleAcquisitionDate"
                            type="number"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("vehicleAcquisitionDate") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Actul dobândirii</span>
                        <input
                            name="acquisitionDocument"
                            type="text"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("acquisitionDocument") ? "border-2 !border-danger" : ""}`}
                        />
                    </label>
                </div>
            </div>

        </fieldset>
    );
};

export default ObiectContract;