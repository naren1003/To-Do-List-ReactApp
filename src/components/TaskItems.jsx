import './TaskItems.css';

export function TaskItems({message}){
    return(
        <div className="item-container">
            <button>Done</button>
            <div className = "chat-message-text">
                {message}
            </div>
        </div>
    );
}