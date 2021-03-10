import React ,{Component} from 'react'
import '../App.css'
import Useritem from '../components/Useritem'


const  Users = ({users})=> {
      
    
    

    


        return(
            <div id="Users"> 
                {users.map( (user)=> (
                    <Useritem key={user.id} user={user}/>
                ) )}
            </div>
           
        )
   
    


}

export default Users;