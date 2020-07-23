import * as actionTypes from './actionTypes'
import axios from 'axios'

export const startLoadData = () => {
    return {
        type: actionTypes.START_LOADING
    }
}

export const loadData = () => {
    return dispatch => {
        dispatch(startLoadData())
        var proxy = 'https://cors-anywhere.herokuapp.com/'
        axios.get(proxy + 'http://www.hhmlife.org/api/home', {
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'APP_KEY' : 'Test@123'
        }
        })
        .then(res => {
            dispatch(loadDataSuccess(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(loadDataFailure(err))
        })
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: actionTypes.LOADING_SUCCESS,
        data: data
    }
}

export const loadDataFailure = (err) => {
    return {
        type: actionTypes.LOADING_FAILURE,
        error: err
    }
}