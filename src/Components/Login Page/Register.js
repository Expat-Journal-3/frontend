import React from 'react';
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Register(props){
    const{
        value,
        onInputChange,
        onSubmit,
        disabled,
    } = props

    return(
        <Form>
            <FormGroup onSubmit={onSubmit}>
                <h2>Register</h2>
                <Label>Username
                    <Input
                        value={value.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </Label>

                <Label>Password
                    <Input
                        value={value.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                </Label>

                <Link to='/'><Button >Register</Button></Link>
                <FormText color='muted'>Have an account? <Link to='/login'>Login Here!</Link></FormText>
            </FormGroup>
        </Form>
    )
}

export default Register;