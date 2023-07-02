import React, { ReactElement, ReactNode } from "react";

interface IButton{
    text: ReactElement | ReactNode | string,
    className?: string;
}

const Button: React.FC<IButton> = ({text, className}) => {
    return (
        <div  className={`button ${className}`}>
            <button>{text}</button>
        </div>
    );
}
 
export default Button;