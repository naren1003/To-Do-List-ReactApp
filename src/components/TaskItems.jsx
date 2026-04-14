import { useState } from 'react';
import './TaskItems.css';

export function TaskItems({ message,dueDate,status }) {
    const [msg, setMsg] = useState(message);
    const [editing,setEditing] = useState(false);

    function handleEditToggle(){
        setEditing(prev=>!prev);
    }
  return (
    <>
      <td>
        {editing?(
        <input
         value = {msg}
         onKeyDown={(e)=>{
            if(e.key === "Escape"){
                setMsg('');
            }
         }}
         onChange = {(e) =>setMsg(e.target.value)}
        />) : msg}
      </td>
      <td className={status}>
        {status}
      </td>
      <td>{dueDate || "-"}</td>
      <td>
        <button onClick={handleEditToggle}>
          {editing ? "Save" : "Edit"}
        </button>
        <button>Delete</button>
      </td>
    </>
  );
}