import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import './TodoHeader.scss'
import {Context} from '../../context'

export default function TodoHeader({}){
    const dispatch = useContext(Context).dispatch
    const [todoTitle, setTodoTitle] = useState('');
    
    console.log(dispatch);

    const addTodo = event => {
        if (event.key === 'Enter') {
            console.log('enter');
            dispatch({
                type: 'add',
                payload: todoTitle
            })
            setTodoTitle('')
        }
      }

    return(
        <div className="todoHeader">
            <h1>TodoList</h1>
            <TextField 
                variant="standard" 
                placeholder="Enter new task"
                value={todoTitle}
                onChange={e => setTodoTitle(e.target.value)}
                onKeyDown={e => addTodo(e)}
            />
        </div>
    )
}