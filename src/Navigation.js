import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation(props) {

    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">Church Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="#deets">
                        <Link to='/'>
                            Home
                                </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='/about'>
                            About
                                </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}