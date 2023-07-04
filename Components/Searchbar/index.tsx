import React, { ReactElement, ReactNode } from "react";
import { SearchIcon } from "@/icons";
import Input from "../Input";

interface ISearchbar {
    text: ReactElement | ReactNode | string,
    className?: string;
    placeholder: string;
    type: string;
    value?: string
    changeHandler?: any
}

const Searchbar: React.FC<ISearchbar> = ({ text, placeholder, type, className, value, changeHandler }) => {
    return (
        <div className={`bar-holder ${className}`}>
            <p>{text}</p>
            <div className="field-holder">
                <Input
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={(e: any) => changeHandler(e.target.value)}
                />
                <button><SearchIcon /></button>
            </div>
        </div>
    );
}

export default Searchbar