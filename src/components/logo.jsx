import React,{useEffect,useState} from "react";
import "../styles/images.css";
export default function Logo({logo}){
    const [LogoSize, setLogoSize] = useState("logo-lg");
    
    const updateLogoSize = () => {
        if (window.innerWidth >= 1024) {
            setLogoSize("logo-lg");
        } else if (window.innerWidth >= 768) {
            setLogoSize("logo-md");
        } else {
            setLogoSize("logo-sm");
        }
    };

    useEffect(() => {
        updateLogoSize(); // Initial size
        window.addEventListener("resize", updateLogoSize);

        return () => {
            window.removeEventListener("resize", updateLogoSize); 
        };
    }, []);

    let className = LogoSize;
    return(
        <img src={logo} alt="logo" className={className}/>
    )

}