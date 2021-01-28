import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL
} from '../constants/userConstants'

export const userListReducer = (state = {}, action) => {
    switch(action.type){
        case USER_LIST_REQUEST: {

        }
        case USER_LIST_SUCCESS: {
            return {
                users: usersData
            }
        }
        case USER_LIST_FAIL: {

        }
    }
}