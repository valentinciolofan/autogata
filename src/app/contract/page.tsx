"use client"

import Header from "@/app/components/Header";
import Tooltip from "@/app/components/Tooltip";
import Button, { ButtonVariant } from "@/app/components/Button";
import React, { useState } from 'react';

export default function ContractPage() {
    const [contractData, setContractData] = useState({});
    const [btnVariant, setBtnVariant] = useState<ButtonVariant>("primary");


    const collectContractData = (data: React.FormEvent<HTMLFormElement>) => {
        data.preventDefault();

        const formData = new FormData(data.currentTarget);

        const collectedFormData = Object.fromEntries(formData);

        setContractDataAndSubmit(collectedFormData);
    };

    const setContractDataAndSubmit = (collectedContractData: object) => {
        setContractData(collectedContractData);

        submitContractData(collectedContractData);
    }

    const submitContractData = async (data: object) => {
        setBtnVariant("processing");

        try {
            const response = await fetch('http://localhost:3001/api/contract', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error(`Server responded with status ${response.status}`);
            }

            const blob = await response.blob();

            setBtnVariant("primary");

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'contract-auto.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);

            return blob;
        } catch (err) {
            console.log("Error: ", err);
            setBtnVariant("primary");
        }
    }

    return (
        <main className="shadow-lg rounded-lg border border-custom px-5 py-10 bg-white mx-5 md:mx-8 lg:mx-14 xl-max-w-8/10 lg:p-20 mt-20 mb-30">

            <h1 className="text-md font-semibold uppercase mb-16 text-center md:text-xl lg:text-2xl xl:text-3xl">Contract de vânzare-cumpărare auto</h1>

            <form className="flex flex-col align-center gap-16" onSubmit={collectContractData}>
                <fieldset>
                    <legend className="font-bold mb-6">1. Persoana care înstrăinează (vânzător)</legend>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col gap-4 md:basis-1/2">
                            <label className="flex flex-col text-sm font-medium text-gray-700 relative"><span>Nume / Prenume <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Nume/denumire vanzator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Țara</span>
                                <input className="contract-input-field" type="text" name="Tara vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Județ <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Judet vanzator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Cod poștal</span>
                                <input className="contract-input-field" type="text" name="CP vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Municipiu / oraș / comună <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Municipiu/oras/comuna vanzator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Sat / sector <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Sat/sector vanzator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Strada <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Str vanzator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr</span>
                                <input className="contract-input-field" type="text" name="Nr vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Bloc</span>
                                <input className="contract-input-field" type="text" name="Bl vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Scara</span>
                                <input className="contract-input-field" type="text" name="Sc vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Etaj</span>
                                <input className="contract-input-field" type="text" name="Et vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Apartament</span>
                                <input className="contract-input-field" type="text" name="Ap vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Serie act identitate <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Serie CI vanzator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr act de identitate <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Nr CI vanzator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Telefon / Fax</span>
                                <input className="contract-input-field" type="text" name="Tel/Fax vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Email</span>
                                <input className="contract-input-field" type="text" name="E-mail vanzator" />
                            </label>
                        </div>

                        <div className="flex flex-col gap-4 md:basis-1/2">
                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Țara fiscală</span>
                                <input className="contract-input-field" type="text" name="Tara fiscala vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Județ fiscal</span>
                                <input className="contract-input-field" type="text" name="Judet fiscal vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Cod poștal fiscal</span>
                                <input className="contract-input-field" type="text" name="CP fiscal vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Municipiu / oraș / comună fiscal(ă)</span>
                                <input className="contract-input-field" type="text" name="Municipiu/oras/comuna fiscal vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Sat / sector fiscal</span>
                                <input className="contract-input-field" type="text" name="Sat/sector fiscal vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Strada fiscală</span>
                                <input className="contract-input-field" type="text" name="Str fiscala vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr fiscal</span>
                                <input className="contract-input-field" type="text" name="Nr fiscal vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Bloc fiscal</span>
                                <input className="contract-input-field" type="text" name="Bl fiscal vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Scara fiscal</span>
                                <input className="contract-input-field" type="text" name="Sc fiscal vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Etaj fiscal</span>
                                <input className="contract-input-field" type="text" name="Et fiscal vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Apartament fiscal</span>
                                <input className="contract-input-field" type="text" name="Ap fiscal vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Nume / Prenume reprezentant legal</span>
                                <input className="contract-input-field" type="text" name="Reprezentant vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Serie act identitate reprezentant</span>
                                <input className="contract-input-field" type="text" name="Serie CI reprezentant vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr act de identitate reprezentant</span>
                                <input className="contract-input-field" type="text" name="Nr CI reprezentant vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>CNP/CIF reprezentant</span>
                                <input className="contract-input-field" type="text" name="CNP reprezentant vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Telefon / Fax reprezentant</span>
                                <input className="contract-input-field" type="text" name="Tel/Fax reprezentant vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Email reprezentant</span>
                                <input className="contract-input-field" type="text" name="E-mail reprezentant vanzator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Calitate reprezentant</span>
                                <input className="contract-input-field" type="text" name="Calitate reprezentant vanzator" />
                            </label>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend className="font-bold mb-6">2. Persoana care dobândește (cumpărător)</legend>

                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col gap-4 md:basis-1/2">
                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Nume / Prenume <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Nume/denumire cumparator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Țara</span>
                                <input className="contract-input-field" type="text" name="Tara cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Județ <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Judet cumparator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Cod poștal</span>
                                <input className="contract-input-field" type="text" name="CP cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Municipiu / oraș / comună <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Municipiu/oras/comuna cumparator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Sat / sector <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Sat/sector cumparator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Strada  <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Str cumparator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr</span>
                                <input className="contract-input-field" type="text" name="Nr cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Bloc</span>
                                <input className="contract-input-field" type="text" name="Bl cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Scara</span>
                                <input className="contract-input-field" type="text" name="Sc cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Etaj</span>
                                <input className="contract-input-field" type="text" name="Et cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Apartament</span>
                                <input className="contract-input-field" type="text" name="Ap cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Serie act identitate  <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Serie CI cumparator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr act de identitate <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Nr CI cumparator" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Telefon / Fax</span>
                                <input className="contract-input-field" type="text" name="Tel/Fax cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Email</span>
                                <input className="contract-input-field" type="text" name="E-mail cumparator" />
                            </label>
                        </div>

                        <div className="flex flex-col gap-4 md:basis-1/2">
                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Țara fiscală</span>
                                <input className="contract-input-field" type="text" name="Tara fiscala cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Județ fiscal</span>
                                <input className="contract-input-field" type="text" name="Judet fiscal cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Cod poștal fiscal</span>
                                <input className="contract-input-field" type="text" name="CP fiscal cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Municipiu / oraș / comună fiscal(ă)</span>
                                <input className="contract-input-field" type="text" name="Municipiu/oras/comuna fiscal cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Sat / sector fiscal</span>
                                <input className="contract-input-field" type="text" name="Sat/sector fiscal cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Strada fiscală</span>
                                <input className="contract-input-field" type="text" name="Str fiscala cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr fiscal</span>
                                <input className="contract-input-field" type="text" name="Nr fiscal cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Bloc fiscal</span>
                                <input className="contract-input-field" type="text" name="Bl fiscal cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Scara fiscal</span>
                                <input className="contract-input-field" type="text" name="Sc fiscal cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Etaj fiscal</span>
                                <input className="contract-input-field" type="text" name="Et fiscal cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Apartament fiscal</span>
                                <input className="contract-input-field" type="text" name="Ap fiscal cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Nume / Prenume reprezentant legal</span>
                                <input className="contract-input-field" type="text" name="Reprezentant cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Serie act identitate</span>
                                <input className="contract-input-field" type="text" name="Serie CI reprezentant cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Număr act de identitate</span>
                                <input className="contract-input-field" type="text" name="Nr CI reprezentant cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>CNP/CIF reprezentant</span>
                                <input className="contract-input-field" type="text" name="CNP reprezentant cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Telefon / Fax</span>
                                <input className="contract-input-field" type="text" name="Tel/Fax reprezentant cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Email reprezentant</span>
                                <input className="contract-input-field" type="text" name="E-mail reprezentant cumparator" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Calitate reprezentant</span>
                                <input className="contract-input-field" type="text" name="Calitate reprezentant cumparator" />
                            </label>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend className="font-bold mb-6">3. Obiectul contractului</legend>

                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col gap-4 md:basis-1/2">
                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    Marca autovehiculul
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia D.1 din talon" />
                                </span>
                                <input className="contract-input-field" type="text" name="Marca mijlocului de transport" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    Tipul modelului
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia D.3 din talon" />
                                </span>
                                <input className="contract-input-field" type="text" name="Tipul mijlocului de transport" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    Număr de identificare / Serie de șasiu
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia E din talon" />
                                </span>
                                <input className="contract-input-field" type="text" name="Nr identificare al mijlocului de transport" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    Serie motor
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia 10 din cartea autovehiculului" />
                                </span>
                                <input className="contract-input-field" type="text" name="Seria motorului mijlocului de transport" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    Capacitate cilindrică cm³
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia P.1 din talonul autovehiculului" />
                                </span>
                                <input className="contract-input-field" type="number" name="Capacitatea cilindrica a motorului mijlocului de transport" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    Greutate maximă admisă (pentru remorci/semiremorci)
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia F.1 din talonul autovehiculului" />
                                </span>
                                <input className="contract-input-field" type="number" name="Greutatea maxima admisa a remorcii/semiremorcii" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    Număr de înmatriculare
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia A din talonul autovehiculului" />
                                </span>
                                <input className="contract-input-field" type="text" name="Nr de inmatriculare/inregistrare al mijlocului de transport" required />
                            </label>
                        </div>

                        <div className="flex flex-col gap-4 md:basis-1/2">
                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Data expirării ITP</span>
                                <input className="contract-input-field" type="number" name="Data expirarii ITP (format: zz.ll.aaaa)" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    Seria și numărul CIV
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia X / Y  din talonul autovehiculului sau pe prima pagina a CIV" />
                                </span>
                                <input className="contract-input-field" type="number" name="Seria nr. CIV" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    An fabricație
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia 5 din cartea autovehiculului imediat dupa numărul de omologare" />
                                </span>
                                <input className="contract-input-field" type="number" name="An de fabricatie" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700">
                                <span className="flex items-center">
                                    Norma euro
                                    <span className="text-red-500">*</span>
                                    <Tooltip label="Pozitia 5 din cartea autovehiculului la sfârșitul numărului de omologare" />
                                </span>
                                <input className="contract-input-field" type="number" name="Norma euro" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Data dobândirii autovehiculului</span>
                                <input className="contract-input-field" type="number" name="Data dobândirii (format: zz.ll.aaaa)" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Actul dobândirii</span>
                                <input className="contract-input-field" type="text" name="Actul dobandirii" />
                            </label>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend className="font-bold mb-6">4. Preț și detalii contract</legend>

                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col gap-4 md:basis-1/2">
                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Locul încheierii contractului</span>
                                <input className="contract-input-field" type="text" name="Locul incheierii" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Prețul (în litere) <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="text" name="Pret (litere)" required />
                            </label>
                        </div>

                        <div className="flex flex-col gap-4 md:basis-1/2">
                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Prețul (în cifre) <span className="text-red-500">*</span></span>
                                <input className="contract-input-field" type="number" name="Pret (cifre)" required />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Data încheierii contractului</span>
                                <input className="contract-input-field" type="text" name="Data incheierii" />
                            </label>

                            <label className="flex flex-col text-sm font-medium text-gray-700"><span>Anexe la contract (Da/Nu)</span>
                                <input className="contract-input-field" type="text" name="Anexe NU" />
                            </label>
                        </div>
                    </div>
                </fieldset>

                <Button type={"submit"} label={"Generează contract"} variant={btnVariant} className="mx-auto" />
            </form>
        </main>
    );
};