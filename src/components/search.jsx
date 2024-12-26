import React from "react";
import "../styles/input.css"
import lightsearch from '../../public/images/lightsearch.png'
import darklogo from '../../public/images/darklogo.png'


export default function Search({placehold}){
    return (
        <div className="w-[400px] relative ">
            <input type="text" className="search search-light" placehold={placehold}/>
            <img src={lightsearch} className="absolute top-[8px] right-[12px] w-[15px]" alt="search"/>
        </div>
    )
}