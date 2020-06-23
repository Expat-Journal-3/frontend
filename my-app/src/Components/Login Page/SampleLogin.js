import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import axios from 'axios';


const schema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  password: yup.string().required("Password is Required"),
 
});

export default function SampleLogin(props) {
  const { register, handleSubmit, errors, getValues } = useForm({
    validationSchema: schema,
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = () => {
    
    axios()
      .post("https://bwexpat-journal.herokuapp.com/api/auth/login ")
      .then((res) => {
        console.log(res.data.token);
        
        console.log(res);
      })
      .catch((err) => {
        
        console.log(err);
      });
  };

  return (
    
      <div className='signIn'>
      <form className="form container" onSubmit={handleSubmit(onSubmit)}>
        <div className="header">
          <nav>
            <a href="https://africanmarketplace-2.netlify.app/index.html">
              Home
            </a>
            <a
              href="https://africanmarketplace-2.netlify.app/about.html"
              target="_blank"
            >
              About Us
            </a>
          </nav>
        </div>
        <div className="form-group submit">
          <h2>Sign In</h2>

          <div className="errors">
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.username && errors.username.message}
            </p>
            
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.password && errors.password.message}
            </p>
          </div>
        </div>
        <div className="form-group inputs">
          <h4>General information</h4>
          <label>
            Username&nbsp;
            <input ref={register} name="username" type="text" />
          </label>
          <br />
          <br />
          
          <br />
          <br />
          <label>
            Password&nbsp;
            <input ref={register} name="password" type="password" />
          </label>
        </div>
        <br />

        <button> Log In </button>
        <br />
        <br />

        
        <br />
      </form>
      </div>
    
  );
}