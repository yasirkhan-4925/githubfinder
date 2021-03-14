import React , {Component , Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import Profile from './components/Profile';
import axios from 'axios'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Loader from './components/Loader'


class App extends Component{

   
    
   state = {
      users:[],
      loading:false,
      alert:false,
      user:{}
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
          users:[],
     
       })
       
    }

    setAlert = () =>{
       this.setState({
          alert:true
       }) 

       setTimeout(() => {
          this.setState({alert:false})
       }, 5000);
    }  
  

   getSingleUser = async (login) =>{
      this.setState({loading:true})
      const res  = await axios.get(`https://api.github.com/users/${login}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);
      console.log(res.data);

      this.setState({user:res.data, loading:false})
    }
   render(){
     return(
        <Router>
        
      <div>
         <Navbar title="GitHub Finder" icon = "fab fa-github" />
         <Alert alert={this.state.alert}/>
         <Switch>

         <Route exact path='/' render = {props =>{
            return(
               <Fragment>
               <Search setAlert={this.setAlert} showData= {this.state.users.length > 0 ? true : false} clearUser = {this.clearUser} searchValue = {this.searchValue}/>
                    <div className="container">
                { this.state.loading ? <Loader/> : <Users users={this.state.users} loading= {this.state.loading}/>}
                    </div>
                         </Fragment>
                 
            ) }}
             />
         
         <Route path='/about' exact component={About}/>

         <Route exact path='/profile/:login' render = {props =>{
            return(
               <Fragment>
                      <Profile loading= {this.state.loading} getSingleUser = {this.getSingleUser} user={this.state.user}  {...props}/>
                         </Fragment>
                 
            ) }}
             />

        

        
         </Switch>
         
        
        
        
      </div>
      </Router>

     )
   }

}

export default App;
