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
                <span>Nume / Prenume <span className="text-red-500">*</span></span>
                <input
                    className={`contract-input-field ${invalidFields?.includes("Nume/denumire vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Nume/denumire vanzator" minLength={3} maxLength={50} pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']+$" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Țara</span>
                <input className={`contract-input-field ${invalidFields?.includes("Tara vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Tara vanzator" minLength={3} maxLength={40} pattern="^[A-Za-z\s\-]+$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Județ <span className="text-red-500">*</span></span>
                <input className={`contract-input-field ${invalidFields?.includes("Judet vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Judet vanzator" minLength={3} maxLength={30} pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]+$" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Cod poștal</span>
                <input className={`contract-input-field ${invalidFields?.includes("CP vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="CP vanzator" minLength={6} maxLength={6} pattern="^\d+$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Municipiu / oraș / comună <span className="text-red-500">*</span></span>
                <input className={`contract-input-field ${invalidFields?.includes("Municipiu/oras/comuna vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Municipiu/oras/comuna vanzator" minLength={3} maxLength={50} pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']+$" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Sat / sector <span className="text-red-500">*</span></span>
                <input className={`contract-input-field ${invalidFields?.includes("Sat/sector vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Sat/sector vanzator" minLength={3} maxLength={50} pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\-']+$" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Strada <span className="text-red-500">*</span></span>
                <input className={`contract-input-field ${invalidFields?.includes("Str vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Str vanzator" minLength={2} maxLength={60} pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s.,\-]+$" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Număr</span>
                <input className={`contract-input-field ${invalidFields?.includes("Nr vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Nr vanzator" minLength={1} maxLength={10} pattern="^[0-9]+$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Bloc</span>
                <input className={`contract-input-field ${invalidFields?.includes("Bl vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Bl vanzator" minLength={1} maxLength={5} pattern="^[A-Za-z0-9]+$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Scara</span>
                <input className={`contract-input-field ${invalidFields?.includes("Sc vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Sc vanzator" minLength={1} maxLength={3} pattern="^[A-Za-z0-9]+$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Etaj</span>
                <input className={`contract-input-field ${invalidFields?.includes("Et vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Et vanzator" minLength={1} maxLength={2} pattern="^[0-9]+$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Apartament</span>
                <input className={`contract-input-field ${invalidFields?.includes("Ap vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Ap vanzator" minLength={1} maxLength={4} pattern="^[0-9]+$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Serie act identitate <span className="text-red-500">*</span></span>
                <input className={`contract-input-field ${invalidFields?.includes("Serie CI vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Serie CI vanzator" minLength={2} maxLength={3} pattern="^[A-Z]+$" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Număr act de identitate <span className="text-red-500">*</span></span>
                <input className={`contract-input-field ${invalidFields?.includes("Nr CI vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Nr CI vanzator" minLength={6} maxLength={8} pattern="^\d+$" required />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Telefon / Fax</span>
                <input className={`contract-input-field ${invalidFields?.includes("Tel/Fax vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Tel/Fax vanzator" minLength={10} maxLength={10} pattern="^\d+$" />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
                <span>Email</span>
                <input className={`contract-input-field ${invalidFields?.includes("E-mail vanzator") ? "border-2 !border-danger" : ""}`} type="email" name="E-mail vanzator" minLength={5} maxLength={50} pattern="^[\w.-]+@[\w.-]+\.\w{2,}$" />
            </label>

            <div data-section="legal-entity" className={`${personType === "legalEntity" ? "flex" : "hidden"} flex-col gap-4`}>
                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Țara fiscală</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Tara fiscala vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Tara fiscala vanzator" minLength={3} maxLength={40} pattern="^[A-Za-z\s\-]{3,40}$" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Județ fiscal</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Judet fiscal vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Judet fiscal vanzator" minLength={3} maxLength={30} pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-]{3,30}$" required />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Cod poștal fiscal</span>
                    <input className={`contract-input-field ${invalidFields?.includes("CP fiscal vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="CP fiscal vanzator" minLength={6} maxLength={6} pattern="^\d{6}$" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Municipiu / oraș / comună fiscal(ă)</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Municipiu/oras/comuna fiscal vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Municipiu/oras/comuna fiscal vanzator" minLength={3} maxLength={50} pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$" required />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Sat / sector fiscal</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Sat/sector fiscal vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Sat/sector fiscal vanzator" minLength={3} maxLength={50} pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\-']{3,50}$" required />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Strada fiscală</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Str fiscala vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Str fiscala vanzator" minLength={2} maxLength={60} pattern="^[A-Za-zĂăÂâÎîȘșȚț0-9\s\.,\-]{2,60}$" required />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr fiscal</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Nr fiscal vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Nr fiscal vanzator" minLength={1} maxLength={10} pattern="^[0-9]{1,10}$" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Bloc fiscal</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Bl fiscal vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Bl fiscal vanzator" minLength={1} maxLength={5} pattern="^[A-Za-z0-9]{1,5}$" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Scara fiscal</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Sc fiscal vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Sc fiscal vanzator" minLength={1} maxLength={3} pattern="^[A-Za-z0-9]{1,3}$" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Etaj fiscal</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Et fiscal vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Et fiscal vanzator" minLength={1} maxLength={2} pattern="^[0-9]{1,2}$" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Apartament fiscal</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Ap fiscal vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Ap fiscal vanzator" minLength={1} maxLength={4} pattern="^[0-9]{1,4}$" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Nume / Prenume reprezentant legal</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Reprezentant vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Reprezentant vanzator" minLength={3} maxLength={50} pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$" required />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Serie act identitate reprezentant</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Serie CI reprezentant vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Serie CI reprezentant vanzator" minLength={2} maxLength={3} pattern="^[A-Z]{2,3}$" required />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr act de identitate reprezentant</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Nr CI reprezentant vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Nr CI reprezentant vanzator" minLength={6} maxLength={8} pattern="^\d{6,8}$" required />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>CNP/CIF reprezentant</span>
                    <input className={`contract-input-field ${invalidFields?.includes("CNP reprezentant vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="CNP reprezentant vanzator" minLength={9} maxLength={13} pattern="^\d{9,13}$" required />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Telefon / Fax reprezentant</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Tel/Fax reprezentant vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Tel/Fax reprezentant vanzator" minLength={10} maxLength={10} pattern="^\d{10}$" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Email reprezentant</span>
                    <input className={`contract-input-field ${invalidFields?.includes("E-mail reprezentant vanzator") ? "border-2 !border-danger" : ""}`} type="email" name="E-mail reprezentant vanzator" minLength={5} maxLength={50} pattern="^[\\w.-]+@[\\w.-]+\\.\\w{2,}$" />
                </label>

                <label className="flex flex-col text-sm font-medium text-gray-700"><span>Calitate reprezentant</span>
                    <input className={`contract-input-field ${invalidFields?.includes("Calitate reprezentant vanzator") ? "border-2 !border-danger" : ""}`} type="text" name="Calitate reprezentant vanzator" minLength={3} maxLength={50} pattern="^[A-Za-zĂăÂâÎîȘșȚț\s\-']{3,50}$" />
                </label>
            </div>
        </fieldset>
    );
};

export default Vanzator;