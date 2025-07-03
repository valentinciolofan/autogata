import { useEffect } from "react";
import Button from "./Button";
import { ContractFormProps } from "../types";

const Vanzator = ({
    invalidFields,
    persoanaJuridica,
    personType,
    onNextStep
}: ContractFormProps) => {

    // useEffect(() => {
    //     const localStoredFields = localStorage.getItem("seller");

    //     if (localStoredFields) {
    //         console.log(localStoredFields);
    //     }
    // }, [])


    return (
        <fieldset className="flex flex-col gap-6">
            <legend className="font-bold mb-6">1. Persoana care înstrăinează (vânzător)</legend>

            <label className="flex flex-col text-sm font-medium text-gray-700 relative">
                <span>Nume și prenume <span className="text-red-500">*</span></span>
                <input
                    name="sellerName"
                    type="text"
                    minLength={3}
                    maxLength={50}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']+$"
                    required
                    className={`contract-input-field ${invalidFields?.["sellerName"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["sellerCountry"] ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Județ <span className="text-red-500">*</span></span>
                <input
                    name="sellerCounty"
                    type="text"
                    minLength={3}
                    maxLength={30}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]+$"
                    required
                    className={`contract-input-field ${invalidFields?.["sellerCounty"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["sellerPostalCode"] ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Municipiu / oraș / comună <span className="text-red-500">*</span></span>
                <input
                    name="sellerCity"
                    type="text"
                    minLength={3}
                    maxLength={50}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']+$"
                    required
                    className={`contract-input-field ${invalidFields?.["sellerCity"] ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Sat / sector <span className="text-red-500">*</span></span>
                <input
                    name="sellerDistrict"
                    type="text"
                    minLength={3}
                    maxLength={50}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\-']+$"
                    required
                    className={`contract-input-field ${invalidFields?.["sellerDistrict"] ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Strada <span className="text-red-500">*</span></span>
                <input
                    name="sellerStreet"
                    type="text"
                    minLength={2}
                    maxLength={60}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s.,\-]+$"
                    required
                    className={`contract-input-field ${invalidFields?.["sellerStreet"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["sellerStreetNumber"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["sellerBlock"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["sellerStaircase"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["sellerFloor"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["sellerApartment"] ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Serie act identitate <span className="text-red-500">*</span></span>
                <input
                    name="sellerIdSeries"
                    type="text"
                    minLength={2}
                    maxLength={3}
                    pattern="^[A-Z]+$"
                    required
                    className={`contract-input-field ${invalidFields?.["sellerIdSeries"] ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Număr act de identitate <span className="text-red-500">*</span></span>
                <input
                    name="sellerIdNumber"
                    type="text"
                    minLength={6}
                    maxLength={8}
                    pattern="^\d+$"
                    required
                    className={`contract-input-field ${invalidFields?.["sellerIdNumber"] ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>CNP / CIF <span className="text-red-500">*</span></span>
                <input
                    name="sellerCnpOrCif"
                    type="text"
                    minLength={6}
                    maxLength={8}
                    pattern="^\d+$"
                    required
                    className={`contract-input-field ${invalidFields?.["sellerCnpOrCif"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["sellerPhone"] ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.["sellerEmail"] ? "border-2 !border-danger" : ""}`}
                />
            </label>
        </fieldset>
    );
};

export default Vanzator;