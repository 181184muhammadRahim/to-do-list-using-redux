import React from "react";
import { useSelector,useDispatch } from "react-redux";
import './DisplayTask.css'


let DisplayTask=()=>{
    const value= useSelector((state)=>state)
    const dispatch=useDispatch()
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
                            <button onClick={()=>{dispatch({type:"DONE_TASK",id:element.id})}}>UnDone Task</button>
                            <button onClick={()=>{dispatch({type:"DELETE_TASK",id:element.id})}}>Delete Task</button>
                            </div>
                        )
                    }else{
                        return(
                        <div className="Task-Container-undone" key={i}>
                        <li>{element.content}</li>
                        <button onClick={()=>{dispatch({type:"DONE_TASK",id:element.id})}}>Done Task</button>
                        <button onClick={()=>{dispatch({type:"DELETE_TASK",id:element.id})}}>Delete Task</button>
                        <input ref={node=>{
                                textInput.push(node);
                            }}/>
                        <button onClick={()=>{dispatch({type:"EDIT_TASK",id:element.id,text:textInput[i].value})}}>Edit Task</button>

                        </div>
                        )
                    }
                }
                )
            }

        </ol>
    )
}

export default DisplayTask;