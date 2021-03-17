import React ,{} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Loader from '../components/Loader'
import Repos from '../components/Repos'

class Profile extends React.Component {

  componentDidMount(){
      this.props.getSingleUser(this.props.match.params.login);
      this.props.repos(this.props.match.params.login);
  }

    render(){
        const { bio,blog,followers, following , email, html_url,name,login , avatar_url} = this.props.user; 
        if(this.props.loading){
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
                        <Repos reposData={this.props.reposData} />
                    </div>
                 
                  </div>
              
                
                
              
              
            )
        }
       
    }
}

export default Profile;