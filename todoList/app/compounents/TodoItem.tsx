import React from "react";
import "../types";
export default function TodoItem({id,title,completed,toggleTodo,deleteTodo,}:{id:string,title:string,completed:boolean,toggleTodo:IToggleTodo,deleteTodo:IDeleteTodo}){
 //id用来删除，title内容，compeletd表示是否完成，toggleTodo打勾，deleteTodo删除
    return (
        <>
        <li>
            <label ><input type="checkbox" checked={completed} onChange={(event)=>{toggleTodo(id,event.target.checked)}} />{title}</label>
            <button className="btn btn-danger" onClick={()=>{deleteTodo(id)}}>Delete</button>
        </li>
       
        </>
    );
}