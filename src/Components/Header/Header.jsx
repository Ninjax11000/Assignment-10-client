import React, { useContext } from 'react';
import { Button, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user, logOut}=useContext(AuthContext);

    const handleLogout =()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }

    return (
        <div>
            <Navbar bg="danger" variant='dark' expand="lg">
               <div className="container">
               <Navbar.Brand href="/" className='fw-bold fs-1'>Italian Taste</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-3">
                        
                        <Link className='mx-2 px-2 text-decoration-none fs-5 text-white' to="/">Home</Link>
                        <Link className='mx-2 px-2 text-decoration-none fs-5 text-white' to="/blog">Blog</Link>
                        {user && <h5>{user.displayName}</h5>}

                        {user? <Button onClick={handleLogout} variant='danger'className='fs-5'>Logout</Button>
                        :<Link className='mx-2 px-2 text-decoration-none fs-5 text-white' to='/login'>Login</Link> }
                       
                    </Nav>
                </Navbar.Collapse>
               </div>
            </Navbar>
        </div>
    );
};

export default Header;