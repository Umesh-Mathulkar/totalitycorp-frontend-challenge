    import React from "react";
    import { FaSpinner } from 'react-icons/fa';
    import { IButton } from "../interfaces/UiInterfaces";
import { amberBG, emeraldBG, indigoBG, redBG } from "../constants/color";

    const Button = ({ children, icon, loading = false, className, handleSubmit, color = "indigo" }: IButton & { color?: string }) => {

        
        let buttonColor;
        switch (color) {
            case "indigo":
                buttonColor = indigoBG;
                break;
            case "red":
                buttonColor = redBG;
                break;
            case "amber":
                buttonColor = amberBG;
                break;
            case "emerald":
                buttonColor = emeraldBG;
                break;
            default:
                buttonColor = `bg-${color}-500 hover:bg-${color}-700`;
        }
        
        return (
            <div className={className}>
                <button onClick={handleSubmit} className={`${buttonColor} text-white font-bold py-2 px-4 rounded`}>
                    {loading ? (
                        <span className="flex items-center">
                            <span className="mr-2">
                                <FaSpinner className="animate-spin" />
                            </span>
                            Loading...
                        </span>
                    ) : (
                        <>
                            {icon && <span className="mr-2">{icon}</span>}
                            {children}
                        </>
                    )}
                </button>
            </div>
        );
    };

    export default Button;
