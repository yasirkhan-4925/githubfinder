import React from 'react';
import '../App.css'

const Alert = ({alert})=>{
       return(

         alert === true  && 
           <div className="container">
               <div className="alert container">
               <h3>Please Add Some Text To Search Field</h3>
               </div>
                
           </div>
       )
}

export default Alert;