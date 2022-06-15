import React, { useContext } from "react"

import './TodoItem.scss'
import {Context} from '../../context'
import { Checkbox, IconButton } from "@mui/material";
import {  blue, green, red  } from '@mui/material/colors'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export default function TodoItem({title, id, completed}){
    const dispatch = useContext(Context).dispatch

    const cls = ['todoItem']

    if (completed) {
        cls.push('completed')
    }

    const toogleTodo = event =>{
        dispatch({
            type: 'toogle',
            payload: id
        })
    }

    const removeTodo = event =>{
        dispatch({
            type: 'remove',
            payload: id
        })
    }

    return(
        <div className={cls.join(' ')}>
            <div className="todoItem-todoName">
                <Checkbox 
                    checked={completed}
                    onChange={toogleTodo}
                    sx={{
                        color: blue[400],
                        '&.Mui-checked':{
                            color: green[500]
                        }
                }}/>
                <p>{title}</p>
            </div>
            <IconButton onClick={removeTodo}>
                <HighlightOffIcon sx={{color: red[600],}}/>
            </IconButton>
        </div>
    )
}