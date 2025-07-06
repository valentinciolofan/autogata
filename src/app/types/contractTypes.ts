import { ReactNode, SetStateAction, Dispatch } from 'react';
import { ButtonVariant } from './ButtonTypes';


export interface ContractFormProps {
    invalidFields?: Record<string, string>;
    persoanaJuridica?: (personType: string) => void;
    personType?: string;
    formStep?: number;
    onNextStep?: () => void;
    onPreviousStep?: () => void;
    setFormStep?: Dispatch<SetStateAction<number>>;
    setBtnVariant?: Dispatch<SetStateAction<ButtonVariant>>;
    handlePersonType?: (selectedPerson: string) => void;
    hasAnotherHome?: boolean;
    isRepresented?: boolean;
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

