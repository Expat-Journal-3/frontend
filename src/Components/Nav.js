import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap'

function Navigation(){

    return(
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Expat Journal</NavbarBrand>
            <Nav >
                <NavItem><NavLink tag={Link} to='/we_are_in/posts'>Home</NavLink></NavItem>
                <NavItem ><NavLink tag={Link} to='/we_are_in/newpost'>New Post</NavLink></NavItem>
                <NavItem><NavLink tag={Link} to='/'>Logout</NavLink></NavItem>
            </Nav>
        </Navbar>
    )
}

export default Navigation;