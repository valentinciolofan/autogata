import { ReactNode, SetStateAction, Dispatch } from 'react';
import { ButtonVariant } from './ButtonTypes';

export interface ContractFormProps {
    validation?: FormValidationSummary;
    invalidFields?: Record<string, string>;
    formStep: number;
    onNextStep?: () => void;
    onPreviousStep?: () => void;
    setFormStep: Dispatch<SetStateAction<number>>;
    setBtnVariant?: Dispatch<SetStateAction<ButtonVariant>>;
    handlePersonType?: (selectedPerson: string) => void;
    hasAnotherHome?: boolean;
    isRepresented?: boolean;
    storedFields?: Record<string, any>;
}

export type FormValidationSummary = {
    validFields: Record<string, string>;
    invalidFields: Record<string, string>;
    isValid: boolean;
};

export interface StepProps {
    step: number;
    stepName: "seller" | "buyer" | "contractSubject" | "contractDetails" | "contractSubmit";
    component: ReactNode;
}
export interface ContractData {
  seller?: Record<string, any>;
  buyer?: Record<string, any>;
  contractSubject?: Record<string, any>;
  contractDetails?: Record<string, any>;
}
