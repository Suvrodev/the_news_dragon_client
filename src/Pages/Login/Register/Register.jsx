import React from 'react';
import './Register.css'
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {

    const handleRegister=()=>{

    }
    return (

        <Container className='loginFormContainer mt-5 p-5'>
            <Form onSubmit={handleRegister} className="w-75   mx-auto registerForm">
                 <h2 className="w-100 text-center mb-4 mx-auto ">Register Your Account</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail loginFormLabel">
                    <Form.Label className='fw-bold'>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail loginFormLabel">
                    <Form.Label className='fw-bold'>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter your Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail loginFormLabel">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept our terms and conditions" />
                </Form.Group>

                <Button variant="secondary" className='w-100 mb-3' type="submit">
                  Register
                </Button>

               <div className='text-center fw-bold'>
                <Form.Text className='text-center mt-4'>
                       Already have an account? go to <Link className='text-success' to='/login'>Login</Link>
                </Form.Text>
               </div>

              

                <br />
            </Form>

        </Container>
    );
};

export default Register;