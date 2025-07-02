import { useState } from "react";

const AdditionalFieldsSellerComponent = () => {
    const [hasAnotherHomeSelected, setHasAnotherHomeSelected] = useState<boolean>(false);
    const [isRepresented, setIsRepresented] = useState<boolean>(false);


    return (
        <>
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
            </fieldset>

            <fieldset>
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
        </>
    )
}

export default AdditionalFieldsSeller;