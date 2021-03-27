import React , {useState , Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import Profile from './components/Profile';
import NotFound from './components/NotFound'

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Loader from './components/Loader';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'


const App = () =>{
   
  
   const [loading, setLoading] = useState(false);
   const [alert, setAlert] = useState(false);
  
   
    
  
   
   //  async componentDidMount(){
    
   //     this.setState({loading:true})
   //     const res  = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);
       
   //     this.setState({users:res.data, loading:false})
   //  }  

    

    

    

   

   
  
   return (
      <GithubState>
         <AlertState>
         <Router>
            
        
      <div>
         <Navbar title="GitHub Finder" icon = "fab fa-github" />
         <Alert />
         <Switch>

         <Route exact path='/' render = {props =>{
            return(
               <Fragment>
               <Search    />
                    <div className="container">
                { loading ? <Loader/> : <Users/>}
                    </div>
                         </Fragment>
                 
            ) }}
             />
         
         <Route path='/about' exact component={About}/>

                     <Route exact path='/profile/:login' component={Profile} />
                      <Route  component={NotFound} />
           

        

        
         </Switch>
         
        
        
        
            </div>
          
            </Router>
            </AlertState>
         </GithubState>
    
       


     )
   
   

}

export default App;
