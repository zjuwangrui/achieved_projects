import React from "react";
import { useState } from "react";
//功能：根据用户输入的内容来把新的事情上传到父组件中，存储在localstorge
export default function NewTodoForm({addTodos}:{addTodos:IAddTodos}){
 
    const [title,setTitle]=useState<string>('');
    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        //提交时需要保存数据，清空输入栏
        event.preventDefault();
        if(title===''){
            return ;
        }
        addTodos(title);
        setTitle('');
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New item</label>
                <input type="text" id="item" value={title} onChange={(event)=>{setTitle(event.target.value)}} />
            </div>
            <button className="btn" type="submit">Add</button>
        </form>
        </>
    )
}