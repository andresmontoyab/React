import './App.css';
import React, {useState} from 'react'
import UsingTransition from './components/UsingTransition';
import Acordeon from './components/Acordeon';
import Slides from './components/Slides';
import AcordeonContainer from './components/Acordeon';
import { ClicksTransitionGroup } from './components/react-transition-group/ClicksTransitionGroup';
import CarruserlContainer from './components/react-transition-group/Carrusel';


function App() {
  return (
    <div className="App">
          {/*<UsingTransition/>*/}
          {/*<AcordeonContainer></AcordeonContainer>*/}
          {/*<Slides></Slides>*/}
          {/*<ClicksTransitionGroup></ClicksTransitionGroup>*/}
          <CarruserlContainer></CarruserlContainer>
    </div>
  );
}

export default App;
