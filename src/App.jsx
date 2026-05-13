import { useState, useEffect } from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        return Array.isArray(parsedTodos) ? parsedTodos : [];
      } catch {
        return [];
      }
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      'todos',
      JSON.stringify(todoList)
    );
  }, [todoList]);

  return (
    <>
      <TaskInput
        setTodoList={setTodoList}
      />
      <main className="app-shell">
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Saved task list</caption>
            <thead>
              <tr>
                <th><b>Aa</b> Task name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              <TaskList
                todoList={todoList}
                setTodoList={setTodoList}
              />
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
