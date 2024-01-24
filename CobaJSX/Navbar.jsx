import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav>
        <div className="data">
        <h1>
        KITCHEN KICIK
        </h1>
        </div> 
        <ul>
            <div className="data1">
            <li>
                 <Link to ="/Home">Home</Link>
            </li>
            <li>
                 <Link to ="/about">About Me</Link>
            </li>
            <li>
                  <Link to ="/contact">Contact</Link>
            </li>
            </div>
        </ul>
        
    </nav>
    );
};

export default Navbar