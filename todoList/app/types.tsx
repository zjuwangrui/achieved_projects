interface IToggleTodo{
    (id:string,completed:boolean):void;
}
interface IDeleteTodo{
    (id:string):void;
}
interface IAddTodos{
    (title:string):void;
}
interface ITodo{
    id:string,
    title:string,
    completed:boolean
}
type TypeTodos=ITodo[];