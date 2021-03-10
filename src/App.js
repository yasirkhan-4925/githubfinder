import React , {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Users from './components/Users';
import axios from 'axios'


class App extends Component{
    
   state = {
      users:[],
      loading:false
   }
   
    async componentDidMount(){
       this.setState({loading:true})
       const res  = await axios.get("https://api.github.com/users");
       
       this.setState({users:res.data, loading:false})
    }  
  

   render(){
     return(
        
      <div>
         <Navbar title="GitHub Finder" icon = "fab fa-github" />

         <div className="container">
         <Users users={this.state.users} loading= {this.state.loading}/>
         </div>
        
        
        
      </div>

     )
   }

}

export default App;
