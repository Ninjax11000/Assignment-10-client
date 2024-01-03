import React, { useContext, useState } from 'react';
import { Button, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import './Header.css';

const Header = () => {
    const [isHovering, setIsHovering] = useState(false);
    const handleName=()=>{
        setIsHovering(true);
    }
    const hideName =()=>{
        setIsHovering(false);
    }

    const {user, logOut}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogout =()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
        navigate('/');
    }
    const customGradient = 'linear-gradient(to right, #ED213A, #93291E)';

    return (

        <div>
            <Navbar style={{background:customGradient}} bg="danger" variant='dark' expand="lg">
               <div className="container">
               <Navbar.Brand href="/" id='name' className='fw-bold fs-1'>Italian Taste</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-3">
                        
                        <NavLink className='mx-2 px-2 text-decoration-none fs-5 ' to="/">Home</NavLink>
                        <NavLink className='mx-2 px-2 text-decoration-none fs-5' to="/blog">Blog</NavLink>
                        {user && isHovering && <h5 className='text-white mx-2'>{user.displayName}</h5>}
                        {user && <img onMouseOver={handleName} onMouseOut={hideName} style={{width:'40px',height:'40px',borderRadius:'50%',background:'white',marginRight:'10px'}} src={user.photoURL} alt="" /> }

                        {user? <Button onClick={handleLogout} variant='danger'className='fs-5'>Logout</Button>
                        :<NavLink className='mx-2 px-2 text-decoration-none fs-5 ' to='/login'>Login</NavLink> }
                       
                    </Nav>
                </Navbar.Collapse>
               </div>
            </Navbar>
        </div>
    );
};

export default Header;