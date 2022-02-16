import React, {FC, useEffect} from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: FC = () => {
    const {page, limit, todos, error, loading} = useTypedSelector(state=>state.todo);
    const {fetchTodos} = useActions();

    useEffect(()=>{
        fetchTodos(page, limit);
    }, [page])
    if (error){
        return <h1 style={{color: 'red', fontWeight: '700'}}>{error}</h1>
    }
    if (loading){
        return <h1>Loading ...</h1>
    }
    return (
        <>
            {todos.map(todo=>{
                return <div key={todo.id}>{todo.id}-{todo.title}</div>
            })}
        </>
    );
};

export default TodoList;