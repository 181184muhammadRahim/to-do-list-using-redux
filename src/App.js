//import logo from './logo.svg';
import React from 'react';
import './App.css';
import DisplayTask from './DisplayTask';
import TodoInput from './TodoInput';
function App() {
  return(
    <div>
      <TodoInput/>
      <DisplayTask/>
    </div>
  )
}


export default App;

