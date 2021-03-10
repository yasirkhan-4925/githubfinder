import React from 'react'
import '../App.css';


const Navbar = ({icon,title}) =>  {
       
   
   
        return (
            <div id = "navbarContainer">
                  <nav className="navbar">

                      <div className="navbarLogo">
                      <i  className={icon}></i> <h1>{title}</h1>
                      </div>
                      
                 
                      
                  </nav>
            </div>
        )
   
}

export default Navbar
