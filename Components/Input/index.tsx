import React, { ReactElement, ReactNode } from "react";

interface IInput {
    name?: string,
    type: string,
    placeholder?: string,
    className?: string,
    affix?: ReactElement | ReactNode
    isSecondary?: boolean
    value: string | undefined;
    disabled?: boolean
    onChange: (e: any) => void
}

const Input: React.FC<IInput> = ({ onChange, name, type, placeholder, className, affix, disabled = false, isSecondary, value }) => {

    return (
        <div className={`input-area ${isSecondary ? "secondary" : ""} ${affix ? "has-icon" : ""}`}>
            {name &&
                <label htmlFor="name">
                    {name}
                </label>
            }
            <div className="field-holder">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={(e) => onChange(e)}
                />
                {affix && affix}
            </div>
        </div>
    );
}

export default Input;