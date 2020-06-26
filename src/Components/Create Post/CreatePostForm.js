import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import newPostSchema from '../../Validation//newPostShema';
import UserPosts from '../View Post/Post'
import * as Yup from 'yup';
import { axiosWithAuth } from '../../axiosWithAuth'
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const intialErrors = {

    title: '',
    description: '',
    photo_url: '',
}
const intialValues = {
    title: '',
    description: '',
    photo_url: '',
}

const intialpost = []
const initialDisabled = true

export function CreatePostForm(props) {
    //const [post, setpost] = useState(intialUser)
    const [values, setValues] = useState(intialValues)
    const [error, setError] = useState(intialErrors)
    const history = useHistory();
    const [disabled, setDisabled] = useState(initialDisabled)


    const postNewPost = (newpost) => {
        //const { id } = useSelector((state) => state.userReducer.user);
        const user_id = window.localStorage.getItem('userid');
        axiosWithAuth()
            .post(`api/posts/user/${user_id}`, newpost)
            .then(res => {
                history.push("we_are_in/posts");
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
                debugger;
            })
            .finally(() => {
                setValues(intialValues)
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
            ...values,
            [name]: value,
        })
    }
    const onSubmit = evt => {
        evt.preventDefault()

        const newpost = {
            title: values.title,
            description: values.description,
            photo_url: values.photo_url,

        }

        postNewPost(newpost)
        console.log(newpost)
    }

    /*useEffect(() => {
        getNewPost()
    }, [])*/

    useEffect(() => {
        console.log(values)
        newPostSchema.isValid(values).then(valid => {
            console.log(valid)
            setDisabled(!valid)
        })
    }, [values])

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <h2>New Post</h2>

                    <Label>Title
                        <Input
                            value={values.title}
                            onChange={onInputChange}
                            name='title'
                            type='text'
                        />
                    </Label>

                    <div className='newPostPhoto'>
                        <Label>Photo URL
                        <Input
                                value={values.photo_url}
                                onChange={onInputChange}
                                name='photo_url'
                                type='text'
                                alt={values.title}
                            />
                        </Label>
                    </div>
                    <div className='newPostDetails'>
                        <Label>Description
                        <Input
                                value={values.description}
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
