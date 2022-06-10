import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


export default function TodoItem({todo}){
    return(
        <div className="todoItem">
            <p>{todo}</p>
            <FontAwesomeIcon icon={faCircleXmark}/>
        </div>
    )
}