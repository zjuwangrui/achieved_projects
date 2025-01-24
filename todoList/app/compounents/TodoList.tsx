import React from "react";
import TodoItem from "./TodoItem";
import "../types";
export default function TodoList({todos,toggleTodo,deleteTodo}:{todos:TypeTodos,toggleTodo:IToggleTodo,deleteTodo:IDeleteTodo}){
//todos数据数组，打勾与删除useContext改写
    return (
        <>
        {todos.length===0 && <div>No dos</div>}
        <ul className="list">
            {todos.map(
                (todo)=>{
                    return (<TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>)
                }
            )}
        </ul>
        </>
    )
}