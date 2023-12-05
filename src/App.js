import './App.css';


function App() {
  return (
    <div className = "holder">
      <h1>Todo list</h1>
      <div className="todo-input">
        <label>Works: </label>
        <input type="text" placeholder="Write the task want to do"></input>
      <label>Description: </label>
      <input type="text" placeholder="Write the description">
      </input>
      <button>Add</button>
      </div>
      <div className="task-buttons">
        <button>To Do</button>
        <button>Completed</button>
      </div>
    </div>

   
  );
}

export default App;
