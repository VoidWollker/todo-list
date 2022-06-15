import React from "react"
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.scss'

export default function TodoList({todos}){
    console.log(todos);

    return(
        <div className="todoList">
            {todos.map(item => {
                console.log(item);
                return <TodoItem key={item.id} {...item}/>
            })}
        </div>
    )
}