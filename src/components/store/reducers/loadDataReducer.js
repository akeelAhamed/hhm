import * as actionTypes from '../actions/actionTypes'
// import { globalData } from '../../globalData'

const initialState = {
    loading: false,
    data: null,
    // data: {...globalData},
    error: false,
    categoryData: null
}

const loadDataReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.START_LOADING):
            return {
                ...state,
                loading: true,
                error: false
            }
        case(actionTypes.LOADING_SUCCESS):
            return {
                loading: false,
                data: action.data,
                error: false,
                categoryData: action.categoryData
            }
        case(actionTypes.LOADING_FAILURE):
            return {
                ...state,
                loading: false,
                error: false
            }
        default:
            return state
    }
}

export default loadDataReducer