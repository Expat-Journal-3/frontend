import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Login from './Components/Login Page/LoginForm'
import PhotoGrid from './Components/PhotoGrid/PhotoGrid';
import Post from './Components/View Post/Post'

function App() {
  return (
    <div className="App">
      <Nav/>
      <PhotoGrid/>
      <Post/>
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
