import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

const  Useritem = ({user:{login,avatar_url, html_url}})=>  {  


   

 
       
   
       
       return(
           <div id="userItemCard">
                  <img src={avatar_url} className="userItemCard-img" alt=""/>
                  <h3>{login}</h3>
                  <Link to ={`/profile/${login}`} >See More</Link>
                
                  
           </div>
       )
   

}

export default Useritem