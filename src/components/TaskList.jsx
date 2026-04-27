import { TaskItems } from "./TaskItems";

export function TaskList({ todoList, setTodoList }) {
    function handleDelete(id) {
        setTodoList(prev =>
            prev.filter(task => task.id !== id)
        );
    }
    return (
        <>
            {todoList.map((task) => (
                <tr key={task.id}>
                    <TaskItems
                        message={task.message}
                        dueDate={task.dueDate}
                        status={task.status}
                    />
                    <button onClick={() => handleDelete(task.id)}>
                        Delete
                    </button>
                </tr>
            ))}
        </>
    );
} 
