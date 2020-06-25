import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap'

function Navigation(){

    return(
        <Navbar className='Nav'>
            <NavbarBrand>Expat Journal</NavbarBrand>
            <Nav className='mr-auto'>
                <NavItem><NavLink tag={Link} to='/we_are_in/post'>Home</NavLink></NavItem>
                <NavItem ><NavLink tag={Link} to='/we_are_in/newpost'>New Post</NavLink></NavItem>
                <NavItem><NavLink tag={Link} to='/'>Logout</NavLink></NavItem>
            </Nav>
        </Navbar>
    )
}

export default Navigation;