import { TaskItems } from "./TaskItems";
import './TaskList.css';

export function TaskList({ todoList, setTodoList }) {
    function handleDelete(id) {
        setTodoList(prev =>
            prev.filter(task => task.id !== id)
        );
    }

    if (todoList.length === 0) {
        return (
            <tr>
                <td className="empty-state" colSpan="5">
                    No tasks yet. Add one above to get started.
                </td>
            </tr>
        );
    }

    return (
        <>
            {todoList.map((task) => (
                <tr key={task.id}>
                    <TaskItems
                        id={task.id}
                        message={task.message}
                        dueDate={task.dueDate}
                        status={task.status}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                    <td>
                        <button
                            className="danger-btn"
                            onClick={() => handleDelete(task.id)}
                            aria-label={`Delete ${task.message}`}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
} 
