import { useEffect } from "react";
import Button from "./Button";

export interface Cumparator {
    invalidFields: string[];
    persoanaJuridica?: (personType: string) => void;
    personType?: boolean,
    onNextStep?: () => void
    onPreviousStep?: () => void,
}

const Cumparator = ({
    invalidFields,
    persoanaJuridica,
    personType,
    onNextStep,
    onPreviousStep
}: Cumparator) => {

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
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț\\s\-']+$"
                    required
                    className={`contract-input-field ${invalidFields?.includes("buyerName") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Țara</span>
                <input
                    name="buyerCountry"
                    type="text"
                    minLength={3}
                    maxLength={40}
                    pattern="^[A-Za-z\\s\-]+$"
                    className={`contract-input-field ${invalidFields?.includes("buyerCountry") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Județ <span className="text-red-500">*</span></span>
                <input
                    name="buyerCounty"
                    type="text"
                    minLength={3}
                    maxLength={30}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț\\s\-]+$"
                    required
                    className={`contract-input-field ${invalidFields?.includes("buyerCounty") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Cod poștal</span>
                <input
                    name="buyerPostalCode"
                    type="text"
                    minLength={6}
                    maxLength={6}
                    pattern="^\\d+$"
                    className={`contract-input-field ${invalidFields?.includes("buyerPostalCode") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Municipiu / oraș / comună <span className="text-red-500">*</span></span>
                <input
                    name="buyerCity"
                    type="text"
                    minLength={3}
                    maxLength={50}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț\\s\-']+$"
                    required
                    className={`contract-input-field ${invalidFields?.includes("buyerCity") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Sat / sector <span className="text-red-500">*</span></span>
                <input
                    name="buyerDistrict"
                    type="text"
                    minLength={3}
                    maxLength={50}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\\s\-']+$"
                    required
                    className={`contract-input-field ${invalidFields?.includes("buyerDistrict") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Strada <span className="text-red-500">*</span></span>
                <input
                    name="buyerStreet"
                    type="text"
                    minLength={2}
                    maxLength={60}
                    pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\\s\.,\-]+$"
                    required
                    className={`contract-input-field ${invalidFields?.includes("buyerStreet") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("buyerStreetNumber") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("buyerBlock") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("buyerStaircase") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("buyerFloor") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("buyerApartment") ? "border-2 !border-danger" : ""}`}
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
                    className={`contract-input-field ${invalidFields?.includes("buyerIdSeries") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Număr act de identitate <span className="text-red-500">*</span></span>
                <input
                    name="buyerIdNumber"
                    type="text"
                    minLength={6}
                    maxLength={8}
                    pattern="^\\d+$"
                    required
                    className={`contract-input-field ${invalidFields?.includes("buyerIdNumber") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>CNP / CIF <span className="text-red-500">*</span></span>
                <input
                    name="buyerCnpOrCif"
                    type="text"
                    minLength={6}
                    maxLength={13}
                    pattern="^\\d{6,13}$"
                    required
                    className={`contract-input-field ${invalidFields?.includes("buyerCnpOrCif") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Telefon / Fax</span>
                <input
                    name="buyerPhone"
                    type="text"
                    minLength={10}
                    maxLength={10}
                    pattern="^\\d+$"
                    className={`contract-input-field ${invalidFields?.includes("buyerPhone") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Email</span>
                <input
                    name="buyerEmail"
                    type="email"
                    minLength={5}
                    maxLength={50}
                    pattern="^[\\w.-]+@[\\w.-]+\\.\\w{2,}$"
                    className={`contract-input-field ${invalidFields?.includes("buyerEmail") ? "border-2 !border-danger" : ""}`}
                />
            </label>

            <div data-section="legal-entity" className={`${personType === "legalEntity" ? "flex" : "hidden"} flex-col gap-4 md:basis-1/2`}>
                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Țara fiscală</span>
                    <input
                        name="buyerFiscalCountry"
                        type="text"
                        minLength={3}
                        maxLength={40}
                        pattern="^[A-Za-z\s\-]{3,40}$"
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalCountry") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalCounty") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalPostalCode") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalCity") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalDistrict") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalStreet") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalStreetNumber") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalBlock") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalStaircase") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalFloor") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerFiscalApartment") ? "border-2 !border-danger" : ""}`}
                    />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700">
                    <span>Nume și prenume reprezentant legal</span>
                    <input
                        name="buyerLegalRepName"
                        type="text"
                        minLength={3}
                        maxLength={50}
                        pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                        required
                        className={`contract-input-field ${invalidFields?.includes("buyerLegalRepName") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerLegalRepIdSeries") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerLegalRepIdNumber") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerLegalRepCnp") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerLegalRepPhone") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerLegalRepEmail") ? "border-2 !border-danger" : ""}`}
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
                        className={`contract-input-field ${invalidFields?.includes("buyerLegalRepTitle") ? "border-2 !border-danger" : ""}`}
                    />
                </label>
            </div>
        </fieldset>
    );
};

export default Cumparator;