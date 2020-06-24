
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component,...rest}) => {
    
    const token = window.localStorage.getItem('token');
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => {
            if (token){
                return <Component {...props}/>;
            }
            else{
                return <Redirect to="/login"/>
            }
        
        }} 
        />
        
        );
        
    };      


export default PrivateRoute;