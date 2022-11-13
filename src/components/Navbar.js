import "./Navbar.css"
import d from './d.png';
import p from './p.png';

import logo from './logo.png';

import React, { useState }  from "react"


import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";


const Navbar = () => {


    return (
        <div className="header">
<ul className="f">
      <img className="logo"  src={logo}/>
           
            </ul>
          




     

<ul className="nav-menu">
                <p1>
                    My Assignment
                </p1>
                <p1>
                    Chat with Mentor
                </p1>
                <div className="j">
                <img className="img" src={p}/>
                <h3 >
                   ProfileName
                </h3>
 <img className="img1" src={d}/>
                </div>

        


               
            </ul>

            



   <Button>
     <p7>ProfileName ⌄</p7>
    
   </Button>
</div>


           
            
            

  
      
    );
  }
  
  export default Navbar