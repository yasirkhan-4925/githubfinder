import React  from 'react'
import '../App.css'
import Useritem from '../components/Useritem'
import Loader from '../components/Loader'


const  Users = ({users , loading})=> {
      
    //   if(loading){
    //       return(
    //          <Loader/>
    //       )
    //   }
    //   else{
        return(
            <div id="Users"> 
                {users.map( (user)=> (
                    <Useritem key={user.id} user={user}/>
                ) )}
            </div>
           
        )
      
        
    


       
   
    


}

export default Users;