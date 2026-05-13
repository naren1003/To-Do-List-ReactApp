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

  function resetDraft() {
    setMsg(message);
    setStat(status);
    setDate(dueDate);
  }

  function handleEditClick() {
    resetDraft();
    setEditing(true);
  }

  function handleSaveClick() {
    if (!msg.trim()) return;

    const updatedTodos = todoList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          message: msg.trim(),
          status: stat,
          dueDate: date
        };
      }
      return task;
    });

    setTodoList(updatedTodos);
    setEditing(false);
  }

  function handleCancelClick() {
    resetDraft();
    setEditing(false);
  }

  function handleEditKeyDown(event) {
    if (event.key === 'Escape') {
      handleCancelClick();
    }
  }

  return (
    <>
      <td>
        {editing ? (
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={handleEditKeyDown}
            aria-label={`Edit task name for ${message}`}
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
            onKeyDown={handleEditKeyDown}
            aria-label={`Edit status for ${message}`}
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
            onKeyDown={handleEditKeyDown}
            aria-label={`Edit due date for ${message}`}
          />
        ) : (
          date || "-"
        )}
      </td>

     
      <td>
        {editing ? (
          <div className="action-group">
            <button
              onClick={handleSaveClick}
              disabled={!msg.trim()}
              aria-label={`Save ${message}`}
            >
              Save
            </button>
            <button
              className="secondary-btn"
              onClick={handleCancelClick}
              aria-label={`Cancel editing ${message}`}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleEditClick}
            aria-label={`Edit ${message}`}
          >
            Edit
          </button>
        )}
      </td>
    </>
  );
}
