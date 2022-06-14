import React from "react"
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.scss'

export default function TodoList({todos}){
    return(
        <div className="todoList">
            {todos.map(e => {
                console.log(e);
                return <TodoItem todo={e}/>
            })}
        </div>
    )
}