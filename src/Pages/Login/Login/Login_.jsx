import React from 'react';
import './Login_.css'

import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login_ = () => {

    const handleSignIn=()=>{

    }
    return (
        <Container className='loginFormContainer mt-5 p-5'>
          
            <Form onSubmit={handleSignIn} className="w-75   mx-auto loginForm">
                 <h2 className="w-100 text-center mb-4  mx-auto ">Login Your Account</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail loginFormLabel">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
            
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="secondary" className='w-100 mb-3' type="submit">
                 Login
                </Button>

               <div className='text-center fw-bold'>
                <Form.Text className='text-center mt-4'>
                        Don't have an account? go to <Link className='text-danger ' to='/register'>Register</Link>
                </Form.Text>
               </div>

              

                <br />
            </Form>

        </Container>
    );
};

export default Login_;