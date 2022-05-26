import React from "react";

const Todo = ({text,key}) => {
     //events
     const deleteHandler=(key)=>{
        
    }
    
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} value={key} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
export default Todo;