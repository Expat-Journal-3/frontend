import React from 'react';

function Login(props){
    const{
        value,
        onSubmit,
        onInputChange,
        disabled,

    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2>Login</h2>
                <label>Username
                    <input
                        value={value.username}
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

export default Login;