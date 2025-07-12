import { useEffect, useState } from "react";
import { ContractFormProps } from "../types";

import AdditionalFieldsSeller from "./AdditionalFieldsSeller";
import Button from "./Button";

import CustomCheckbox from "./CustomCheckbox";
import { json } from "stream/consumers";

const Vanzator = ({
    formStep,
    setFormStep,
    validation,
    invalidFields,
    personType,
    onNextStep
}: ContractFormProps) => {

    const [hasAnotherHomeSelected, setHasAnotherHomeSelected] = useState<boolean>(false);
    const [isRepresented, setIsRepresented] = useState<boolean>(false);
    const [storedFields, setStoredFields] = useState<Record<string, any>>({});

    useEffect(() => {
        const raw = localStorage.getItem("seller");
        if (!raw) return;

        let parsed: unknown;
        parsed = JSON.parse(raw);

        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            setStoredFields(parsed as Record<string, any>);
        }
    }, []);




    return (
        <>
            <fieldset className="flex flex-col gap-6">
                <legend className="font-bold mb-6">
                    1. Persoana care înstrăinează (vânzător)
                </legend>

                <label className="flex flex-col text-sm font-medium text-gray-700 relative">
                    <span>
                        Nume și prenume <span className="text-red-500">*</span>
                    </span>
                    <input
                        name="sellerName"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerName")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerName"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Țara</span>
                    <input
                        name="sellerCountry"
                        type="text"
                        minLength={3}
                        maxLength={40}
                        pattern="^[A-Za-z\s\-]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerCountry")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerCountry"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>
                        Județ <span className="text-red-500">*</span>
                    </span>
                    <input
                        name="sellerCounty"
                        type="text"
                        minLength={3}
                        maxLength={30}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerCounty")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerCounty"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Cod poștal</span>
                    <input
                        name="sellerPostalCode"
                        type="text"
                        minLength={6}
                        maxLength={6}
                        pattern="^\d+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerPostalCode")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerPostalCode"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>
                        Municipiu / oraș / comună <span className="text-red-500">*</span>
                    </span>
                    <input
                        name="sellerCity"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerCity")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerCity"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>
                        Sat / sector <span className="text-red-500">*</span>
                    </span>
                    <input
                        name="sellerDistrict"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\-']+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerDistrict")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerDistrict"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>
                        Strada <span className="text-red-500">*</span>
                    </span>
                    <input
                        name="sellerStreet"
                        type="text"
                        minLength={2}
                        maxLength={60}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s.,\-]+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerStreet")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerStreet"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Număr</span>
                    <input
                        name="sellerStreetNumber"
                        type="text"
                        minLength={1}
                        maxLength={10}
                        pattern="^[0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerStreetNumber")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerStreetNumber"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Bloc</span>
                    <input
                        name="sellerBlock"
                        type="text"
                        minLength={1}
                        maxLength={5}
                        pattern="^[A-Za-z0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerBlock")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerBlock"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Scara</span>
                    <input
                        name="sellerStaircase"
                        type="text"
                        minLength={1}
                        maxLength={3}
                        pattern="^[A-Za-z0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerStaircase")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerStaircase"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Etaj</span>
                    <input
                        name="sellerFloor"
                        type="text"
                        minLength={1}
                        maxLength={2}
                        pattern="^[0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFloor")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerFloor"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Apartament</span>
                    <input
                        name="sellerApartment"
                        type="text"
                        minLength={1}
                        maxLength={4}
                        pattern="^[0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerApartment")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerApartment"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>
                        Serie act identitate <span className="text-red-500">*</span>
                    </span>
                    <input
                        name="sellerIdSeries"
                        type="text"
                        minLength={2}
                        maxLength={3}
                        pattern="^[A-Za-z]+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerIdSeries")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerIdSeries"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>
                        Număr act de identitate <span className="text-red-500">*</span>
                    </span>
                    <input
                        name="sellerIdNumber"
                        type="text"
                        minLength={6}
                        maxLength={8}
                        pattern="^\d+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerIdNumber")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerIdNumber"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>
                        CNP / CIF <span className="text-red-500">*</span>
                    </span>
                    <input
                        name="sellerCnpOrCif"
                        type="text"
                        minLength={6}
                        maxLength={13}
                        pattern="^\d+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerCnpOrCif")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerCnpOrCif"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Telefon / Fax</span>
                    <input
                        name="sellerPhone"
                        type="text"
                        minLength={10}
                        maxLength={10}
                        pattern="^\d+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerPhone")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerPhone"] ?? ""}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Email</span>
                    <input
                        name="sellerEmail"
                        type="email"
                        minLength={5}
                        maxLength={50}
                        pattern="^[\w.-]+@[\w.-]+\.\w{2,}$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerEmail")
                            ? "border-2 !border-danger"
                            : ""
                            }`}
                        defaultValue={storedFields?.["sellerEmail"] ?? ""}
                    />
                </label>
            </fieldset>

            <AdditionalFieldsSeller
                formStep={formStep}
                setFormStep={setFormStep}
                storedFields={storedFields}
                invalidFields={invalidFields}
                hasAnotherHome={hasAnotherHomeSelected}
                isRepresented={isRepresented} />

            <CustomCheckbox
                label={"Aveți alt domiciliu?"}
                checked={hasAnotherHomeSelected}
                onChange={setHasAnotherHomeSelected} />
            <CustomCheckbox
                label={"Sunteți reprezentat de altcineva?"}
                checked={isRepresented}
                onChange={setIsRepresented} />
        </>

    );
};

export default Vanzator;