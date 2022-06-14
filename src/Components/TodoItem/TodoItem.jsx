import React, { useState } from "react"
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import {  blue, green, red  } from '@mui/material/colors'
import './TodoItem.scss'
import { Checkbox, IconButton } from "@mui/material";

export default function TodoItem({todo}){
    const [todoToogle, setTodoToogle] = useState(false)
    const [todoName, setTodoName] = useState(todo)

    const handleChange = (event) =>{
        setTodoToogle(event.target.checked)
        if (!todoToogle){setTodoName(<s>{todo}</s>)}
        else {setTodoName(todo)}
    }

    return(
        <div className="todoItem">
            <div className="todoItem-todoName">
                <Checkbox 
                    checked={todoToogle}
                    onChange={e => handleChange(e)}
                    sx={{
                        color: blue[400],
                        '&.Mui-checked':{
                            color: green[500]
                        }
                }}/>
                <p>{todoName}</p>
            </div>
            <IconButton>
                <HighlightOffIcon sx={{color: red[600],}}/>
            </IconButton>
        </div>
    )
}