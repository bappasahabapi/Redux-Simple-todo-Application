import { initialState } from "./initialState";
import {ADDED, TOGGLED, COLORSELECTED,DELETED, ALLCOMPLETED, CLEARCOMPLETED} from "./actionTypes";


function nextTodoId = (todos)=>{
        const maxId = todos.reduce((maxId, todo)=>Math.max(todo.Id, maxId), -1);
        return maxId+1;
}

const reducer =(state=initialState, action)=>{
   switch (action.type) {
    case ADDED:
        return[
            ...state,
            {
                id:nextTodoId(state)
            }
        ]
        case TOGGLED:
            return state.map(todo =>{
                if(todo.id !==action.payload){
                    return todo;
                }
                return{
                    ...todo,
                    completed:!completed
                }
            })
            
   
    default:
        break;
   }

}