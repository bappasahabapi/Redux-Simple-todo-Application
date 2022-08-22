# Simple Todo Application
        1.  Setting Up the project
        2.  Difining the actions for todo slice and filter slice
        3.  Difining Reducer for  todo slice
        4. store setup
 
### 🟩Install 
      npm i redux react-redux

### The whole application has two parts
    1. Todo part
    2. Filter part

## Difining Actions 

### 🟩 Todos 

 1. actionTypes.js
    ````js
        export const ADDED ="todos/added";
        export const TOGGLED ="todos/toggled";
        export const COLORSELECTED ="todos/colorselected";
        export const DELETED ="todos/deleted";
        export const ALLCOMPLETED ="todos/allcompleted";
        export const CLEARCOMPLETED ="todos/  clearcompleted";

    ````
       
2. actions.js(here we make action creator )

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
            


