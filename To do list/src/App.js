
import './App.css';

import TaskList from './Components/TaskList';
import { v4 as uuidv4 } from 'uuid';
import {  useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import AddTasks from './Components/Addtasks';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTasks/>
        <TaskList/>
      </header>
    </div>
  );
}

export default App;