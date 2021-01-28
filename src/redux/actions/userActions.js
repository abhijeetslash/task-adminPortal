import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL
} from '../constants/userConstants'
import { usersData } from '../../data/usersData'

export const listUsers = (filterText) => (dispatch) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        })
    

        if(filterText){
           const filteredUsers =  usersData.map(user => {
                return 
            })  

        }else{
            dispatch({
                type: USER_LIST_SUCCESS,
                payload: usersData
            })
        }

    } catch (err) {
      dispatch({
          type: USER_LIST_FAIL,
          payload: 'ERROR from listUsers Action...'
      })  
    }
}