import React from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Login(props){
    const{
        value,
        onInputChange,
        onSubmit,
        disabled,
    } = props

    return(
        <Form>
            <FormGroup onSubmit={onSubmit} >
                <Row form>
                <h2>Login</h2>
                </Row>
                <Row form>
                    <Label>Username
                    
                        <Input
                            value={value.username}
                            onChange={onInputChange}
                            name='username'
                            type='text'
                        />

                    </Label>
                </Row>
                <Row form>

                <Label>Password
                    <Input
                        value={value.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                    
                </Label>
                </Row>
                <Row form>
                <Link to='/we_are_in/post'><Button className='loginButton' disabled={disabled} >Login</Button></Link>
                </Row>

                <Row form>
                <FormText color='muted'>Don't have an account? <Link to='/register'>Register Here!</Link></FormText>
                </Row>
            </FormGroup>
        </Form>
    )
}

export default Login;