import React from "react"
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { red  } from '@mui/material/colors'
import './TodoItem.scss'
import { IconButton } from "@mui/material";

export default function TodoItem({todo}){
    return(
        <div className="todoItem">
            <p>{todo}</p>
            <IconButton>
                <HighlightOffIcon sx={{color: red[600]}}/>
            </IconButton>
        </div>
    )
}