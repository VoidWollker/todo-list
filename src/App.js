import { useReducer, useEffect } from "react";

import reducer from './reducer'
import {Context} from './context'
import TodoList from "./Components/TodoList/TodoList";
import TodoHeader from "./Components/TodoHeader/TodoHeader";

export default function App() {
  const [state, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="App">
        <TodoHeader/>
        <TodoList todos={state}/>
      </div>
    </Context.Provider>
  );
}