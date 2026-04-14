import { TaskItems } from "./TaskItems";

export function TaskList({ todoList }) {
    return (
        <>
            {todoList.map((task) => (
                <tr key={task.id}>
                    <TaskItems
                        message={task.message}
                        dueDate={task.dueDate}
                        status={task.status}
                    />
                </tr>
            ))}
        </>
    );
}