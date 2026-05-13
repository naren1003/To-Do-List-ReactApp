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
                        id={task.id}
                        message={task.message}
                        dueDate={task.dueDate}
                        status={task.status}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                    <td>
                        <button onClick={() => handleDelete(task.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
} 
