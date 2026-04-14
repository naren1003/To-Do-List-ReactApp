import './TaskItems.css';

export function TaskItems({ message,dueDate }) {
  return (
    <>
      <td>{message}</td>
      <td>{status}</td>
      <td>{dueDate || "-"}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </>
  );
}