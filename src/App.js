//import logo from './logo.svg';
import React from 'react';
import './App.css';
import DisplayView from './DisplayTask';
import TodoInput from './TodoInput';
function App() {
  return(
    <div>
      <TodoInput/>
      <DisplayView/>
    </div>
  )
}


export default App;

