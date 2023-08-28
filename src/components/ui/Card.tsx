import { ReactNode } from "react";
import { ICardProps } from "../interfaces/UiInterfaces";




const Card = ({ children, className }: ICardProps) => {

    return (
        <div className="p-2">
            <div className={`border border-gray-200 shadow-sm rounded px-5 py-3 ${className}`} >
                {children}
            </div>
        </div>
    )
}

export default Card;