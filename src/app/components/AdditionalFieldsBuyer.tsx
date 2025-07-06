import { useState } from "react";
import { ContractFormProps } from "../types";

const AdditionalFieldsBuyer = ({
    invalidFields,
    hasAnotherHome,
    isRepresented,
    storedFields
}: ContractFormProps) => {

    return (
        <>
            {hasAnotherHome && (
                <fieldset className="flex flex-col gap-6">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Țara fiscală <span className="text-red-500">*</span></span>
                        <input
                            name="buyerFiscalCountry"
                            type="text"
                            minLength={3}
                            maxLength={40}
                            pattern="^[A-Za-z\s\-]{3,40}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalCountry")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalCountry ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Județ fiscal <span className="text-red-500">*</span></span>
                        <input
                            name="buyerFiscalCounty"
                            type="text"
                            minLength={3}
                            maxLength={30}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]{3,30}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalCounty")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalCounty ?? ""}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalPostalCode")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalPostalCode ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Municipiu / oraș / comună fiscal(ă) <span className="text-red-500">*</span></span>
                        <input
                            name="buyerFiscalCity"
                            type="text"
                            minLength={3}
                            maxLength={50}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalCity")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalCity ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Sat / sector fiscal <span className="text-red-500">*</span></span>
                        <input
                            name="buyerFiscalDistrict"
                            type="text"
                            minLength={3}
                            maxLength={50}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\-']{3,50}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalDistrict")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalDistrict ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Strada fiscală <span className="text-red-500">*</span></span>
                        <input
                            name="buyerFiscalStreet"
                            type="text"
                            minLength={2}
                            maxLength={60}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\.,\-]{2,60}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalStreet")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalStreet ?? ""}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalStreetNumber")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalStreetNumber ?? ""}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalBlock")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalBlock ?? ""}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalStaircase")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalStaircase ?? ""}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalFloor")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalFloor ?? ""}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerFiscalApartment")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerFiscalApartment ?? ""}
                        />
                    </label>
                </fieldset>
            )}

            {isRepresented && (
                <fieldset className="flex flex-col gap-6">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Nume și prenume reprezentant legal <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="buyerLegalRepName"
                            type="text"
                            minLength={3}
                            maxLength={50}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerLegalRepName")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerLegalRepName ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Serie act identitate reprezentant <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="buyerLegalRepIdSeries"
                            type="text"
                            minLength={2}
                            maxLength={3}
                            pattern="^[A-Z]{2,3}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerLegalRepIdSeries")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerLegalRepIdSeries ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Număr act de identitate reprezentant <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="buyerLegalRepIdNumber"
                            type="text"
                            minLength={6}
                            maxLength={8}
                            pattern="^\d{6,8}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerLegalRepIdNumber")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerLegalRepIdNumber ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>CNP reprezentant <span className="text-red-500">*</span></span>
                        <input
                            name="buyerLegalRepCnp"
                            type="text"
                            minLength={9}
                            maxLength={13}
                            pattern="^\d{9,13}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerLegalRepCnp")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerLegalRepCnp ?? ""}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerLegalRepPhone")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerLegalRepPhone ?? ""}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerLegalRepEmail")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerLegalRepEmail ?? ""}
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
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("buyerLegalRepTitle")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.buyerLegalRepTitle ?? ""}
                        />
                    </label>
                </fieldset>
            )}
        </>
    )
}

export default AdditionalFieldsBuyer;