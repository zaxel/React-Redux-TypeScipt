import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UsersList: FC = () => {
    const {users, error, loading} = useTypedSelector(state=>state.user);
    const {fetchUsers} = useActions();
    useEffect(()=>{
        fetchUsers();
    }, [])

    if (error){
        return <h1 style={{color: 'red', fontWeight: '700'}}>{error}</h1>
    }
    if (loading){
        return <h1>Loading ...</h1>
    }
    return (
        <div>
            {users.map(user=>{
                return <div key={user.id}>{user.name}</div>
            })}
        </div>
    );
};

export default UsersList;