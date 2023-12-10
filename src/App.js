import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [work, setWork] = useState("");
  const [description, setDescription] = useState("");

  // Initialize 'all' as an array of objects
  const [all, setAll] = useState([]);

   

  const handleAdd = (e) => {

    e.preventDefault();
    if (work.trim() !== "" && description.trim() !== ""){
      const newItem = { work, description };
      setAll([...all, newItem]);
      setWork("");
      setDescription("");
    }
    else {
      console.log('empty')
      return;
    }
  };

  useEffect(() => {
    console.log(all);
  }, [all]);

  return (
    <div className="holder">
      <h1>Todo list</h1>
      <div className="todo-input">
        <label>Works: </label>
        <input
          type="text"
          value={work}
          placeholder="Write the task want to do"
          onChange={(e) => setWork(e.target.value)}
        />
        <label>Description: </label>
        <input
          type="text"
          value={description}
          placeholder="Write the description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="task-buttons">
        <button>To Do</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default App;
