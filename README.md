# Simple Todo Application
        1.  Setting Up the project
        2.  Difining the actions for todo slice and filter slice
        3.  Difining Reducer for  todo slice
        4.  Difining Reducer for  filter slice
        5.  Making rootReducer
            Store setup
 
### 🟩Install 
      npm i redux react-redux
      npm i redux-devtools-extension

### The whole application has two parts
    1. Todo part
    2. Filter part

## Difining Actions 

### 🟩 Todos 

 ➡ 1. actionTypes.js
    ````js
        export const ADDED ="todos/added";
        export const TOGGLED ="todos/toggled";
        export const COLORSELECTED ="todos/colorselected";
        export const DELETED ="todos/deleted";
        export const ALLCOMPLETED ="todos/allcompleted";
        export const CLEARCOMPLETED ="todos/  clearcompleted";

    ````
       
 ➡ 2. actions.js(here we make action creator )

    ````js
      import {ADDED, TOGGLED, COLORSELECTED,DELETED, ALLCOMPLETED, CLEARCOMPLETED} from "./actionTypes";


    export const added =(todoText)=>{
        return{
            type:ADDED,
            payload:todoText
        }
    }
    export const toggled =(todoId)=>{
        return{
            type:TOGGLED,
            payload:todoId
        }
    }
    export const colorselected =(todoId, color)=>{
        return{
            type:COLORSELECTED,
            payload:{
                todoId,
                color
            }
        }
    }
    export const deleted =(todoId)=>{
        return{
            type:DELETED,
            payload:todoId
        }
    }
    export const allcompleted =()=>{
        return{
            type:ALLCOMPLETED,

        }
    }
    export const clearcompleted =()=>{
        return{
            type:CLEARCOMPLETED

        }
    }  
    ````

 ➡ 3. initialState.js

    ````js
    export const initialState =[
         {
                id:1 ,
                text:'Hasib Vai Todo list Assignment',
                completed:true
            },
            {
                id:2,
                text:'Bappa da  Todo list Assignment',
                completed:false,
                color:'red'
            }
        ];
        export default initialState;

    ````
 ➡ 4. reducer.js

    ````js
    import { initialState } from "./initialState";
    import {ADDED, TOGGLED, COLORSELECTED,DELETED, ALLCOMPLETED, CLEARCOMPLETED} from "./actionTypes";


    const nextTodoId = (todos)=>{
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
                            completed:!todo.completed,
                        }
                    });

            case COLORSELECTED:
                    const {todoId, color} =action.payload;
                    return state.map(todo=>{
                        if(todo.id !==todoId){
                            return todo;
                        }
                        return{
                            ...todo,
                            color:color
                        }
                    });

            case DELETED:
                    return state.filter(todo =>todo.id !== action.payload);
                
            case ALLCOMPLETED:
                    return state.map(todo =>{
                        return{
                            ...todo,
                            completed:true
                        }
                    });
            case CLEARCOMPLETED:
                            return state.filter(todo => !todo.completed)
                    
        
            default:
            return state;
        }

        };

        export default reducer;

    ````




    
            


