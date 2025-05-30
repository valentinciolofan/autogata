"use client"

import Link from "next/link";
import { useState } from "react";

export type ButtonVariant = "primary" | "success" | "danger" | "processing";

interface ButtonProps {
    type?: "button" | "submit" | "reset",
    label: string,
    variant?: ButtonVariant;
    className?: string,
    processing?: boolean,
    href?: string
    disabled?: boolean;
}


const multipleClasses = {
    primary: "btn-primary",
    success: "btn-success",
    danger: "btn-danger",
    processing: "btn-processing",
    // processing: "opacity-70 bg-processing flex"
};

export default function Button({ type = "button", label, variant = "primary", disabled = false, className, processing, href }: ButtonProps) {
    const [btnVariant, setBtnVariant] = useState<ButtonVariant>(variant);
    
    const variantClass = multipleClasses[variant];

    const handleBtnVariant = () => {
        setBtnVariant(variant);
    }


    const processingSvgs = (
        <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke=""
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
        </svg>
    );

    if (href) {
        return <Link className={`btn-primary ${className}`} href={href}>
            {label}
        </Link>
    }

    return (
        <button
            type={type}
            className={`${variantClass} ${className}`}
            disabled={disabled || variant === "processing"}
        >
            {variant === "processing" && processingSvgs}

            {label}
        </button>


    );
};