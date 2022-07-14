import React from "react";
import { connect } from "react-redux";
import './DisplayTask.css'

const mapStateToTaskDisplayProps=(state)=>{
    return{
        value:state
    }
}
const mapDispatchToTaskDisplayProps=(dispatch)=>{
    return{ onDoneTaskClicked:(id)=>{
        dispatch({
            type:"DONE_TASK",
            id
        })
    },
    onDeleteTaskClicked:(id)=>{
        dispatch({
            type:"DELETE_TASK",
            id
        })
    },
    onEditTaskClicked:(id,text)=>{
        if(text===""){
            alert("Input field is empty")
        }else{
            dispatch({
                type:"EDIT_TASK",
                id,
                text
            })
        }
    }
    }
}

let DisplayTask=({value,onDoneTaskClicked,onDeleteTaskClicked,onEditTaskClicked})=>{
    let textInput=[]
    console.log(value)
    return(
        <ol className="List" >
            <h1>Task List</h1>
            {
                value.map((element,i)=>{
                    if(element.completed){
                        return(
                            <div className="Task-Container-done" key={i}>
                            <li>{element.content}</li>
                            <button onClick={()=>{onDoneTaskClicked(element.id)}}>UnDone Task</button>
                            <button onClick={()=>{onDeleteTaskClicked(element.id)}}>Delete Task</button>
                            </div>
                        )
                    }else{
                        return(
                        <div className="Task-Container-undone" key={i}>
                        <li>{element.content}</li>
                        <button onClick={()=>{onDoneTaskClicked(element.id)}}>Done Task</button>
                        <button onClick={()=>{onDeleteTaskClicked(element.id)}}>Delete Task</button>
                        <input ref={node=>{
                                textInput.push(node);
                            }}/>
                        <button onClick={()=>{
                                onEditTaskClicked(element.id,textInput[i].value) 
                                textInput[i].value=""}}>Edit Task</button>

                        </div>
                        )
                    }
                }
                )
            }

        </ol>
    )
}
const DisplayView=connect(
    mapStateToTaskDisplayProps,
    mapDispatchToTaskDisplayProps
)(DisplayTask)

export default DisplayView;