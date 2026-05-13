import { useState } from 'react';
import './TaskItems.css';

export function TaskItems({
  id,
  message,
  dueDate,
  status,
  todoList,
  setTodoList
}) {

  const [msg, setMsg] = useState(message);
  const [stat, setStat] = useState(status);
  const [date, setDate] = useState(dueDate);

  const [editing, setEditing] = useState(false);

  function handleEditClick() {

    if (editing) {

      const updatedTodos = todoList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            message: msg,
            status: stat,
            dueDate: date
          };
        }
        return task;
      });

      setTodoList(updatedTodos);
    }

    setEditing(prev => !prev);
  }

  return (
    <>
      <td>
        {editing ? (
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setMsg(message);
              }
            }}
          />
        ) : (
          msg
        )}
      </td>

      <td className={stat}>
        {editing ? (
          <select
            value={stat}
            onChange={(e) => setStat(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        ) : (
          stat
        )}
      </td>

      <td>
        {editing ? (
          <input
            type="date"
            value={date || ""}
            onChange={(e) => setDate(e.target.value)}
          />
        ) : (
          date || "-"
        )}
      </td>

     
      <td>
        <button onClick={handleEditClick}>
          {editing ? "Save" : "Edit"}
        </button>
      </td>
    </>
  );
}