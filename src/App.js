import TodoList from "./Components/TodoList/TodoList";

function App() {
  let todos = ['wake up', 'cook breakfast', 'walk the dog']

  return (
    <div className="App">
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
