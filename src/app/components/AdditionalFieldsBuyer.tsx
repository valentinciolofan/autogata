import { useState } from "react";
import { ContractFormProps } from "../types";

const AdditionalFieldsBuyer = ({ personType, invalidFields } : ContractFormProps) => {
    const [hasAnotherHomeSelected, setHasAnotherHomeSelected] = useState<boolean>(false);
    const [isRepresented, setIsRepresented] = useState<boolean>(false);

    return (
        <>
            <fieldset data-section="legal-entity" className={`${personType === "legalEntity" ? "flex" : "hidden"} flex-col gap-4 md:basis-1/2`}>
                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Țara fiscală</span>
                    <input
                        name="buyerFiscalCountry"
                        type="text"
                        minLength={3}
                        maxLength={40}
                        pattern="^[A-Za-z\s\-]{3,40}$"
                        className={`contract-input-field ${invalidFields?.["buyerFiscalCountry"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Județ fiscal</span>
                    <input
                        name="buyerFiscalCounty"
                        type="text"
                        minLength={3}
                        maxLength={30}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]{3,30}$"
                        required
                        className={`contract-input-field ${invalidFields?.["buyerFiscalCounty"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Cod poștal fiscal</span>
                    <input
                        name="buyerFiscalPostalCode"
                        type="text"
                        minLength={6}
                        maxLength={6}
                        pattern="^\d{6}$"
                        className={`contract-input-field ${invalidFields?.["buyerFiscalPostalCode"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Municipiu / oraș / comună fiscal(ă)</span>
                    <input
                        name="buyerFiscalCity"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                        required
                        className={`contract-input-field ${invalidFields?.["buyerFiscalCity"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Sat / sector fiscal</span>
                    <input
                        name="buyerFiscalDistrict"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\-']{3,50}$"
                        required
                        className={`contract-input-field ${invalidFields?.["buyerFiscalDistrict"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Strada fiscală</span>
                    <input
                        name="buyerFiscalStreet"
                        type="text"
                        minLength={2}
                        maxLength={60}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\.,\-]{2,60}$"
                        required
                        className={`contract-input-field ${invalidFields?.["buyerFiscalStreet"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Număr fiscal</span>
                    <input
                        name="buyerFiscalStreetNumber"
                        type="text"
                        minLength={1}
                        maxLength={10}
                        pattern="^[0-9]{1,10}$"
                        className={`contract-input-field ${invalidFields?.["buyerFiscalStreetNumber"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Bloc fiscal</span>
                    <input
                        name="buyerFiscalBlock"
                        type="text"
                        minLength={1}
                        maxLength={5}
                        pattern="^[A-Za-z0-9]{1,5}$"
                        className={`contract-input-field ${invalidFields?.["buyerFiscalBlock"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Scara fiscal</span>
                    <input
                        name="buyerFiscalStaircase"
                        type="text"
                        minLength={1}
                        maxLength={3}
                        pattern="^[A-Za-z0-9]{1,3}$"
                        className={`contract-input-field ${invalidFields?.["buyerFiscalStaircase"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Etaj fiscal</span>
                    <input
                        name="buyerFiscalFloor"
                        type="text"
                        minLength={1}
                        maxLength={2}
                        pattern="^[0-9]{1,2}$"
                        className={`contract-input-field ${invalidFields?.["buyerFiscalFloor"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Apartament fiscal</span>
                    <input
                        name="buyerFiscalApartment"
                        type="text"
                        minLength={1}
                        maxLength={4}
                        pattern="^[0-9]{1,4}$"
                        className={`contract-input-field ${invalidFields?.["buyerFiscalApartment"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>


            </fieldset>

            <fieldset>
                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Nume și prenume reprezentant legal</span>
                    <input
                        name="buyerLegalRepName"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                        required
                        className={`contract-input-field ${invalidFields?.["buyerLegalRepName"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Serie act identitate reprezentant</span>
                    <input
                        name="buyerLegalRepIdSeries"
                        type="text"
                        minLength={2}
                        maxLength={3}
                        pattern="^[A-Z]{2,3}$"
                        required
                        className={`contract-input-field ${invalidFields?.["buyerLegalRepIdSeries"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Număr act de identitate reprezentant</span>
                    <input
                        name="buyerLegalRepIdNumber"
                        type="text"
                        minLength={6}
                        maxLength={8}
                        pattern="^\d{6,8}$"
                        required
                        className={`contract-input-field ${invalidFields?.["buyerLegalRepIdNumber"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>CNP reprezentant</span>
                    <input
                        name="buyerLegalRepCnp"
                        type="text"
                        minLength={9}
                        maxLength={13}
                        pattern="^\d{9,13}$"
                        required
                        className={`contract-input-field ${invalidFields?.["buyerLegalRepCnp"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Telefon / Fax reprezentant</span>
                    <input
                        name="buyerLegalRepPhone"
                        type="text"
                        minLength={10}
                        maxLength={10}
                        pattern="^\d{10}$"
                        className={`contract-input-field ${invalidFields?.["buyerLegalRepPhone"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Email reprezentant</span>
                    <input
                        name="buyerLegalRepEmail"
                        type="email"
                        minLength={5}
                        maxLength={50}
                        pattern="^[\w.-]+@[\w.-]+\.\w{2,}$"
                        className={`contract-input-field ${invalidFields?.["buyerLegalRepEmail"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Calitate reprezentant</span>
                    <input
                        name="buyerLegalRepTitle"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                        className={`contract-input-field ${invalidFields?.["buyerLegalRepTitle"] ? "border-2 !border-danger" : ""}`}
                    />
                </label>
            </fieldset>
        </>
    )
}

export default AdditionalFieldsBuyer;