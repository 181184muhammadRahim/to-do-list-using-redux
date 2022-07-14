import {createStore} from "redux"

const loadState=()=>{
  try{
    const JSONstate=localStorage.getItem('state');
    if(JSONstate===null){
      return undefined
    }
    return JSON.parse(JSONstate);

  }catch(error){
    console.log(error);;
  }
}

const saveState=(state)=>{
  try {
    const serialState=JSON.stringify(state);
    localStorage.setItem('state',serialState)
  } catch (error) {
    console.log(error);
  }
}
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
  const persistedState=loadState()
  const Appstore=createStore(TaskReducer,persistedState)
  Appstore.subscribe(()=>{
    saveState(Appstore.getState())


  })

  export default Appstore;