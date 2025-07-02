import { ReactNode } from 'react';

export interface ContractFormProps {
    invalidFields: Record<string, string>;
    persoanaJuridica?: (personType: string) => void;
    personType?: string;
    formStep: number;
    onNextStep?: () => void;
    onPreviousStep?: () => void;
    setFormStep?: () => void;
    setBtnVariant?: () => void;
    handlePersonType?: () => void;

}
export type FormValidationSummary = {
    validFields: Record<string, string>;
    invalidFields: Record<string, string>;
    isValid: boolean;
};

export interface StepProps {
    step: number;
    stepName: string;
    component: ReactNode;

}

