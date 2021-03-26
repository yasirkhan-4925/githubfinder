import React ,{useContext} from 'react';
import '../App.css'
import AlertContext from '../context/alert/alertContext'

const Alert = () => {
  const alertContext = useContext(AlertContext);
   
   const {alert} = alertContext
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