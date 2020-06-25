import React, { useState, useEffect } from 'react';
import loginSchema from './Validation/loginSchema';
import * as Yup from 'yup';
import {axiosWithAuth} from '../../axiosWithAuth'
const intialErrors = {
    description: '',
    location: '',
    photo_url:''
    
  
  }
const intialValues = {
    description: '',
    location: '',
    photo_url:''
  }

  const intialUser = []
const initialDisabled = true

function CreatePostForm() {
    const [post, setpost] = useState(intialUser)
    const [value, setValues] = useState(intialValues)
    const [error, setError] = useState(intialErrors)
    const [disabled, setDisabled] = useState(initialDisabled)


  const postNewPost = (newpost) => {
    axiosWithAuth()
      .post(`api/posts/user/${id}`, newpost)
      .then(res => {
        setpost([...post, res.data])
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
        debugger
      })
      .finally(() => {
        setValues(intialValues)
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
    
        setValues({
          ...value,
          [name]: value,
        })
      }
      const onSubmit = evt => {
        evt.preventDefault()
    
        const newuser = {
          username: value.username,
          password: value.password
        }
    
        postNewPost(newPost)
      }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>New Post</h2>
                <div className="errors">
                    <div>{error.description}</div>
                    <div>{error.photo_url}</div>

                    <div>{error.location}</div>
                </div>
                <div className='newPostPhoto'>
                    <label>Add Image
                        <input
                            value={value.photo_url}
                            onChange={onInputChange}
                            name='image'
                            type='text'
                            alt={value.alt}
                        />
                    </label>
                </div>
                <div className='newPostDetails'>
                    <label>Description
                        <input
                            value={value.description}
                            onChange={onInputChange}
                            name='description'
                            type='text'
                        />
                    </label>

                    <label>Location
                        <input
                            value={value.location}
                            onChange={onInputChange}
                            name='location'
                            type='text'
                        />
                    </label>
                </div>
                <button disabled={disabled}>Save</button>
                <button disabled={disabled}>Cancel</button>
            </form>
        </div>
    )
}

export default CreatePostForm;
