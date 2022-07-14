import {createStore} from "redux"
const TaskReducer=(state=[],action)=>{
    switch (action.type) {
      case "ADD_TODO":
        return [...state,{
          id:action.id,
          content:action.text,
          completed:false
        }]
      case "DONE_TASK":
        return state.map((element)=>{
          if(element.id===action.id){
            return {
              id:element.id,
              content:element.content,
              completed:!element.completed
            }
          }else{
            return element
          }
        })
        case "DELETE_TASK":
          return state.filter((element)=>element.id!==action.id)
        case "EDIT_TASK":
          return state.map((element)=>{
            if(element.id===action.id){
              return{
                id:element.id,
                content:action.text,
                completed:element.completed
              }
            }else{
              return element
            }
          })
      default:
        return state
    }
  }
  const Appstore=createStore(TaskReducer)
  export default Appstore;