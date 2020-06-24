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
import CreatePostForm from './Components/Create Post/CreatePostForm'
import Register from './Components/Login Page/Register'
import SampleLogin from './Components/Login Page/SampleLogin'
import UpdateForm from './Components/Create Post/UpdateForm'
//Schemas
import loginSchema from './Validation/loginSchema'

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
    axios.post('https://reqres.in/api/users', newuser)
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
          [name]: err.errors[0]
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
      <Nav />

      <Route exact path='/post'>
        <PhotoGrid />
      </Route>

      <Route path='/post/:id'>
        <Post />
      </Route>
      <Route path='/login'>
        <SampleLogin />
      </Route>

      <Route path='/login'>
        <Login
          value={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={disabled}
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

      <Route path='/newpost'>
          <CreatePostForm
            value={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            disabled={disabled}
          />
      </Route>

    </div>
  )
}

export default App
