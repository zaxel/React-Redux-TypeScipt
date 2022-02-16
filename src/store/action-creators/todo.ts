import { Dispatch } from "redux";
import { TodoActionTypes, TodosAction } from "../../types/todo"
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try{
            dispatch({type: TodoActionTypes.FETCH_TODOS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
                params: {_page: page, _limit: limit}
            });

            setTimeout(()=>{
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});

            }, 1500)
        }catch(e){
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Error on todos loading'});
        }
    }
}
export function setTodoPage(page: number): TodosAction{
    return {type: TodoActionTypes.SET_TODOS_PAGE, payload: page}
}