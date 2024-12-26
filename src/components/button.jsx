import React, { useEffect, useState } from "react";
import "../styles/Button.css";

export default function Button({ type, disabled,children}) {
    const [buttonSize, setButtonSize] = useState("btn-lg");

    const updateButtonSize = () => {
        if (window.innerWidth >= 1024) {
            setButtonSize("btn-lg");
        } else if (window.innerWidth >= 768) {
            setButtonSize("btn-md");
        } else {
            setButtonSize("btn-sm");
        }
    };

    useEffect(() => {
        updateButtonSize(); // Initial size
        window.addEventListener("resize", updateButtonSize);

        return () => {
            window.removeEventListener("resize", updateButtonSize); 
        };
    }, []);

    let className = buttonSize;

    if (type === "primary") {
        className += " btn-primary";
    } else if (type === "secondary") {
        className += " btn-secondary";
    }

    return (
        <div>
            <button className={className} disabled={disabled}>
                <p>{children}</p>
            </button>
        </div>
    );
}