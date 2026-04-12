import { useState } from 'react';
import { TaskInput } from './components/TaskInput';
import {TaskList} from './components/TaskList';
import './App.css'

function App() {
  const [todoList,setTodoList] = useState([]);
  return (
    <>
      <TaskInput
        todoList={todoList}
        setTodoList={setTodoList} 
      />
      <TaskList 
        todoList={todoList}
        setTodoList={setTodoList} 
      />
    
    </>
  );
}

export default App
