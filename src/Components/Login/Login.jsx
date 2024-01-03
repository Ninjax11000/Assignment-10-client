import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [error, setError]=useState('');
    const [success, setSuccess]=useState('');

    const { signIn,googleSignIn,gitHubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // find the recipe id
    // var j= from.split('/');
    // var k=j.length-1;
    // var l=j[k];
    let l=useParams();
   
  
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        setSuccess('');
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('user log in succesful');
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGoogleSignIn =()=>{
        googleSignIn(googleProvider)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            if(l){
                navigate(`/recipes/${l}`);
            }
            else{
                navigate('/');
            }
        })
        .catch(error=>{
            console.log('error', error.message);
        })
    }
    const handleGithubSignIn =()=>{
        gitHubSignIn(githubProvider)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            if(l){
                navigate(`/recipes/${l}`);
            }
            else{
                navigate('/');
            }
        })
        .catch(error=>{
            console.log('error', error.message);
        })
    }

    return (
        <div>
            <h2 className='text-center mt-5'>Please Login</h2>
            <Container className='w-50 mx-auto my-5 py-5 card '>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Button variant="warning" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className='text-success'>
                        Don't have an account?<Link to='/register'>Register</Link>
                    </Form.Text>
                    <Form.Text className='text-success'>

                    </Form.Text>
                    <Form.Text className='text-danger'>

                    </Form.Text>
                </Form>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
            </Container>
            <div className='text-center'>
                <button className='btn btn-outline-primary mx-2' onClick={handleGoogleSignIn}> <FaGoogle/> Google Login</button>
                <button className='btn btn-outline-primary mx-2' onClick={handleGithubSignIn}> <FaGithub/> Github Login</button>
            </div>
        </div>
    );
};

export default Login;