import React , {Component,useState} from 'react'
import '../App.css'

 const Search  = ({setAlert,searchValue,clearUser,showData}) => {
    
     const [text,setText] = useState('')
    


    
   const onChange = (e) =>{
       setText(e.target.value)
  }
  
  const  onSubmit = (e)=>{
      if(text.trim() === "")
      {  
          e.preventDefault()
          setAlert()
      }
      else{
        e.preventDefault();
       searchValue(text)
        setText('')
      }
     
  }
   
  const clearData= () =>{
     clearUser();
  }

 
  
       return(
           <div id="search"> 
                   <form onSubmit={onSubmit} action="">
                       <input onChange={onChange}  value={text} placeholder="Search here ..... " className="search-area" type="text" name="text"/>
                       <input  className="search-button" value="Search" type="submit"/>
                   </form>
                   {showData &&  <button onClick={clearData} className="clear-button">Clear</button> }
                  
           </div>
           
       )
   


}

export default Search;