import React, { FC } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Pagination: FC = () => {
    const {page} = useTypedSelector(state=>state.todo);
    const {setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5]
    return (<>
    {pages.map(p=>
            <div onClick={()=>setTodoPage(p)} style={{border:p === page ? '2px solid green' : '1px solid gray', padding: '10px', cursor: 'pointer'}} key={p}>{p}</div>
            )}
    </>
        
    );
};

export default Pagination;