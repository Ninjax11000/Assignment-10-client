import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';




const Register = () => {
    const {createUser,setProfile}=useContext(AuthContext);
    const navigate =useNavigate();

    const handleRegister= event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        console.log(name, email,password,photo);
        createUser(email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);
            setProfile(name,photo);
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
        })
       
    }
    return (
        <div>
            <h2 className='text-center mt-5'>Please Register</h2>
         <Container className='w-50 mx-auto my-5 py-5 card '>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter email" required/>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="warning" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className='text-success'>
                    Already have an account?<Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-danger'>

                </Form.Text>
            </Form>
        </Container>
       </div>
    
    );
};

export default Register;