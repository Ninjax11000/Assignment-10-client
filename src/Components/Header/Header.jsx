import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="danger" variant='dark' expand="lg">
               <div className="container">
               <Navbar.Brand href="/home" className='fw-bold fs-1'>Italian Taste</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-3">
                        <Link className='mx-2 px-2 text-decoration-none fs-5 text-white' to="/">Home</Link>
                        <Link className='mx-2 px-2 text-decoration-none fs-5 text-white' to="/blog">Blog</Link>
                       <Link className='mx-2 px-2 text-decoration-none fs-5 text-white' to='/login'>Login</Link>
                    </Nav>
                </Navbar.Collapse>
               </div>
            </Navbar>
        </div>
    );
};

export default Header;