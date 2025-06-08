import Vanzator from "./Vanzator";
import Cumparator from "./Cumparator";
import ObiectContract from "./ObiectContract";
import DetaliiContract from "./DetaliiContract";
import FormChangeStepButtons from "./FormStepsControl";
import { useState, useRef, ReactNode } from "react";

interface StepProps {
    step: number;
    component: ReactNode;
}

const Form = ({
    formStep,
    setFormStep,
    personType,
    handlePersonType,

}) => {
    const [invalidFields, setInvalidFields] = useState([]);
    const formRef = useRef<HTMLFormElement>(null);
    const formSteps: StepProps[] = [
        {
            step: 1,
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
            component: (
                <Cumparator
                    persoanaJuridica={handlePersonType}
                    personType={personType}
                />
            )
        },
        {
            step: 3,
            component: (
                <ObiectContract />
            )
        },
        {
            step: 4,
            component: (
                <DetaliiContract />
            )
        }
    ]

    const checkFieldValidity = (element) => {
        const label = element.parentElement.firstChild.firstChild;
        const tag = element.tagName?.toLowerCase() === "input";
        const type = element?.getAttribute("type")?.toLowerCase() === "text" || "number";
        const name = element?.getAttribute("name");
        const value = element?.value;
        const minLength = element?.getAttribute("minLength");
        const maxLength = element?.getAttribute("maxLength");
        const patternStr = element?.getAttribute("pattern");
        const regex = new RegExp(`${patternStr}`);

        if (!regex.test(value) && (value.length < minLength || value.length > maxLength)) {
            setInvalidFields(prevInvalidFields => 
                prevInvalidFields.includes(name) ? prevInvalidFields : [...prevInvalidFields, name]

            );
        }
        return invalidFields;
    }

    const nextFormStep = () => {
        const form = formRef.current as HTMLFormElement;

        for (const el of form) {
            const isRequired = el.hasAttribute("required");

            if (isRequired) {
               const x =  checkFieldValidity(el)
                console.log(x);
            }
        }

       

        if (!invalidFields.length && formStep >= 1 && formStep <= 4) {
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