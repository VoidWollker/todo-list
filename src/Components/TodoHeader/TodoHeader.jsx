import { TextField } from "@mui/material";
import React from "react";
import './TodoHeader.scss'

export default function TodoHeader({}){
    return(
        <div className="todoHeader">
            <h1>TodoList</h1>
            <TextField variant="standard" placeholder="Enter new task"/>
        </div>
    )
}