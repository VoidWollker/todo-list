import React from "react"
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import {  blue, green, red  } from '@mui/material/colors'
import './TodoItem.scss'
import { Checkbox, IconButton } from "@mui/material";

export default function TodoItem({todo}){
    return(
        <div className="todoItem">
            <div className="todoItem-todoName">
                <Checkbox sx={{
                    color: blue[400],
                    '&.Mui-checked':{
                        color: green[500]
                    }
                }}/>
                <p>{todo}</p>
            </div>
            <IconButton>
                <HighlightOffIcon sx={{color: red[600],}}/>
            </IconButton>
        </div>
    )
}