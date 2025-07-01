import { useEffect } from "react";
import Button from "./Button";

interface Vanzator {
    invalidFields: string[];
    persoanaJuridica?: (personType: string) => void;
    personType?: boolean,
    onNextStep?: () => void
}

const Vanzator = ({
    invalidFields,
    persoanaJuridica,
    personType,
    onNextStep
}: Vanzator) => {
    useEffect(() => {
        const localStoredFields = localStorage.getItem("seller");

        if (localStoredFields) {
            console.log(localStoredFields);
        }
    }, [])


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
                    className={`contract-input-field ${invalidFields?.includes("sellerName") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerCountry") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerCounty") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerPostalCode") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerCity") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerDistrict") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerStreet") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerStreetNumber") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerBlock") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerStaircase") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerFloor") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerApartment") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerIdSeries") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerIdNumber") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerCnpOrCif") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerPhone") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("sellerEmail") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <fieldset data-section="legal-entity" className={`${personType === "legalEntity" ? "flex" : "hidden"} flex-col gap-4`}>
                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Țara fiscală</span>
                    <input
                        name="sellerFiscalCountry"
                        pattern="^[A-Za-z\s\-]{3,40}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalCountry") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={3}
                        maxLength={40}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Județ fiscal</span>
                    <input
                        name="sellerFiscalCounty"
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]{3,30}$"
                        required
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalCounty") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={3}
                        maxLength={30}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Cod poștal fiscal</span>
                    <input
                        name="sellerFiscalPostalCode"
                        pattern="^\d{6}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalPostalCode") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={6}
                        maxLength={6}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Municipiu / oraș / comună fiscal(ă)</span>
                    <input
                        name="sellerFiscalCity"
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                        required
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalCity") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={3}
                        maxLength={50}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Sat / sector fiscal</span>
                    <input
                        name="sellerFiscalDistrict"
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\-']{3,50}$"
                        required
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalDistrict") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={3}
                        maxLength={50}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Strada fiscală</span>
                    <input
                        name="sellerFiscalStreet"
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\.,\-]{2,60}$"
                        required
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalStreet") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={2}
                        maxLength={60}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Număr fiscal</span>
                    <input
                        name="sellerFiscalStreetNumber"
                        pattern="^[0-9]{1,10}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalStreetNumber") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={1}
                        maxLength={10}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Bloc fiscal</span>
                    <input
                        name="sellerFiscalBlock"
                        pattern="^[A-Za-z0-9]{1,5}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalBlock") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={1}
                        maxLength={5}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Scara fiscal</span>
                    <input
                        name="sellerFiscalStaircase"
                        pattern="^[A-Za-z0-9]{1,3}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalStaircase") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={1}
                        maxLength={3}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Etaj fiscal</span>
                    <input
                        name="sellerFiscalFloor"
                        pattern="^[0-9]{1,2}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalFloor") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={1}
                        maxLength={2}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Apartament fiscal</span>
                    <input
                        name="sellerFiscalApartment"
                        pattern="^[0-9]{1,4}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerFiscalApartment") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={1}
                        maxLength={4}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Nume / Prenume reprezentant legal</span>
                    <input
                        name="sellerLegalRepName"
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                        required
                        className={`contract-input-field ${invalidFields?.includes("sellerLegalRepName") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={3}
                        maxLength={50}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Serie act identitate reprezentant</span>
                    <input
                        name="sellerLegalRepIdSeries"
                        pattern="^[A-Z]{2,3}$"
                        required
                        className={`contract-input-field ${invalidFields?.includes("sellerLegalRepIdSeries") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={2}
                        maxLength={3}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Număr act de identitate reprezentant</span>
                    <input
                        name="sellerLegalRepIdNumber"
                        pattern="^\d{6,8}$"
                        required
                        className={`contract-input-field ${invalidFields?.includes("sellerLegalRepIdNumber") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={6}
                        maxLength={8}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>CNP reprezentant</span>
                    <input
                        name="sellerLegalRepCnp"
                        pattern="^\d{9,13}$"
                        required
                        className={`contract-input-field ${invalidFields?.includes("sellerLegalRepCnp") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={9}
                        maxLength={13}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Telefon / Fax reprezentant</span>
                    <input
                        name="sellerLegalRepPhone"
                        pattern="^\d{10}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerLegalRepPhone") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={10}
                        maxLength={10}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Email reprezentant</span>
                    <input
                        name="sellerLegalRepEmail"
                        pattern="^[\w.-]+@[\w.-]+\.\w{2,}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerLegalRepEmail") ? "border-2 !border-danger" : ""}`}
                        type="email"
                        minLength={5}
                        maxLength={50}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Calitate reprezentant</span>
                    <input
                        name="sellerLegalRepTitle"
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                        className={`contract-input-field ${invalidFields?.includes("sellerLegalRepTitle") ? "border-2 !border-danger" : ""}`}
                        type="text"
                        minLength={3}
                        maxLength={50}
                    />
                </label>
            </fieldset>
        </fieldset>
    );
};

export default Vanzator;