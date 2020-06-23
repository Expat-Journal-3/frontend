import React from 'react';

function Register(props){
    const{
        value,
        onInputChange,
        onSubmit,
        disabled,
    } = props

    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2>Register</h2>

                <label>Username
                    <input
                        value={value.valuename}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </label>

                <label>Password
                    <input
                        value={value.password}
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

export default Register; 