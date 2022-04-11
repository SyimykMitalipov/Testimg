import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionTypes, UserAction } from '../../types/user';

const URL = 'https://jsonplaceholder.typicode.com/users'
export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.FETCH_USERS
            })
            const response = await axios.get(URL)
            setTimeout(() => {
                dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data })

            }, 500);
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Something was error'
            })
        }
    }
}