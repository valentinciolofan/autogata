import { useState } from "react";
import { CheckboxProps } from "../types";

const CustomCheckbox = ({
    label,
    checked,
    onChange
}: CheckboxProps) => {

    return (
        <label className="flex gap-2 items-center">
            {label}

            <input
                type="checkbox"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
                className="w-4 h-4 cursor-pointer   "
            />
        </label>
    );
};

export default CustomCheckbox;