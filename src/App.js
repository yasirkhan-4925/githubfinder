import React , {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Users from './components/Users';
import Search from './components/Search';
import axios from 'axios'


class App extends Component{

   
    
   state = {
      users:[],
      loading:false
   }
   
   //  async componentDidMount(){
    
   //     this.setState({loading:true})
   //     const res  = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);
       
   //     this.setState({users:res.data, loading:false})
   //  }  

    searchValue = async (searchValue) =>{
      this.setState({loading:true})
      const res  = await axios.get(`https://api.github.com/search/users?q=${searchValue}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);

      this.setState({users:res.data.items, loading:false})

    }

    clearUser = () =>{
       this.setState({
          loading:false,
          users:[]
       })
       
    }
  

   render(){
     return(
        
      <div>
         <Navbar title="GitHub Finder" icon = "fab fa-github" />
         <Search showData= {this.state.users.length > 0 ? true : false} clearUser = {this.clearUser} searchValue = {this.searchValue}/>

         <div className="container">
         <Users users={this.state.users} loading= {this.state.loading}/>
         </div>
        
        
        
      </div>

     )
   }

}

export default App;
