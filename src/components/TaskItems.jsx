import { useState } from 'react';
import './TaskItems.css';

export function TaskItems({ message, dueDate, status }) {
  const [msg, setMsg] = useState(message);
  const [editing, setEditing] = useState(false);
  const [stat, setStat] = useState(status);
  const [date, setDate] = useState(dueDate);

  function handleEditToggle() {
    setEditing(prev => !prev);
  }
  return (
    <>
      <td>
        {editing ? (
          <input
            value={msg}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setMsg('');
              }
            }}
            onChange={(e) => setMsg(e.target.value)}
          />) : msg}
      </td>
      <td className={stat}>
        {editing ? (
          <select value={stat} onChange={(e) => setStat(e.target.value)}>
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
        <button onClick={handleEditToggle}>
          {editing ? "Save" : "Edit"}
        </button>
      </td>
    </>
  );
}