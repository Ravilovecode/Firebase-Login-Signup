import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Signup.css';
import { auth } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const Signup = () => {
    const signupWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            // This gives you a Google Access Token. You can use it to access the Google API.
            
            const user = result.user;

            // The signed-in user info.
            const newUser = {
                fullName: user.displayName,
                email: user.email,
                mobile: user.phoneNumber,
                profilePic: user.photoURL,
                signInMethod: 'Google',
                emailVerified: user.emailVerified,
            };

            // Add the user data to Firestore
            const db = getFirestore();
            const docRef = await addDoc(collection(db, 'Users'), newUser);
            console.log('Document written with ID: ', docRef.id);

        } catch (error) {
            // Handle Errors here.
            
            console.error('Error during sign up: ', error);
        }
    };

    return (
        <div className='d-flex align-items-center main-height'>
            <Container className='signup-card px-0'>
                <Row className='gx-0'>
                    <Col md={6}>
                        <div className='bg-white p-4 signup-left-card'>
                            <img src='https://inzint.com/wp-content/uploads/2024/05/inzint-logo-dark-1.png' alt='inzint-logo' height={30} />

                            <Row className='my-5 justify-content-center'>
                                <Col md={9} lg={9} xs={12} className='main-content'>
                                    <h1 className='text-center'>Join Us</h1>
                                    <p className='text-center'>Create an account to get started with our services.</p>
                                    <Button variant='outline-dark' className='w-100 d-flex justify-content-center align-items-center my-4' onClick={signupWithGoogle}>
                                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" height="25" alt="Google logo" />
                                        <span className='ms-2'>Sign up with Google</span>
                                    </Button>

                                    <div className='divider'>
                                        <div className='line'></div>
                                        <div className='text'>Or</div>
                                    </div>
                                    <Form className='mt-5'>
                                        <Form.Control type='email' className='mb-4' placeholder='Email Address'></Form.Control>
                                        <Form.Control type='password' className='mb-2' placeholder='Password'></Form.Control>
                                        <Button variant='dark' className='w-100 mt-4'>Sign Up</Button>
                                    </Form>

                                    <div className='mt-4'>
                                        <p className='text-center text-secondary'>Already have an account? <a href='/login' className='text-dark'>Login</a></p>
                                    </div>

                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='signup-right-card p-4'>
                            <p className='text-center fs-2 fw-bold'>Join us to move faster and more effectively with our cutting-edge tools and features.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup
