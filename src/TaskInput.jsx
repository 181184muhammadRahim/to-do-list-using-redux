import React, { useState,useEffect } from "react";
import "./TaskInput.css"
import {TaskList} from "./TaskList";
function TaskInput(){
    const [name,setName]=useState("")
    const [listTask,setlistTask]=useState([])
    const [donelistTask,setdonelistTask]=useState([])
    const [check,setCheck]=useState(false)
    const [prev_value,setPrev_val]=useState("")
    const [counter,setCounter]=useState(0)
    const [deleteCheck,setdeleteCheck]=useState(false)
    useEffect(()=>{
        if(listTask.length!==0 || deleteCheck){
            localStorage.setItem('undone-task', JSON.stringify(listTask || []));
            setdeleteCheck(true)
        }

    },[listTask])
    useEffect(()=>{
        if(donelistTask.length!==0){
            localStorage.setItem('done-task', JSON.stringify(donelistTask || []));
        }

    },[donelistTask])

    useEffect(()=>{
        console.log("3");
        const temp1 = JSON.parse(localStorage.getItem('done-task')) || [];
        const temp2 = JSON.parse(localStorage.getItem('undone-task')) ||[];
        if(temp1){
            setdonelistTask(temp1)
        }
        if(temp2){
            setlistTask(temp2)
        }
    },[])
    const deleteTask=(val)=>{
        setdeleteCheck(true)
        setlistTask(listTask.filter(item=> item.id !== val.id))
    }
    const updateTask=(prev_value)=>{
        document.getElementById("taskdesc").value=prev_value.name
        setPrev_val(prev_value)
        setCheck(true)
    }
    const doneTask=(val)=>{
        console.log("here")
        deleteTask(val)
        setdonelistTask(donelistTask.concat(val))

    }
    const HandleSubmit=(event)=>{
        event.preventDefault();
        if(check){
            let obj=listTask.find(o=>o.name===name)
            if(obj==null){
                if(name!==""){
                    var val={
                        "name":name,
                        "id":prev_value.id
                    }
                    var temp=listTask
                    temp[temp.indexOf(prev_value)]=val
                    setlistTask([...temp])

                    setCheck(false)

                }else{
                    alert("Field is empty")
                }
            }else{
                alert("This task already exist")
            }
        }
        else{
            let obj=listTask.find(o=>o.name===name)
            if(obj==null){
                if(name!==""){
                    var val1={
                        "name":name,
                        "id":counter
                    }
                    setCounter(counter=>counter+1)
                    setlistTask(listTask.concat(val1));
                }else{
                    alert("Field is empty")
                }
            }else{
                alert("This task already exist")
            }
        }
        document.getElementById("taskdesc").value=""
    }
    let props={
        remainingtasklist:listTask,
        donetasklist:donelistTask,
        del_task:deleteTask,
        upd_task:updateTask,
        done_task:doneTask
    }
    return(
        <div className="App-Container">
             <form className="Task-Input" onSubmit={HandleSubmit}>
                 <label>Task Description:
                    <input type="text" id="taskdesc" name="Task Description" onChange={(e)=>setName(e.target.value)}/>
                    </label>
                    <input type="Submit" id="submit" />

        </form>
        <TaskList {...props}/>
        </div>
    )
}
export default TaskInput