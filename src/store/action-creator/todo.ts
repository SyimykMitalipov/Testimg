import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoActionsType, TodoAction } from '../../types/todo';

const URL = 'https://jsonplaceholder.typicode.com/todos'
export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({
                type: TodoActionsType.FETCH_TODOS
            })
            const response = await axios.get(URL, {
                params: { _page: page, _limit: limit }
            })
            setTimeout(() => {
                dispatch({ type: TodoActionsType.FETCH_TODOS_SUCCESS, payload: response.data })

            }, 500);
        } catch (e) {
            dispatch({
                type: TodoActionsType.FETCH_TODOS_ERROR,
                payload: 'Todos was error'
            })
        }
    }
}

export function SetTodoPage(page: number): TodoAction {
    return { type: TodoActionsType.SET_TODO_PAGE, payload: page }
}