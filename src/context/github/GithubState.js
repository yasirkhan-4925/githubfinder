import React, { useReducer } from 'react'
import axios from 'axios';
import githubContext from './githubContext';
import GithubReducer from './githubreducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS
} from '../types'


const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading:false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // search users

    //get user

    // get repos


    //clear users

    // set loading 

    return (<githubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
             loading:state.loading
        }}
    >
       {props.children}
    </githubContext.Provider>
    )
}


export default GithubState;