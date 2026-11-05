import { useState } from "react";
import { ContractFormProps } from "../types";

const AdditionalFieldsSeller = ({
    formStep,
    setFormStep,
    invalidFields,
    hasAnotherHome,
    isRepresented,
    storedFields
}: ContractFormProps) => {

    console.log(invalidFields);

    return (
        <>
            {hasAnotherHome && (
                <fieldset className="flex flex-col gap-6">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Nume și prenume reprezentant legal <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="sellerLegalRepName"
                            type="text"
                            minLength={3}
                            maxLength={50}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']+$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerLegalRepName")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerLegalRepName"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Serie act identitate reprezentant <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="sellerLegalRepIdSeries"
                            type="text"
                            minLength={2}
                            maxLength={3}
                            pattern="^[A-Z]{2,3}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerLegalRepIdSeries")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerLegalRepIdSeries"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Număr act de identitate reprezentant <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="sellerLegalRepIdNumber"
                            type="text"
                            minLength={6}
                            maxLength={8}
                            pattern="^\d{6,8}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerLegalRepIdNumber")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerLegalRepIdNumber"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            CNP reprezentant <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="sellerLegalRepCnp"
                            type="text"
                            minLength={9}
                            maxLength={13}
                            pattern="^\d{9,13}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerLegalRepCnp")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerLegalRepCnp"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Telefon / Fax reprezentant</span>
                        <input
                            name="sellerLegalRepPhone"
                            type="text"
                            minLength={10}
                            maxLength={10}
                            pattern="^\d{10}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerLegalRepPhone")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerLegalRepPhone"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Email reprezentant</span>
                        <input
                            name="sellerLegalRepEmail"
                            type="email"
                            minLength={5}
                            maxLength={50}
                            pattern="^[\w.-]+@[\w.-]+\.\w{2,}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerLegalRepEmail")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerLegalRepEmail"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Calitate reprezentant</span>
                        <input
                            name="sellerLegalRepTitle"
                            type="text"
                            minLength={3}
                            maxLength={50}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerLegalRepTitle")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerLegalRepTitle"] ?? ""}
                        />
                    </label>
                </fieldset>
            )}

            {isRepresented && (
                <fieldset className="flex flex-col gap-6">
                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Țara fiscală</span>
                        <input
                            name="sellerFiscalCountry"
                            type="text"
                            minLength={3}
                            maxLength={40}
                            pattern="^[A-Za-z\s\-]{3,40}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalCountry")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalCountry"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Județ fiscal <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="sellerFiscalCounty"
                            type="text"
                            minLength={3}
                            maxLength={30}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]{3,30}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalCounty")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalCounty"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Cod poștal fiscal</span>
                        <input
                            name="sellerFiscalPostalCode"
                            type="text"
                            minLength={6}
                            maxLength={6}
                            pattern="^\d{6}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalPostalCode")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalPostalCode"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Municipiu / oraș / comună fiscal(ă) <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="sellerFiscalCity"
                            type="text"
                            minLength={3}
                            maxLength={50}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalCity")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalCity"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Sat / sector fiscal <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="sellerFiscalDistrict"
                            type="text"
                            minLength={3}
                            maxLength={50}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\-']{3,50}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalDistrict")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalDistrict"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>
                            Strada fiscală <span className="text-red-500">*</span>
                        </span>
                        <input
                            name="sellerFiscalStreet"
                            type="text"
                            minLength={2}
                            maxLength={60}
                            pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\.,\-]{2,60}$"
                            required
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalStreet")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalStreet"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Număr fiscal</span>
                        <input
                            name="sellerFiscalStreetNumber"
                            type="text"
                            minLength={1}
                            maxLength={10}
                            pattern="^[0-9]{1,10}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalStreetNumber")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalStreetNumber"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Bloc fiscal</span>
                        <input
                            name="sellerFiscalBlock"
                            type="text"
                            minLength={1}
                            maxLength={5}
                            pattern="^[A-Za-z0-9]{1,5}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalBlock")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalBlock"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Scara fiscal</span>
                        <input
                            name="sellerFiscalStaircase"
                            type="text"
                            minLength={1}
                            maxLength={3}
                            pattern="^[A-Za-z0-9]{1,3}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalStaircase")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalStaircase"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Etaj fiscal</span>
                        <input
                            name="sellerFiscalFloor"
                            type="text"
                            minLength={1}
                            maxLength={2}
                            pattern="^[0-9]{1,2}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalFloor")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalFloor"] ?? ""}
                        />
                    </label>

                    <label className="flex flex-col text-sm font-medium text-gray-700">
                        <span>Apartament fiscal</span>
                        <input
                            name="sellerFiscalApartment"
                            type="text"
                            minLength={1}
                            maxLength={4}
                            pattern="^[0-9]{1,4}$"
                            className={`contract-input-field ${invalidFields?.hasOwnProperty("sellerFiscalApartment")
                                    ? "border-2 !border-danger"
                                    : ""
                                }`}
                            defaultValue={storedFields?.["sellerFiscalApartment"] ?? ""}
                        />
                    </label>
                </fieldset>
            )}
        </>
    )
}

export default AdditionalFieldsSeller;