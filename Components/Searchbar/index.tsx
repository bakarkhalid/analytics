import React, { ReactElement, ReactNode } from "react";
import {SearchIcon } from "@/icons";
import Input from "../Input";

interface ISearchbar{
    text: ReactElement | ReactNode | string,
    className?: string;
    placeholder: string;
    searchimg: string;
    image: string;
    type?: string;
}

const Searchbar: React.FC<ISearchbar> = ({text, placeholder, type, image, className}) => {
    return (
        <div  className={`bar-holder ${className}`}>
            <p>{text}</p>
            <div className="field-holder">
                <Input 
                    placeholder="Type in a keyword to begin search"
                    type="text"
                />
                <button><SearchIcon/></button>
            </div>
        </div>
    );
}
 
export default Searchbar