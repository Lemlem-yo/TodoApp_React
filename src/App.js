import './App.css';
import React, { useState} from 'react';


function App() {

  /**When a user click the add to list button 
   *    -display the form 
   * This function tells that one 
   */

  const [showForm , setShowForm] = useState(false);

  const handleAddButtonClick = ()=>{

    setShowForm(!showForm);
  }
  /**
   * To handle the default in the screen page we use other function for usablitiy
   */

  const handleFormSubmit =(event) =>{
    event.preventDefault();
    setShowForm(false);
  }
  return (
    <div className = "holder">
      <header>
      <h1>ToDo list</h1>
      <button onClick={handleAddButtonClick}>Add To List</button>
      </header>
      <div className='form-holder'>
      {showForm && ( <form onSubmit={handleFormSubmit}>
        <h1>Your Work list</h1>
        <label>Works:   </label>
        <input type="text" placeholder="Write the task you want todo"></input><br/><br/>
        <label>Description:</label>
        <input type="text" placeholder="Write the description"></input><br/><br/>
        <button type="submit" >Add</button>
      </form>
      )}

      </div>
      
      
      <div className="task-buttons">
        <button>To Do</button>
        <button>Completed</button>
      </div>
      
    </div>

  );
}

export default App;
