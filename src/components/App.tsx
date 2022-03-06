import React from 'react';
import './App.css';
import ContextProvider from './ContextProvider/ContextProvider';
import ControlBar from './ControlBar/ControlBar';
import Field from './Field/Field';
import Scoreboard from './Scoreboard/Scoreboard';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Scoreboard />
        <Field />
        <ControlBar />
      </ContextProvider>
    </div>
  );
}

// Trigger
export default App;
