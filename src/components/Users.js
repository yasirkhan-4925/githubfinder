import React ,{useContext}  from 'react'
import '../App.css'
import Useritem from '../components/Useritem'
import Loader from '../components/Loader'
import GithubContext from '../context/github/githubContext'


const Users = () => {
    
    const githubContext = useContext(GithubContext)
    const { users, loading } = githubContext
      
    if (loading) {
        return (
            <Loader />
        )
    }
    else {
        return (
            <div id="Users">
                {users.map((user) => (
                    <Useritem key={user.id} user={user} />
                ))}
            </div>
           
        )
      
        
    


       
   
    


    }
}
export default Users;