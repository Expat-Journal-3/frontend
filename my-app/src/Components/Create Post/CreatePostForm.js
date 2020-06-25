import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import newPostSchema from '../../Validation/newPostShema'
import axios from 'axios'
import * as Yup from 'yup'
import UserPosts from './UserPosts'
import logo from '../../Assets/example.jpg'


///intial states
const intialValues = {
    id: '',
    title: '',
    description: '',
    image: '',
  }
  
  const intialErrors = {
    title: '',
    description: '',
    image: '',
  }
  
  const intialpost = []
  const initialDisabled = true

function CreatePostForm(props){
        
    //setStates//
    const [post, setpost] = useState(intialpost)
    const [formValues, setFormValues] = useState(intialValues)
    const [error, setError] = useState(intialErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    ///basic form stuff////////////////////
    const getNewpost = () => {
        axios.get('https://reqres.in/api/user', formValues)
        .then(res => {
            setpost([...post, res.data])
        })
        .catch(err => {
            console.log(err)
            debugger
        })
    }

    const postNewpost = (newpost) => {
        axios.post('https://reqres.in/api/user', newpost)
        .then(res => {
            setpost([...post, res.data])
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
        .reach(newPostSchema, name)
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

        const newpost = {
        title: formValues.title,
        description: formValues.description,
        image: formValues.image,

        }

        postNewpost(newpost)
        console.log(post)
    }

    useEffect(() => {
        getNewpost()
    }, [])

    useEffect(() => {
        newPostSchema.isValid(formValues).then(valid => {
        console.log(valid)
        setDisabled(!valid)
        })
    }, [formValues])
  
    return(
        <div>
        <Form>
            <FormGroup onSubmit={onSubmit}>
                <h2>New Post</h2>

                <Label>Title
                        <Input
                            value={formValues.title}
                            onChange={onInputChange}
                            name='title'
                            type='text'
                        />
                </Label>

                <div className='newPostPhoto'>
                    <Label>Photo URL
                        <Input
                            value={formValues.image}
                            onChange={onInputChange}
                            name='image'
                            type='text'
                            alt={formValues.title}
                        />
                    </Label>
                </div>
                <div className='newPostDetails'>
                    <Label>Description
                        <Input
                            value={formValues.description}
                            onChange={onInputChange}
                            name='description'
                            type='textarea'
                        />
                    </Label>

                </div>
                <Button disabled={disabled}>Save</Button>
            </FormGroup>
        </Form>
        
        {post.map(post => {
            return (
            <UserPosts key={post.id} details={post} />
        )})
        }
        </div>

    )
}

export default CreatePostForm;
