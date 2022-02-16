import React from 'react';
import TodoList from './components/TodoContainer';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
     <UsersList/>
     <hr/>
     <TodoList/>
    </div>
  );
}

export default App;
