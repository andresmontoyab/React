import './App.css';
import React, {useState} from 'react'
import UsingTransition from './components/UsingTransition';
import Acordeon from './components/Acordeon';


function App() {
  return (
    <div className="App">
          <UsingTransition/>
          <Acordeon
            title = 'Acordeon Title'
            content= 'This is the first content'/>
          <Acordeon
            title = 'The second Acordean'
            content= 'This is the first content with more more more more text that the other one it is a lotof text because the idea is that his one has at leas two columns, lets wait'/>
    </div>
  );
}

export default App;
