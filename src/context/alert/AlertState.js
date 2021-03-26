import React, { useReducer } from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';


import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = props => {
     
    const initialState = {
        alert:false
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const showAlert = () => {
        dispatch({ type: SET_ALERT });

        setTimeout(() => {
            dispatch({type:REMOVE_ALERT})
        }, 3000);
    }


    return (
        <AlertContext.Provider
            value={{
                showAlert,
                alert: state.alert
        }}>
            {props.children}
        </AlertContext.Provider>
    )


}

export default AlertState;
