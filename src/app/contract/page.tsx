"use client"

import Header from "@/app/components/Header";
import Tooltip from "@/app/components/Tooltip";
import Button, { ButtonVariant } from "@/app/components/Button";
import Form from "@/app/components/ContractStep";
import React, { useState } from 'react';
import FormChangeStepButtons from "../components/FormStepsControl";

export default function ContractPage() {
    const [contractData, setContractData] = useState({});
    const [btnVariant, setBtnVariant] = useState<ButtonVariant>("primary");
    const [personType, setPersonType] = useState("persoanaFizica");
    const [formStep, setFormStep] = useState(1);

    const handlePersonType = (selectedPerson: string) => {
        console.log(selectedPerson);
        if (selectedPerson === "persoanaJurdica") {
            setPersonType(selectedPerson);
        } else {
            setPersonType(selectedPerson);
        }
    }

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
        <main className="shadow-lg rounded-lg bg-white border border-custom px-5 py-10 xl-max-w-8/10 lg:p-20">

            <h1 className="text-md font-semibold uppercase mb-16 text-center md:text-xl lg:text-2xl xl:text-3xl">Contract de vânzare-cumpărare auto</h1>

            <div className={`${formStep > 2 ? "invisible" : "flex"} flex gap-4 justify-center mb-6 *:cursor-pointer`}>
                <Button
                    label={"Persoana fizică"}
                    className={`${personType === "persoanaFizica" ? "btn active" : ""}`}
                    variant={"active"}
                    onClick={() => handlePersonType("persoanaFizica")}
                />
                <Button
                    label={"Persoana juridică"}
                    className={`${personType === "persoanaJuridica" ? "btn active" : ""}`}
                    variant={"active"}
                    onClick={() => handlePersonType("persoanaJuridica")}
                />
            </div>

            <Form
                formStep={formStep}
                setFormStep={setFormStep}
                personType={personType}
                handlePersonType={handlePersonType}
            />

        </main>
    );
};