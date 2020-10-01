import {ADD_LIST, FILTERED_LIST, FILTERED_LIST_BY_LAUNCH, FILTERED_LIST_BY_LAING} from './constants'
import axios from 'axios';

export const addItemList = () =>{
    return async (dispatch)=>{
     await axios.get('https://api.spacexdata.com/v3/launches?limit=100')
        .then(res => {
            console.log('res in action', res);
            dispatch({
                type : ADD_LIST,
                payload : res
            })
        })
        .catch(err=>{
            console.log('getting err', err);
        })
    }
}

export const filteredItemList = (data) =>{
    return async (dispatch)=>{
     await axios.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year='+(data))
        .then(res => {
            dispatch({
                type : FILTERED_LIST,
                payload : res
            })
        })
        .catch(err=>{
            console.log('getting err', err);
        })
    }
}

export const filteredItemListByLaunch = (data) =>{
    return async (dispatch)=>{
     await axios.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+(data))
        .then(res => {
            dispatch({
                type : FILTERED_LIST_BY_LAUNCH,
                payload : res
            })
        })
        .catch(err=>{
            console.log('getting err', err);
        })
    }
}

export const filteredListByLaing = (data) =>{
    return async (dispatch)=>{
     await axios.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success='+(data))
        .then(res => {
            dispatch({
                type : FILTERED_LIST_BY_LAING,
                payload : res
            })
        })
        .catch(err=>{
            console.log('getting err', err);
        })
    }
}