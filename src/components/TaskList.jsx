import { useRef,useEffect } from "react";
import { TaskItems } from "./TaskItems";

export function TaskList({todoList}){ 
    const todoListRef = useRef(null);

    useEffect(()=>{
        const containerElem = todoListRef.current;
        if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight; 
        }
    },[todoList])
    return(
        <div 
        className="todo-list-container"
        ref ={todoListRef}>  
            {todoList.map((todoList) => {
                return(
                    <TaskItems 
                        message = {todoList.message}
                        key = {todoList.id}
                    />
                );
            })} 
        </div>
    );
}