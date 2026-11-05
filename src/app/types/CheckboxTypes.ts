import { Dispatch, SetStateAction } from "react";

export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: Dispatch<SetStateAction<boolean>>
}