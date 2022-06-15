import { useReducer, useState } from "react";

import reducer from './reducer'
import {Context} from './context'
import TodoList from "./Components/TodoList/TodoList";
import TodoHeader from "./Components/TodoHeader/TodoHeader";

export default function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])
  
  //todos = ['wake up', 'cook breakfast', 'walk the dog']

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="App">
        <TodoHeader/>
        <TodoList todos={todos}/>
      </div>
    </Context.Provider>
  );
}