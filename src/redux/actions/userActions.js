import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL
} from '../constants/userConstants'
import { usersData } from '../../data/usersData'

export const listUsers = (filterText) => (dispatch) => {
    try {
        console.log(`I reached the REDUCER...`)
        if(filterText){
           const filteredUsers =  usersData.filter(user => {
                return user.email.includes(`@${filterText}.com`)
            })
            
            console.log(filteredUsers,'check filtered users')
            dispatch({
                type: USER_LIST_SUCCESS,
                payload: filteredUsers
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