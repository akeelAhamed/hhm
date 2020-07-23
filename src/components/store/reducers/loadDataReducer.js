import * as actionTypes from '../actions/actionTypes'
import { globalData } from '../../globalData'

const initialState = {
    loading: false,
    data: null,
    // data: {...globalData},
    error: false
}

const loadDataReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.START_LOADING):
            return {
                loading: true,
                data: null,
                error: false
            }
        case(actionTypes.LOADING_SUCCESS):
            return {
                loading: false,
                data: action.data,
                error: false
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