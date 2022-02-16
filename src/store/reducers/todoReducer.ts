﻿import { TodoState, TodosAction, TodoActionTypes } from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1
}

export const todoReducer = (state: TodoState = initialState, action: TodosAction): TodoState => {
    switch(action.type){
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true};
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload};
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionTypes.SET_TODOS_PAGE:
            return {...state, page: action.payload}
        default:
            return state;
    }
}