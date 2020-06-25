import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import newPostSchema from '../../Validation//newPostShema';
import UserPosts from '../View Post/Post'
import * as Yup from 'yup';
import { axiosWithAuth } from '../../axiosWithAuth'
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const intialErrors = {
    id: '',
    title: '',
    description: '',
    image: '',
}
const intialValues = {
    title: '',
    description: '',
    image: '',
}

const intialpost = []
const initialDisabled = true

export function CreatePostForm(props) {
    //const [post, setpost] = useState(intialUser)
    const [value, setValues] = useState(intialValues)
    const [error, setError] = useState(intialErrors)
    const history = useHistory();
    const [disabled, setDisabled] = useState(initialDisabled)


    const postNewPost = (newpost) => {
        //const { id } = useSelector((state) => state.userReducer.user);
        axiosWithAuth()
            .post(`api/posts/user/${props.user_id}`, newpost)
            .then(res => {
                history.push("/posts");
                console.log(res.data)
                    .catch(err => {
                        console.log(err)
                        debugger
                    })
                    .finally(() => {
                        setValues(intialValues)
                    })
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

        setValues({
            ...value,
            [name]: value,
        })
    }
    const onSubmit = evt => {
        evt.preventDefault()

        const newpost = {
            title: value.title,
            description: value.description,
            image: value.image,

        }

        postNewPost(newpost)
        console.log(newpost)
    }

    /*useEffect(() => {
        getNewPost()
    }, [])*/

    useEffect(() => {
        newPostSchema.isValid(value).then(valid => {
            console.log(valid)
            setDisabled(!valid)
        })
    }, [value])

    return (
        <div>
            <Form>
                <FormGroup onSubmit={onSubmit}>
                    <h2>New Post</h2>

                    <Label>Title
                        <Input
                            value={value.title}
                            onChange={onInputChange}
                            name='title'
                            type='text'
                        />
                    </Label>

                    <div className='newPostPhoto'>
                        <Label>Photo URL
                        <Input
                                value={value.image}
                                onChange={onInputChange}
                                name='image'
                                type='text'
                                alt={value.title}
                            />
                        </Label>
                    </div>
                    <div className='newPostDetails'>
                        <Label>Description
                        <Input
                                value={value.description}
                                onChange={onInputChange}
                                name='description'
                                type='textarea'
                            />
                        </Label>

                    </div>
                    <Button disabled={disabled}>Save</Button>
                </FormGroup>
            </Form>

           
        </div>
    )


}
