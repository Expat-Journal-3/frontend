import React,{useState,useEffect} from 'react';
import axios from 'axios'

const intialValues={
    username:'',
    password:''
}
const intialUser = [];

function Login(props){
    const{
        onInputChange,
        onSubmit,
        disabled,
    } = props

    //States///////////////////////////////////////////
    const [user, setUser] = useState(intialUser)
    const [formValues, setFormValues] = useState(intialValues)

    //intial request///////////////////////////////////
    const getUser=()=>{
        axios.get('https://reqres.in/api/users', formValues)
        .then(res=>{
          setUser([...user, res.data])
        })
        .catch(err=>{
          console.log(err)
          debugger
        })
        .finally(() => {
            setFormValues(intialValues)
            console.log('it works')
        })
    };

    //POST request/////////////////////////////////////
    const postUser=(newUser)=>{
        axios.get('https://reqres.in/api/users', newUser)
        .then(res=>{
          setUser([...user, res.data])
        })
        .catch(err=>{
          console.log(err)
          debugger
        })
    };


    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2>Login</h2>
                <label>Username
                    <input
                        value={user.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </label>

                <label>Password
                    <input
                        value={user.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                </label>

                <button disabled={disabled}>Login</button>
            </form>
        </div>
    )
}

export default Login;