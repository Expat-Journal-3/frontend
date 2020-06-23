import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './Components/Nav'
import Login from './Components/Login Page/LoginForm'
import PhotoGrid from './Components/Photo Grid/PhotoGrid';
import Post from './Components/View Post/Post'
import axios from 'axios'
import Register from './Components/Login Page/Register';
import CreatePostForm from './Components/Create Post/CreatePostForm';
import { Route, Router } from "react-router-dom";



///intial states
const intialValues = {
  username:'',
  password:'',
}

const intialErrors = {
  username:'',
  password:'',
}

const intialUser = [];
const initialDisabled = true

function App() {
  //setStates//
  const [user, setuser] = useState(intialUser)
  const [formValues, setFormValues] = useState(intialValues)
  const [error, setError] = useState(intialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)       
  
    ///basic form stuff////////////////////
    const getNewuser = ()=>{
      axios.get('https://reqres.in/api/users', formValues)
      .then(res=>{
        setuser([...user, res.data])
      })
      .catch(err=>{
        console.log(err)
        debugger
      })
    };
  
    const postNewuser = (newuser)=>{
      axios.post('https://reqres.in/api/users', newuser)
      .then(res=>{
        setuser([...user, res.data])
        console.log(res.data)
      })
      .catch(err=>{
        console.log(err)
        debugger
      })
      .finally(() => {
        setFormValues(intialValues)
        console.log('hey')
      })
    }
  
    const onInputChange = evt =>{
      const{name, value} = evt.target;
  
      setFormValues({
        ...formValues,
        [name]: value,
      })
    }
  
    const onSubmit = evt =>{
      evt.preventDefault()
  
      const newuser = {
        name:formValues.username,
        password:formValues.password,
      }
  
      postNewuser(newuser)
    }


    useEffect(()=>{
      getNewuser()
    },[])


  return (
    <div className="App">
      <Nav/>

      <Route exact path='/feed'>
        <PhotoGrid/>
        </Route>
        
      <Route path ='/feed/:id'>
        <Post/>
        </Route>

      <Route exact path='/login'>
        <Login
          value={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={disabled}
      />
      </Route>

      <Route exact path='/register'>
        <Register
          value={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={disabled}
        />
      </Route>

      <Route exact path='/newPost'>
        <CreatePostForm
            value={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            disabled={disabled}
        />
      </Route>
    </div>
  );
}

export default App;
