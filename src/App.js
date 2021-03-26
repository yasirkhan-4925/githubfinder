import React , {useState , Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import Profile from './components/Profile';
import axios from 'axios'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Loader from './components/Loader';
import GithubState from './context/github/GithubState'


const App = () =>{
   
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(false);
   const [alert, setAlert] = useState(false);
   const [user, setUser] = useState({});
   const [repos, setRepos] = useState([]);
   
    
  
   
   //  async componentDidMount(){
    
   //     this.setState({loading:true})
   //     const res  = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);
       
   //     this.setState({users:res.data, loading:false})
   //  }  

     const searchValue = async (searchValue) =>{
      setLoading(true)
      const res  = await axios.get(`https://api.github.com/search/users?q=${searchValue}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);

        setUsers(res.data.items);
        setLoading(false);

    }

     const clearUser = () =>{
        setLoading(false);
        setUsers([]);
       
    }

     const showAlert = () =>{
       
        setAlert(true);

       setTimeout(() => {
          setAlert(false);
       }, 5000);
    }  
  

    const getSingleUser = async (login) =>{
       setLoading(true);
      const res  = await axios.get(`https://api.github.com/users/${login}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);
   

       setUser(res.data);
       setLoading(false);
   }
   

    const getRepos = async (userName) => {
       setLoading(false);
      const res  = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);
   

       setRepos(res.data);
       setLoading(false);
   } 
  
   return (
      <GithubState>
         <Router>
            
        
      <div>
         <Navbar title="GitHub Finder" icon = "fab fa-github" />
         <Alert alert={alert}/>
         <Switch>

         <Route exact path='/' render = {props =>{
            return(
               <Fragment>
               <Search setAlert={showAlert} showData= {users.length > 0 ? true : false} clearUser = {clearUser} searchValue = {searchValue}/>
                    <div className="container">
                { loading ? <Loader/> : <Users users={users} loading= {loading}/>}
                    </div>
                         </Fragment>
                 
            ) }}
             />
         
         <Route path='/about' exact component={About}/>

         <Route exact path='/profile/:login' render = {props =>{
            return(
               <Fragment>
                      <Profile reposData={repos} repos={getRepos} loading= {loading} getSingleUser = {getSingleUser} user={user}  {...props}/>
                         </Fragment>
                 
            ) }}
             />

        

        
         </Switch>
         
        
        
        
            </div>
          
         </Router>
         </GithubState>
    
       


     )
   
   

}

export default App;
