import React ,{useEffect, useContext} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Loader from '../components/Loader'
import Repos from '../components/Repos'
import GithubContext from '../context/github/githubContext'

const Profile = ({  match}) => {
    
    const githubContext = useContext(GithubContext);
    const {getSingleUser , user , loading ,getRepos ,repos} = githubContext
    
    useEffect(() => {
        getSingleUser(match.params.login);
        getRepos(match.params.login);
    },[])
   
  

    
        const { bio,blog,followers, following , email, html_url,name,login , avatar_url} = user; 
        if(loading){
           return  <Loader />

        }
        else{
         
       
            return(
    
               <div className="profile">
                   <div className='container searchButton'>
                   <Link to='/' className="backToSearch"> Back To Search</Link>
                   </div>
                    
              <div className="container profilebox">
                       <div className="profilepic ">
                            <img src={avatar_url} alt=""/>
                            <h3>{login}</h3>
                            <a target="_blank" href={html_url}> visit github</a>
                            
                       </div>
                       <div className="biodata ">
                            <div className="biodata_inside">
                                  <h3>Bio:</h3>
                                  {!bio ? "No bio" : bio}
                                  <h3>Email:</h3>
                                  {!email ? "No email" : email}
                                  <h3>Blog:</h3>
                                  {!blog ? "No Blog" : blog}
                            </div>
                       </div>
    
                     
                  </div> 
                  <div className="container fol">
                           <div className="followers">
                              <h3>Follower : {followers}</h3>
                           </div>
                           <div className="following">
                           <h3>Following : {following}</h3>
    
    </div>
    
                       </div>

                    <div className="container">
                        <Repos reposData={repos} />
                    </div>
                 
                  </div>
              
                
                
              
              
            )
        }
       
    
}

export default Profile;