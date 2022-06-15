import { TextField } from "@mui/material";
import React, { useContext } from "react";
import './TodoHeader.scss'
import {Context} from '../../context'

export default function TodoHeader({}){
    const dispatch = useContext(Context)
    const [todoTitle, setTodoTitle] = useState('');

    const addTodo = event => {
        if (event.key === 'Enter') {
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
                onKeyDown={addTodo}
            />
        </div>
    )
}