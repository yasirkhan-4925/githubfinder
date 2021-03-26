import React , {Component,useState,useContext} from 'react'
import '../App.css'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'





const Search = ({ setAlert, clearUser, showData }) => {

    const alertContext = useContext(AlertContext)
    const {showAlert} = alertContext 
    
     const githubContext = useContext(GithubContext)
     const [text,setText] = useState('')
    


    
   const onChange = (e) =>{
       setText(e.target.value)
  }
  
  const  onSubmit = (e)=>{
      if(text.trim() === "")
      {  
          e.preventDefault()
          alertContext.showAlert();
      }
      else{
        e.preventDefault();
       githubContext.searchValue(text)
        setText('')
      }
     
  }
   
 
  
 
  
       return(
           <div id="search"> 
                   <form onSubmit={onSubmit} action="">
                       <input onChange={onChange}  value={text} placeholder="Search here ..... " className="search-area" type="text" name="text"/>
                       <input  className="search-button" value="Search" type="submit"/>
                   </form>
                   {githubContext.users.length > 0 &&  <button onClick={()=> githubContext.clearUser()} className="clear-button">Clear</button> }
                  
           </div>
           
       )
   


}

export default Search;