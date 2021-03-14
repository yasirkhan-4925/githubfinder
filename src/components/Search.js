import React , {Component} from 'react'
import '../App.css'

class Search extends Component{

    state ={
        text:''
    }


    
  onChange = (e) =>{
       this.setState({
           [e.target.name] : e.target.value
          
       })
  }
  
  onSubmit = (e)=>{
      if(this.state.text.trim() === "")
      {  
          e.preventDefault()
        this.props.setAlert()
      }
      else{
        e.preventDefault();
        this.props.searchValue(this.state.text)
        this.setState({
            text:''
        })
      }
     
  }
   
  clearData= () =>{
      this.props.clearUser();
  }

   render(){
    const  {showData} = this.props
       return(
           <div id="search"> 
                   <form onSubmit={this.onSubmit} action="">
                       <input onChange={this.onChange}  value={this.state.text} placeholder="Search here ..... " className="search-area" type="text" name="text"/>
                       <input  className="search-button" value="Search" type="submit"/>
                   </form>
                   {showData &&  <button onClick={this.clearData} className="clear-button">Clear</button> }
                  
           </div>
           
       )
   }


}

export default Search;