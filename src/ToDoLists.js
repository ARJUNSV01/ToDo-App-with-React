import React from "react";


const ToDoLists =(props)=>{
    
    return (
    <>
    <div className="todo_style">
    <i className="fa-solid fa-circle-xmark" onClick={()=>{
        props.onSelect(props.id)
    }}></i>
    <li>{props.text}</li>
    </div>
    </>
    )
}
export default ToDoLists;