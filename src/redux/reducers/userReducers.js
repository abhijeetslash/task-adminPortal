import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL
} from '../constants/userConstants'

export const userListReducer = (state = {users:[]}, action) => {
    switch(action.type){
        case USER_LIST_REQUEST: {
            break;
        }
        case USER_LIST_SUCCESS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case USER_LIST_FAIL: {
            break;
        }
        default: return state
    }
}