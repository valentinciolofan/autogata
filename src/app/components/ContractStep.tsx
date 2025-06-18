import Vanzator from "./Vanzator";
import Cumparator from "./Cumparator";

import ObiectContract from "./ObiectContract";
import DetaliiContract from "./DetaliiContract";

import FormChangeStepButtons from "./FormStepsControl";
import { useState, useRef, ReactNode } from "react";

import ContractSuccess from "./ContractSuccess";
import ContractError from "./ContractError";

import ProgressBar from "./ProgressBar";

interface StepProps {
    step: number;
    stepName: string;
    component: ReactNode;
}

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


    const [invalidFields, setInvalidFields] = useState<string[]>([]);
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
                    invalidFields={invalidFields}
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
                    persoanaJuridica={handlePersonType}
                    personType={personType}
                />
            )
        },
        {
            step: 3,
            stepName: "contractSubject",
            component: (
                <ObiectContract />
            )
        },
        {
            step: 4,
            stepName: "contractDetails",
            component: (
                <DetaliiContract />
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

    const saveStepData = (currentStepData: Record<string, any>) => {
        const stepKey = formSteps[formStep - 1].stepName;

        const updatedContractData = {
            ...contractData,
            [stepKey]: {
                ...contractData[stepKey],
                ...currentStepData,
            },
        };

        setContractData(updatedContractData);
        localStorage.setItem(stepKey, JSON.stringify(updatedContractData[stepKey]));
        console.log("Saved data for", stepKey, currentStepData);

        return updatedContractData; // 🔁 return for usage elsewhere
    };



    const formValidation = (): object | string[] => {
        const form = formRef.current as HTMLFormElement;
        const notValidFields = [] as string[];
        const validFields = {} as object;

        for (const element of form) {

            const isInput = element instanceof HTMLInputElement;
            const valueOfInput = isInput ? element.value : "";
            const isLegalEntityField: boolean = !!element.closest('[data-section="legal-entity"]');
            const isRequired: boolean = element.hasAttribute("required");
            const fieldName = element.hasAttribute("name") ? element.getAttribute("name") : null;
            const minLength = element.hasAttribute("minLength") ? element.getAttribute("minLength") : null;
            const maxLength = element.hasAttribute("maxLength") ? element.getAttribute("maxLength") : null;
            const patternStr = element.hasAttribute("pattern") ? element.getAttribute("pattern") : false;
            const regex = new RegExp(patternStr);

            const invalidField = isInput &&
                (valueOfInput.length < parseInt(minLength) ||
                    valueOfInput.length > parseInt(maxLength) &&
                    !regex.test(valueOfInput)
                );


            const individualPerson = isInput &&
                !isLegalEntityField &&
                fieldName &&
                !notValidFields.includes(fieldName) &&
                invalidField;


            const legalEntity = isInput &&
                personType === "legalEntity" &&
                !notValidFields.includes(fieldName) &&
                isLegalEntityField &&
                fieldName &&
                invalidField;

            if (!isRequired && valueOfInput === "") {
                continue;
            }

            if (individualPerson) {
                notValidFields.push(fieldName);
            } else if (legalEntity) {
                notValidFields.push(fieldName);
            } else if (isInput && !invalidField) {
                validFields[fieldName] = valueOfInput;
            }
        }

        setInvalidFields(notValidFields);

        if (notValidFields.length === 0) {
            return validFields;
        } else {
            return invalidFields;
        }
    }

    const isFieldValid = () => {

    };

    const nextFormStep = () => {
        const isFormValid = formValidation();
        const updatedData = saveStepData(isFormValid);

        if (formStep === 4) {
            submitContractData(updatedData);
            setFormStep(formStep + 1);
        }

        if (isFormValid && formStep >= 1 && formStep <= 4) {
            setFormStep(formStep + 1);
        }
    }

    const previousFormStep = () => {
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