import { useState } from 'react';
import './TaskInput.css';

export function TaskInput( { todoList , setTodoList }){ 
    const [inputText, setInputText] = useState('');
    const [dueDate, setDueDate] = useState(''); 

    function saveInputText(event){
        setInputText(event.target.value);
    }

    function keyPressed(event){
        if(event.key === 'Enter'){
            addData();
        }else if(event.key === 'Escape'){
            setInputText('');
        }
    }

    function addData(){
    if (!inputText.trim()) return;

    const newTodo = {
        message: inputText,
        dueDate: dueDate,
        status: "Pending",
        id: crypto.randomUUID()
    };

    setTodoList([...todoList, newTodo]);

    setInputText('');
    setDueDate('');
}

    return(
        <>
            <div>
                <div className='Heading-container'>
                    <h1 className='Heading'>Task Tracker</h1>
                    <h5 className='Heading'>Stay organized with tasks, your way.</h5>
                </div>
                
                <input 
                    placeholder="Aa Task name"
                    type = "text"
                    onChange = {saveInputText}
                    value = {inputText}
                    className="name-input"
                    onKeyDown = {keyPressed}
                />
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <button
                    onClick = {addData}
                    className="Add-btn"
                >Add</button>
            </div>
        </>
    );
}