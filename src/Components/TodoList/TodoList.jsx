import React from "react";
import TodoItem from "../TodoItem/TodoItem"

export default function TodoList({todos}){
    return(
        <div className="todoList">
            <h1>Todo List</h1>
            {todos.array.forEach(element => {
              return <TodoItem todo={element}/>  
            })}
        </div>
    )
}