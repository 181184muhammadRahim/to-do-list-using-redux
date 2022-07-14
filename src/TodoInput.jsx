import React from "react";
import { connect } from "react-redux";

let ID=0;
const mapDispatchToTodoInputProps=(dispatch)=>{
    return{
        onTaskClick:(value)=>{
            dispatch({
                type:"ADD_TODO",
                id:ID++,
                text:value
            })
        }

    }

}


let InputDisplay=({onTaskClick})=>{
    let textinput;
    return(
        <div>
            <h1>To Do List App</h1>
            <input ref={node=>{
                textinput=node;
            }}/>
            <button onClick={()=>{
                onTaskClick(textinput.value)
                textinput.value=""
            }}>Add Todo</button>
        </div>
    )
}


let TodoInput=connect(
    null,
    mapDispatchToTodoInputProps
)(InputDisplay)

export default TodoInput;