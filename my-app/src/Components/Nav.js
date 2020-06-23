import React from 'react';
import { Route, Link } from "react-router-dom";


function Nav(){

    return(
        <div className='Nav'>
            <ul>
                <li className='home'><Link to='/feed'>Home</Link></li>
                <li className='profile'><Link to=''>Profile</Link></li>
                <li className='logout'><Link to='/newpost'>New Post</Link></li>
                <li className='logout'><Link to='/login'>Logout</Link></li>

            </ul>
        </div>
    )
}

export default Nav;