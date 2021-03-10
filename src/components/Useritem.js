import React from 'react'
import '../App.css';

const  Useritem = ({user:{login,avatar_url, html_url}})=>  {  


   

 
       
   
       
       return(
           <div id="userItemCard">
                  <img src={avatar_url} className="userItemCard-img" alt=""/>
                  <h3>{login}</h3>
                  <a href={html_url}>See More</a>
                  
           </div>
       )
   

}

export default Useritem