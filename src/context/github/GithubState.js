import React, { useReducer } from 'react'
import axios from 'axios';
import githubContext from './githubContext';
import GithubReducer from './githubreducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

let githubClientId;
let githubClientSecret;


if (process.env.NODE_ENV !== 'production') {

    githubClientId= process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRETS;
    
}
else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret =  process.env.GITHUB_CLIENT_SECRETS;
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading:false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // search users

    const searchValue = async (searchValue) =>{
        setLoading()
        const res  = await axios.get(`https://api.github.com/search/users?q=${searchValue}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);
  
        dispatch({ type: SEARCH_USERS, payload: res.data.items });
          
  
      }

    //get user


    const getSingleUser = async (login) =>{
        setLoading();
       const res  = await axios.get(`https://api.github.com/users/${login}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);
    
        dispatch({type:GET_USER , payload:res.data});
        
    }
    

    // get repos


    const getRepos = async (userName) => {
        
       const res  = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`);
    
        dispatch({ type: GET_REPOS, payload:res.data })
        
        
       
    } 


    //clear users

    const clearUser = () =>{
        
        dispatch({ type: CLEAR_USERS, payload: [] })
       
       
    }

    // set loading 

    const setLoading = () => dispatch({type: SET_LOADING})

    return (<githubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchValue,
            clearUser,
            getSingleUser,
            getRepos
             
        }}
    >
       {props.children}
    </githubContext.Provider>
    )
}


export default GithubState;