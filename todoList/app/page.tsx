"use client"
import NewTodoForm from "./compounents/NewTodoForm";
import TodoList from "./compounents/TodoList";
import React from "react";
import { useState,useEffect } from "react";
import "./style.css";
import "./types";
export default function App(){

//get todos from localStorage
function getTodos(){
  const localValue=localStorage.getItem("ITEM");
  if(!localValue){
    return [];
  }
  else{
    return  JSON.parse(localValue);
  }
}

const [todos,setTodos]=useState(getTodos());

useEffect(
()=>{//保存数据
  localStorage.setItem("ITEM",JSON.stringify(todos));
}
,[todos]);

//add todos

function addTodos(title:string):void{
  /*如果事件重复，不必再加入一个重复的事件 */
  let deduplication :1|0 =1;
  todos.map((todo:ITodo)=>{
    if(todo.title===title){
      deduplication=0;
    }
  })
  const newTodos=[...todos,{ id: crypto.randomUUID(), title, completed: false }];
  if(deduplication){
    setTodos(newTodos);
  }
  
}


//toggle todos
function toggleTodos(id:string,completed:boolean){
const copyTodos=todos.map(
  (todo:ITodo)=>{
    if(todo.id===id){
      todo.completed=true;
    }
    return todo;
  }
);
setTodos(copyTodos);
}


//delete todos
function deleteTodos(id:string){
  const deletedTodos=todos.filter(

    (todo:ITodo)=>{
      if(todo.id===id){
        return false;
      }
      return true;
    }

  )

  setTodos(deletedTodos);
}

return (
  <>
  <NewTodoForm addTodos={addTodos}></NewTodoForm>
  <h1>Todo List</h1>
  <TodoList todos={todos} toggleTodo={toggleTodos} deleteTodo={deleteTodos}></TodoList>
  </>
)

}