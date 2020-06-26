import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import * as Yup from 'yup'
import { Route } from 'react-router-dom';

//imported components
import Nav from './Components/Nav'
import Login from './Components/Login Page/LoginForm'
import PhotoGrid from './Components/Photo Grid/PhotoGrid'
import Post from './Components/View Post/Post'
import {CreatePostForm} from './Components/Create Post/CreatePostForm'
import Register from './Components/Login Page/Register'
import PhotoDetailsSection from './Components/View Post/PhotoDetailsSection'


//Schemas
import loginSchema from './Validation/loginSchema'
import PrivateRoute from './Components/Routes/PrivateRoute'
import { axiosWithAuth } from './axiosWithAuth';

///intial states
const intialValues = {
  username: '',
  password: '',
}

const intialErrors = {
  username: '',
  password: '',
  

}

const intialUser = []
const initialDisabled = true

function App() {

  //setStates//
  const [user, setuser] = useState(intialUser)
  const [formValues, setFormValues] = useState(intialValues)
  const [error, setError] = useState(intialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  ///basic form stuff////////////////////

  const getNewuser = () => {
    axios.get('https://reqres.in/api/users', formValues)
      .then(res => {
        setuser([...user, res.data])
      })
      .catch(err => {
        console.log(err)
        debugger
      })
  }
  const postNewuser = (newuser) => {
    axiosWithAuth()
      .post('api/auth/login', newuser)
      .then(res => {
        setuser([...user, res.data])
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
        debugger
      })
      .finally(() => {
        setFormValues(intialValues)
        console.log('hey')
      })
  }

  const onInputChange = evt => {
    const { name, value } = evt.target

    Yup
      .reach(loginSchema, name)
      .validate(value)
      .then(
        setError({
          ...error,
          [name]: ''
        }))
      .catch(err => {
        setError({
          ...error,
          [name]: err.error[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newuser = {
      username: formValues.username,
      password: formValues.password
    }

    postNewuser(newuser)
  }
  useEffect(() => {
    getNewuser()
  }, [])

 

  useEffect(() => {
    loginSchema.isValid(formValues).then(valid => {
      console.log(valid)
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <Route path='/we_are_in'>
        <Nav />
      </Route>

      <Route exact path='/we_are_in/posts'>
        <PhotoGrid />
      </Route>

      <Route path='/we_are_in/posts/:id'>
        <Post />
      </Route>

      <Post />

      <Route exact path='/'>
        <Login

        />
      </Route>

      <Route path='/register'>
        <Register
          value={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={disabled}
        />
      </Route>
      <PrivateRoute exact path='/posts'>
        <PhotoGrid />
      </PrivateRoute>

      <Route path='/we_are_in/newpost'>
          <CreatePostForm/>
      </Route>


    </div>
  )
}

export default App
