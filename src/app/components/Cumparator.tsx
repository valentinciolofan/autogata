import { useEffect, useState } from "react";
import { ContractFormProps } from "../types";

import Button from "./Button";
import AdditionalFieldsBuyer from "./AdditionalFieldsBuyer"
import CustomCheckbox from "./CustomCheckbox";

const Cumparator = ({
    invalidFields,
    persoanaJuridica,
    personType,
    onNextStep,
    onPreviousStep
}: ContractFormProps) => {

    const [hasAnotherHomeSelected, setHasAnotherHomeSelected] = useState<boolean>(false);
    const [isRepresented, setIsRepresented] = useState<boolean>(false);

    useEffect(() => {
        const localStoredFields = localStorage.getItem("buyer");

        if (localStoredFields) {
            console.log(localStoredFields);
        }
    }, [])



    return (
        <>
            <fieldset className="flex flex-col gap-6">
                <legend className="font-bold mb-6">2. Persoana care dobândește (cumpărător)</legend>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Nume și prenume <span className="text-red-500">*</span></span>
                    <input
                        name="buyerName"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerName") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Țara</span>
                    <input
                        name="buyerCountry"
                        type="text"
                        minLength={3}
                        maxLength={40}
                        pattern="^[A-Za-z\s\-]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerCountry") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Județ <span className="text-red-500">*</span></span>
                    <input
                        name="buyerCounty"
                        type="text"
                        minLength={3}
                        maxLength={30}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerCounty") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Cod poștal</span>
                    <input
                        name="buyerPostalCode"
                        type="text"
                        minLength={6}
                        maxLength={6}
                        pattern="^\d+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerPostalCode") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Municipiu / oraș / comună <span className="text-red-500">*</span></span>
                    <input
                        name="buyerCity"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerCity") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Sat / sector <span className="text-red-500">*</span></span>
                    <input
                        name="buyerDistrict"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\-']+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerDistrict") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Strada <span className="text-red-500">*</span></span>
                    <input
                        name="buyerStreet"
                        type="text"
                        minLength={2}
                        maxLength={60}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\.,\-]+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerStreet") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Număr</span>
                    <input
                        name="buyerStreetNumber"
                        type="text"
                        minLength={1}
                        maxLength={10}
                        pattern="^[0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerStreetNumber") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Bloc</span>
                    <input
                        name="buyerBlock"
                        type="text"
                        minLength={1}
                        maxLength={5}
                        pattern="^[A-Za-z0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerBlock") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Scara</span>
                    <input
                        name="buyerStaircase"
                        type="text"
                        minLength={1}
                        maxLength={3}
                        pattern="^[A-Za-z0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerStaircase") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Etaj</span>
                    <input
                        name="buyerFloor"
                        type="text"
                        minLength={1}
                        maxLength={2}
                        pattern="^[0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFloor") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Apartament</span>
                    <input
                        name="buyerApartment"
                        type="text"
                        minLength={1}
                        maxLength={4}
                        pattern="^[0-9]+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerApartment") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Serie act identitate <span className="text-red-500">*</span></span>
                    <input
                        name="buyerIdSeries"
                        type="text"
                        minLength={2}
                        maxLength={3}
                        pattern="^[A-Z]+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerIdSeries") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Număr act de identitate <span className="text-red-500">*</span></span>
                    <input
                        name="buyerIdNumber"
                        type="text"
                        minLength={6}
                        maxLength={8}
                        pattern="^\d+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerIdNumber") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>CNP / CIF <span className="text-red-500">*</span></span>
                    <input
                        name="buyerCnpOrCif"
                        type="text"
                        minLength={6}
                        maxLength={13}
                        pattern="^\d+$"
                        required
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerCnpOrCif") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Telefon / Fax</span>
                    <input
                        name="buyerPhone"
                        type="text"
                        minLength={10}
                        maxLength={10}
                        pattern="^\d+$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerPhone") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Email</span>
                    <input
                        name="buyerEmail"
                        type="email"
                        minLength={5}
                        maxLength={50}
                        pattern="^[\w.-]+@[\w.-]+\.\w{2,}$"
                        className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerEmail") ? "border-2 !border-danger" : ""}`}
                    />
                </label>
            </fieldset>

            <AdditionalFieldsBuyer
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

export default Cumparator;