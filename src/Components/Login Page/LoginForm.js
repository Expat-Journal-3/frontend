import React from 'react';
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, FormText, Row } from 'reactstrap';
import { axiosWithAuth } from "../../axiosWithAuth"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../../store/actions/getAction";
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required("Username is Required"),
    password: yup.string().required("Password is Required"),

});

const user_id = {
     'Shantel': 1 ,
     'karina': 2 ,
    'tiffany': 3 ,
    'harrison': 4 ,
     'anatoliy': 5 ,
     'emily': 6 ,
    'micherre': 7 

}


function Login(props) {
    const { register, handleSubmit, errors, getValues } = useForm({
        validationSchema: schema,
    });
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = () => {

        dispatch({ type: LOGIN_START });
        const values = getValues();
        axiosWithAuth()
            .post('/api/auth/login', values)
            .then((res) => {
                const userid = user_id[values.username];
                console.log(res.data.token);
                
                localStorage.setItem("token", res.data.token);
                localStorage.setItem('userid', userid);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
                console.log(res);
                history.push("/we_are_in/posts");

            })
            .catch((err) => {
                dispatch({ type: LOGIN_FAIL, payload: err });
                console.log(err);
            });

    }




    return (
        <Form onSubmit={e => {
            handleSubmit(onSubmit)(e);
        }}>
            <FormGroup >
                <Row>
                    <h2>Login</h2>
                    <div className="errors">
                        <p style={{ color: "red", fontWeight: "bold" }}>
                            {errors.username && errors.username.message}
                        </p>

                        <p style={{ color: "red", fontWeight: "bold" }}>
                            {errors.password && errors.password.message}
                        </p>
                    </div>
                </Row>
                <Row>
                    <Label>Username
                    <input
                            ref={register}

                            name='username'
                            type='text'
                        />
                    </Label>
                </Row>

                <Row>
                    <Label>Password
                    <input
                            ref={register}

                            name='password'
                            type='password'
                        />
                    </Label>
                </Row>

                <button >Login</button>
                
                <FormText color='muted'>Don't have an account? <Link to='/register'>Register Here!</Link></FormText>
            </FormGroup>
        </Form>
    )
}



export default Login;