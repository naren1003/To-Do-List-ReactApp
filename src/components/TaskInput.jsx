import { useState } from 'react';
import './TaskInput.css';

export function TaskInput({ setTodoList }) {
    const [inputText, setInputText] = useState('');
    const [dueDate, setDueDate] = useState(''); 
    const [status, setStatus] = useState('Pending');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function keyPressed(event) {
        if (event.key === 'Enter') {
            addData();
        } else if (event.key === 'Escape') {
            setInputText('');
            setDueDate('');
            setStatus('Pending');
        }
    }

    function addData() {
        if (!inputText.trim()) return;

        const newTodo = {
            message: inputText.trim(),
            dueDate: dueDate,
            status: status,
            id: crypto.randomUUID()
        };

        setTodoList(prev => [...prev, newTodo]);
        setStatus('Pending');
        setInputText('');
        setDueDate('');
    }

    return (
        <section className="task-input-section">
            <div className="Heading-container">
                <h1 className="Heading">Task Tracker</h1>
                <p className="Heading-subtitle">Stay organized with tasks, your way.</p>
            </div>

            <form
                className="task-form"
                onSubmit={(event) => {
                    event.preventDefault();
                    addData();
                }}
            >
                <label className="field-label" htmlFor="task-name">Task name</label>
                <input
                    id="task-name"
                    placeholder="Aa Task name"
                    type="text"
                    onChange={saveInputText}
                    value={inputText}
                    className="name-input"
                    onKeyDown={keyPressed}
                />

                <label className="field-label" htmlFor="task-status">Status</label>
                <select
                    id="task-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label className="field-label" htmlFor="task-due-date">Due date</label>
                <input
                    id="task-due-date"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />

                <button
                    type="submit"
                    className="Add-btn"
                >
                    Add
                </button>
            </form>
        </section>
    );
}
