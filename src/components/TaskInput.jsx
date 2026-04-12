import { useState } from 'react';

export function TaskInput( { todoList , setTodoList }){
    const [inputText,setInputText] = useState(''); 

    function saveInputText(event){
        setInputText(event.target.value);
    }

    function addData(){
        if(inputText === '') return;
        setInputText('');
        const newTodoList = [
            ...todoList,{
                message: inputText,
                id:crypto.randomUUID()
            }
        ];
        setTodoList([
            ...newTodoList
        ]);
    }

    function keyPressed(event){
        if(event.key === 'Enter'){
            addData();
        }else if(event.key === 'Escape'){
            setInputText('');
        }
    }

    return(
        <>
            <div>
                <input 
                    placeholder="Aa Task name"
                    type = "text"
                    onChange = {saveInputText}
                    value = {inputText}
                    className="name-input"
                    onKeyDown = {keyPressed}
                />
                <button
                    onClick = {addData}
                    className="Add-btn"
                >Add</button>
            </div>
        </>
    );
}