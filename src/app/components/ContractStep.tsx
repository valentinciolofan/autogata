import Vanzator from "./Vanzator";
import Cumparator from "./Cumparator";

import ObiectContract from "./ObiectContract";
import DetaliiContract from "./DetaliiContract";

import FormChangeStepButtons from "./FormStepsControl";
import { useState, useRef, ReactNode } from "react";

import ContractSuccess from "./ContractSuccess";
import ContractError from "./ContractError";

import ProgressBar from "./ProgressBar";
import { fileURLToPath } from "url";

interface StepProps {
    step: number;
    stepName: string;
    component: ReactNode;
}
type FormValidationSummary = {
    validFields: Record<string, string>;
    invalidFields: Record<string, string>;
    isValid: boolean;
};

const Form = ({
    formStep,
    setFormStep,
    setBtnVariant,
    personType,
    handlePersonType,
}) => {
    const [contractData, setContractData] = useState<{
        seller?: Record<string, any>;
        buyer?: Record<string, any>;
        contractSubject?: Record<string, any>;
        contractDetails?: Record<string, any>;
    }>({});

    const [contractStatus, setContractStatus] = useState<"success" | "error" | "generating">("generating");
    const [isRepresented, setIsRepresented] = useState<true | false>(false);

    const [validation, setValidation] = useState<FormValidationSummary>({
        validFields: {},
        invalidFields: {},
        isValid: false,
    });
    const [hasAnotherHome, setHasAnotherHome] = useState<true | false>(false);

    const formRef = useRef<HTMLFormElement>(null);

    const submitContractData = async (data: object) => {
        try {
            console.log(data, 'this is the data');

            setContractStatus("generating");

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

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'contract-auto.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);

            setContractStatus("success");

            return blob;
        } catch (err) {
            console.log("Error: ", err);
            setContractStatus("error");
        }
    }


    const formSteps: StepProps[] = [
        {
            step: 1,
            stepName: "seller",
            component: (
                <Vanzator
                    invalidFields={[]}
                    persoanaJuridica={handlePersonType}
                    personType={personType}
                />
            )
        },
        {
            step: 2,
            stepName: "buyer",
            component: (
                <Cumparator
                    invalidFields={[]}
                    persoanaJuridica={handlePersonType}
                    personType={personType}
                />
            )
        },
        {
            step: 3,
            stepName: "contractSubject",
            component: (
                <ObiectContract
                    invalidFields={[]}
                />
            )
        },
        {
            step: 4,
            stepName: "contractDetails",
            component: (
                <DetaliiContract
                    invalidFields={[]}
                />
            )
        },
        {
            step: 5,
            stepName: "contractSubmit",
            component: (
                contractStatus === "success" ? (
                    <ContractSuccess />
                ) : contractStatus === "error" ? (
                    <ContractError />
                ) : contractStatus === "generating" ? (
                    <ProgressBar />
                ) : null
            )
        },
    ]

    const formFields = () => {
        const form = formRef.current as HTMLFormElement;
        const formElements = Array.from(form.elements).filter(element => element instanceof HTMLInputElement);

        return formElements
    }

    const formValidation = () => {
        const validFields: Record<string, string> = {};
        const invalidFields: Record<string, string> = {};

        for (const field of formFields()) {
            if (!field.name) continue;

            const trimmedValue = field.value.trim()

            if (trimmedValue === "" && !field.required) continue

            const isValid = field.checkValidity();

            isValid ?
                validFields[field.name] = field.value :
                invalidFields[field.name] = field.value;
        }
        console.log(validFields, 'valid');
        console.log(invalidFields, 'invalid');

        setValidation({
            validFields,
            invalidFields,
            isValid: Object.keys(invalidFields).length === 0,
        });

        return {
            validFields,
            invalidFields,
            isValid: Object.keys(invalidFields).length === 0
        }
    }

    const fieldValidation = (input: HTMLInputElement) => {
        const value = input.value.trim();
        const { name, required, minLength, maxLength, pattern } = input;


        if (minLength > 0 && value.length < minLength) {
            return false;
        }

        if (maxLength > 0 && value.length > maxLength) {
            return false;
        }

        if (pattern) {
            const regex = new RegExp(`^(?:${pattern})$`);

            if (!regex.test(value)) {
                return false;
            }
        }

        return true;
    }



    const saveStepData = (validFields: Record<string, any>, invalidFields: Record<string, any>) => {
        const stepKey = formSteps[formStep - 1].stepName;

        const updatedContractData = {
            ...contractData,
            [stepKey]: {
                ...contractData[stepKey],
                ...validFields,
                ...invalidFields
            },
        };

        setContractData(updatedContractData);
        localStorage.setItem(stepKey, JSON.stringify(updatedContractData[stepKey]));
        console.log("Saved data for", stepKey, invalidFields, validFields);

        return updatedContractData;
    };

    const nextFormStep = () => {
        const formSummary = formValidation();
        const updatedData = saveStepData(formSummary.validFields, formSummary.invalidFields);

        if (formSummary.isValid && formStep === 4) {
            submitContractData(updatedData);
            setFormStep(formStep + 1);
        }

        if (formSummary.isValid && formStep >= 1 && formStep <= 4) {
            setFormStep(formStep + 1);
        }
    }

    const previousFormStep = () => {
        const formSummary = formValidation();

        saveStepData(formSummary.validFields, formSummary.invalidFields);

        if (formStep >= 2 && formStep <= 4) {
            setFormStep(formStep - 1);
        }
    }

    const currentStep = formSteps.find(({ step }) => step === formStep);

    return (
        <form
            ref={formRef}
            className="max-w-5/10 mx-auto flex flex-col gap-6">
            {currentStep?.component}

            <FormChangeStepButtons
                formStep={formStep}
                onNextStep={nextFormStep}
                onPreviousStep={previousFormStep}
            />
        </form>
    )
}
export default Form;