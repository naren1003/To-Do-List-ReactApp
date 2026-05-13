import { useState,useEffect } from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import './App.css'

function App() {
  const [todoList, setTodoList] = useState(()=>{

    const savedTodos = localStorage.getItem('todos');

    if(savedTodos){
      return JSON.parse(savedTodos);
    }

    return [];

  });

  useEffect(()=>{
    localStorage.setItem(
      'todos',
      JSON.stringify(todoList)
    );
  },[todoList]);
  return (
    <>
      <TaskInput
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <table>
        <thead>
          <tr>
            <th><b>Aa</b> Task name</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <TaskList
            todoList={todoList}
            setTodoList={setTodoList}
          />
        </tbody>
      </table>
    </>
  );
}

export default App
