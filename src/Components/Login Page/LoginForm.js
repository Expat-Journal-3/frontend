import React from 'react';
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Login(props){
    const{
        value,
        onInputChange,
        onSubmit,
        disabled,
    } = props

    return(
        <Form>
            <FormGroup onSubmit={onSubmit}>
                <h2>Login</h2>
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

                <Button disabled={disabled} >Login</Button>
                <FormText color='muted'>Don't have an account? <Link to='/register'>Register Here!</Link></FormText>
            </FormGroup>
        </Form>
    )
}

export default Login;