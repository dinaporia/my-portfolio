import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';

const ContactForm = () => {
    const [ fullName, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ show, setShow ] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleSubmit = (e) => {
        setShow(true);
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit} className='mx-n4 m-sm-2'>
            <Form.Row className='px-0'>
                <Form.Group className='col-12 col-xl-6 pr-xl-2'  controlId='formName'>
                    <Form.Label className='text-white'>Your Name:</Form.Label>
                    <Form.Control 
                        required
                        type='text' 
                        placeholder='Firstname McLastname' 
                        value={fullName} 
                        onChange={ e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className='col-12 col-xl-6 pl-xl-2' controlId='formEmail'>
                    <Form.Label className='text-white'>Your Email:</Form.Label>
                    <Form.Control 
                        required
                        type='email' 
                        placeholder='example@domain.org' 
                        value={email} 
                        onChange={ e => setEmail(e.target.value)} />
                </Form.Group>
            </Form.Row>
            <Form.Row className='px-0'>
                <Form.Group className='col-12' controlId='formMessage'>
                    <Form.Label className='text-white'>Your Message:</Form.Label>
                    <Form.Control 
                        required
                        as='textarea' 
                        rows={4} 
                        placeholder='Hello!' 
                        value={message} 
                        onChange={ e => setMessage(e.target.value)} />
                </Form.Group>
            </Form.Row>
            <Form.Row className='pt-2'>
                <button type='submit' className='btn btn-lg btn-outline-accent mx-auto'>Send Email</button>
                {show && 
                <Alert 
                    variant='danger' 
                    onClose={() => {
                        setShow(false);
                        resetForm();
                        }} 
                    dismissible
                >
                    <Alert.Heading>This feature has not been implemented yet.</Alert.Heading>
                    <p>Thank you for the message, {fullName}, but I am still working on setting up a server to enable sending messages from here. This form is mostly for show! In the meantime, please contact me via LinkedIn or <a href="mailto:dmuhic@gmail.com" target="_blank" rel="noreferrer">email me here.</a> Thank you for your patience while I get everything up and running!</p>
                </Alert>}
            </Form.Row>  
        </Form>
    );
}

export default ContactForm;

