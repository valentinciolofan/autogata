import Vanzator from "./Vanzator";
import Cumparator from "./Cumparator";

import ObiectContract from "./ObiectContract";
import DetaliiContract from "./DetaliiContract";

import FormChangeStepButtons from "./FormStepsControl";
import { useState, useRef, ReactNode, useEffect } from "react";

import ContractSuccess from "./ContractSuccess";
import ContractError from "./ContractError";

import ProgressBar from "./ProgressBar";
import { fileURLToPath } from "url";

import { ContractFormProps, FormValidationSummary, StepProps, ContractData } from "../types"
import { useRouter, useParams, usePathname } from "next/navigation";


const Form = ({
    formStep,
    setFormStep,
    setBtnVariant,
}: ContractFormProps) => {

    const [contractData, setContractData] = useState<ContractData>({});

    const [contractStatus, setContractStatus] = useState<"success" | "error" | "generating">("error");
    const [isRepresented, setIsRepresented] = useState<true | false>(false);

    const [validation, setValidation] = useState<FormValidationSummary>({
        validFields: {},
        invalidFields: {},
        isValid: false,
    });

    const [hasAnotherHome, setHasAnotherHome] = useState<true | false>(false);

    const [contractDownloadLink, setContractDownloadLink] = useState<string>("#");

    const formRef = useRef<HTMLFormElement>(null);

    const submitContractData = async (data: object) => {
        try {
            const apiUrl = process.env.CONTRACT_API_URL;

            setContractStatus("generating");

            const response = await fetch(`${apiUrl}`, {
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
            console.log(url, 'download link');
            setContractDownloadLink(url);
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
                    formStep={formStep}
                    setFormStep={setFormStep}
                    validation={validation}
                    invalidFields={validation.invalidFields}
                />
            )
        },
        {
            step: 2,
            stepName: "buyer",
            component: (
                <Cumparator
                    formStep={formStep}
                    setFormStep={setFormStep}
                    invalidFields={validation.invalidFields}
                />
            )
        },
        {
            step: 3,
            stepName: "contractSubject",
            component: (
                <ObiectContract
                    formStep={formStep}
                    setFormStep={setFormStep}
                    invalidFields={validation.invalidFields}
                />
            )
        },
        {
            step: 4,
            stepName: "contractDetails",
            component: (
                <DetaliiContract
                    formStep={formStep}
                    setFormStep={setFormStep}
                    invalidFields={validation.invalidFields}
                />
            )
        },
        {
            step: 5,
            stepName: "contractSubmit",
            component: (
                contractStatus === "success" ? (
                    <ContractSuccess downloadLink={contractDownloadLink} />
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

            const isValid = fieldValidation(field);

            isValid ?
                validFields[field.name] = field.value :
                invalidFields[field.name] = field.value;
        }

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

        if (input.type === "checkbox") {
            return !required || input.checked;
        }

        if (required && value === "") {
            return false;
        }

        if (minLength > 0 && value.length < minLength) {
            return false;
        }

        if (maxLength > 0 && value.length > maxLength) {
            return false;
        }

        if (pattern) {
            const regex = new RegExp(pattern);

            if (!regex.test(value)) {

                return false;
            }
        }

        return true;
    }

    const saveStepData = (validFields: Record<string, any>, invalidFields: Record<string, any>) => {
        const stepKey = formSteps[formStep - 1].stepName;

        if (stepKey === "contractSubmit") {
            return contractData;
        }

        const updatedContractData: ContractData = {
            ...contractData,
            [stepKey]: {
                ...contractData[stepKey],
                ...validFields,
                ...invalidFields,
            },
        };

        setContractData(updatedContractData);
        localStorage.setItem(stepKey, JSON.stringify(updatedContractData[stepKey]));

        return updatedContractData;
    };

    const nextFormStep = () => {
        const formSummary = formValidation();
        const updatedData = saveStepData(formSummary.validFields, formSummary.invalidFields);

        if (formSummary.isValid && formStep && formStep === 4) {
            submitContractData(updatedData);
            setFormStep(formStep + 1);
        }

        if (formSummary.isValid && formStep && formStep >= 1 && formStep <= 4) {
            setFormStep(formStep + 1);
        }
    }

    const previousFormStep = () => {
        const formSummary = formValidation();

        saveStepData(formSummary.validFields, formSummary.invalidFields);

        if (formStep && formStep >= 2 && formStep <= 4) {
            setFormStep(formStep - 1);
        }
    }

    useEffect(() => {
        if (formStep && formStep >= 1 && formStep <= 4) {
            window.history.pushState(
                {},
                "",
                `/contract/step-${formStep}`
            );
        }
    }, [formStep]);

    useEffect(() => {
        if (formStep === 5) {
            const statusPath =
                contractStatus === "success"
                    ? "success"
                    : contractStatus === "error"
                        ? "error"
                        : "processing";

            window.history.replaceState(
                {},
                "",
                `/contract/${statusPath}`
            );
        }
    }, [formStep, contractStatus]);


    const currentStep = formSteps.find(({ step }) => step === formStep);

    return (
        <form
            ref={formRef}
            className="max-w-full md:max-w-5/10 mx-auto flex flex-col gap-6">
            {currentStep?.component}

            <FormChangeStepButtons
                formStep={formStep}
                setFormStep={setFormStep}
                onNextStep={nextFormStep}
                onPreviousStep={previousFormStep}
            />
        </form>
    )
}
export default Form;