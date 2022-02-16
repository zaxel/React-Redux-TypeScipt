import React, { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Pagination from './Pagination';
import TodoList from './TodoList';

const TodoContainer: FC = () => {
    return (
        <div>
            <TodoList/>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Pagination/>
            </div>
            
        </div>
    );
};

export default TodoContainer;