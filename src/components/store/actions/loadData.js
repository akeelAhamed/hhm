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
            dispatch(loadCategory(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(loadDataFailure(err))
        })
    }
}

export const loadCategory = (data) => {
    return dispatch => {
        dispatch(startLoadData())
        var proxy = 'https://cors-anywhere.herokuapp.com/'
        axios.get(proxy + 'http://www.hhmlife.org/api/category', {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'APP_KEY' : 'Test@123'
            }
        })
        .then(res => {
            console.log(res.data.prods)
            dispatch(loadDataSuccess(data, res.data.prods))
        })
        .catch(err => {
            console.log(err)
            dispatch(loadDataFailure(err))
        })
    }
}

export const loadDataSuccess = (data, categoryData) => {
    return {
        type: actionTypes.LOADING_SUCCESS,
        data: data,
        categoryData: categoryData
    }
}

export const loadDataFailure = (err) => {
    return {
        type: actionTypes.LOADING_FAILURE,
        error: err
    }
}