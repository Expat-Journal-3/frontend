import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <Nav/>
      {/*<Login
          value={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={disabled}
      />*/}
    </div>
  );
}

export default App;
