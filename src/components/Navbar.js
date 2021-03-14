import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'


const Navbar = ({icon,title}) =>  {
       
   
   
        return (
            <div id = "navbarContainer">
                  <nav className="navbar">

                      <div className="navbarLogo">
                      <i  className={icon}></i> <h1>{title}</h1>
                      </div>

                      <div className="navlinks">
                        <ul>
                            <Link to="/"> <li>Home</li></Link> 
                            <Link to="/about">    <li>About</li></Link> 
                         
                        </ul>
                      </div>
                      
                 
                      
                  </nav>
            </div>
        )
   
}

export default Navbar
