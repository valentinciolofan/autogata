"use client"

import Header from "@/app/components/Header";
import Tooltip from "@/app/components/Tooltip";

import Button from "@/app/components/Button";
import Form from "@/app/components/ContractStep";

import React, { useState } from 'react';
import { ContractFormProps, ButtonVariant } from "../types";

export default function ContractPage() {
    const [btnVariant, setBtnVariant] = useState<ButtonVariant>("primary");
    const [personType, setPersonType] = useState("individual");
    const [formStep, setFormStep] = useState(1);
    const formSteps = 4;

    const handlePersonType = (selectedPerson: string) => {
        console.log(selectedPerson);
        if (selectedPerson === "persoanaJurdica") {
            setPersonType(selectedPerson);
        } else {
            setPersonType(selectedPerson);
        }
    }

    return (
        <main className="shadow-lg rounded-lg bg-white border border-custom px-5 py-10 xl-max-w-8/10 lg:p-20">

            <h1 className={`${formStep > 4 ? "hidden" : "block"} text-md font-semibold uppercase mb-16 text-center md:text-xl lg:text-2xl xl:text-3xl`}>Contract de vânzare-cumpărare auto</h1>

            <div className={`${formStep > 4 ? "hidden" : "flex"} justify-between mb-16 items-center w-full relative max-w-xl mx-auto`}>
                {Array.from({ length: formSteps }).map((_, index) => (
                    <div key={index} className="relative flex-1 flex justify-center items-center">
                        {/* Line to the next step */}
                        {index < formSteps - 1 && (
                            <span
                                className={`absolute top-1/2 left-1/2 h-0.5 w-full z-0 translate-y-[-50%] transition-colors duration-500
            ${formStep > index + 1 ? "bg-blue-500" : "bg-gray-300"}`}
                            />
                        )}

                        {/* Step Circle */}
                        <div
                            className={`z-10 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-500
          ${formStep >= index + 1
                                    ? "bg-blue-500 border-blue-500 text-white"
                                    : "bg-white border-gray-300 text-gray-400"}`}
                        >
                            <div className="w-2 h-2 rounded-full bg-white transition-all duration-300" />
                        </div>
                    </div>
                ))}
            </div>

            <Form
                formStep={formStep}
                setFormStep={setFormStep}
                setBtnVariant={setBtnVariant}
                personType={personType}
                handlePersonType={handlePersonType}
            />
        </main >
    );
}; ``