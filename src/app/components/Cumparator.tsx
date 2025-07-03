import { useEffect } from "react";
import Button from "./Button";
import { ContractFormProps } from "../types";

const Cumparator = ({
    invalidFields,
    persoanaJuridica,
    personType,
    onNextStep,
    onPreviousStep
}: ContractFormProps) => {

    useEffect(() => {
        const localStoredFields = localStorage.getItem("buyer");

        if (localStoredFields) {
            console.log(localStoredFields);
        }
    }, [])



    return (
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
                    className={`contract-input-field ${invalidFields?.["buyerName"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerCountry"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerCounty"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerPostalCode"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerCity"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerDistrict"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerStreet"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerStreetNumber"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerBlock"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerStaircase"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerFloor"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerApartment"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerIdSeries"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerIdNumber"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerCnpOrCif"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerPhone"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["buyerEmail"] ? "border-2 !border-danger" : ""}`}
                />
            </label>
        </fieldset>
    );
};

export default Cumparator;