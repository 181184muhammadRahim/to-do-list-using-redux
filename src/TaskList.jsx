import React from "react";
import "./TaskList.css"
export function TaskList(props){
    return(
        <div>
        <ol className="Top-List">
            <h1>Task Done</h1>
            {props.donetasklist.map((element,i)=>
                <div className="DoneTask-Container" key={i}>
                    <li>{element.name}</li>
                </div>
            )}
        </ol>

        <ol className="Bottom-List">
            <h1>Remaining Task</h1>
            {props.remainingtasklist.map((element,i)=>
                <div className="Task-Container" key={i}>
                    <li>{element.name}</li>
                    <div className="Button-Container">
                        <button type="button" onClick={()=>props.del_task(element)}>Remove Task</button>
                        <button type="button" onClick={()=>props.done_task(element)}>Task Done</button>
                        <button type="button" onClick={()=>props.upd_task(element)}>Update</button>
                    </div>
                </div>      
            )}
        </ol>
        </div>
    )
}




