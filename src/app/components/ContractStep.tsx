import Vanzator from "./Vanzator";
import Cumparator from "./Cumparator";

import ObiectContract from "./ObiectContract";
import DetaliiContract from "./DetaliiContract";

import FormChangeStepButtons from "./FormStepsControl";
import { useState, useRef, ReactNode } from "react";

interface StepProps {
    step: number;
    stepName: string;
    component: ReactNode;
}

const Form = ({
    formStep,
    setFormStep,
    personType,
    handlePersonType,

}) => {
    const [invalidFields, setInvalidFields] = useState<string[]>([]);
    const formRef = useRef<HTMLFormElement>(null);

    const saveStepData = (currentStepData: string) => {
        console.log(currentStepData);
        localStorage.setItem(formSteps[formStep].stepName, JSON.stringify(currentStepData));
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
            stepName: "contract-subject",
            component: (
                <ObiectContract />
            )
        },
        {
            step: 4,
            stepName: "contract-details",
            component: (
                <DetaliiContract />
            )
        }
    ]

    const formValidation = (): boolean => {
        const form = formRef.current as HTMLFormElement;
        const notValidFields = [] as string[];
        const validFields = [] as string[];

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
            } else {
                validFields.push({
                    fieldName: fieldName,
                    value: valueOfInput,
                })
            }

        }
        
        setInvalidFields(notValidFields);

        if (notValidFields.length === 0) {
            saveStepData(validFields);
        }

        return notValidFields.length === 0;
    }

    const isFieldValid = () => {

    };

    const nextFormStep = () => {
        const isFormValid = formValidation();
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