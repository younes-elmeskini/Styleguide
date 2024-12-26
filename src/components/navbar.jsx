import React, { useState } from "react";
import Logo from "./logo";
import Button from "./button";
import Search from "./search";
// import darklogo from "public/images/darklogo";
import lightlogo from '../../public/images/lightlogo.png'
import darklogo from '../../public/images/darklogo.png'

export default function Navbar() {
    


  return (
    <div className="flex justify-between items-center">
      <Logo logo={lightlogo}/>
      <select id="browse-select">
        <option value="1">Browes</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </select>
      <Search placehold={"Search for course"}/>
      <div className="flex gap-4 justify-center items-center">
        <p>Become Instructor</p>
        <button > 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99609 3C1.99609 3.55 2.44609 4 2.99609 4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H18.9961C19.5461 17 19.9961 16.55 19.9961 16C19.9961 15.45 19.5461 15 18.9961 15H7.99609L9.09609 13H16.5461C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.53609 2.57C5.37609 2.22 5.01609 2 4.63609 2H2.99609C2.44609 2 1.99609 2.45 1.99609 3ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM16.0061 20C16.0061 18.9 16.8961 18 17.9961 18C19.0961 18 19.9961 18.9 19.9961 20C19.9961 21.1 19.0961 22 17.9961 22C16.8961 22 16.0061 21.1 16.0061 20Z" fill="#1B1B1B"/>
            </svg>                    
        </button>
        <Button type="secondary" disabled={false} >login</Button>
        <Button type="primary" disabled={false}>Sign Up</Button>
      </div>
    </div>
  );
}