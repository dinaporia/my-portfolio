import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const templateParams = {
            name: fullName,
            email: email,
            subject: 'Portfolio Inquiry',
            message: message
            };    
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            setShow(true);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        
        <Form onSubmit={handleSubmit} className='mx-n4 m-sm-2'>
            <Form.Row className='px-0'>
                <Form.Group className='col-12 col-xl-6 pr-xl-2'  controlId='formName'>
                    <Form.Label className='label'>Your Name:</Form.Label>
                    <Form.Control 
                        required
                        type='text' 
                        placeholder='Firstname McLastname' 
                        value={fullName} 
                        onChange={ e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className='col-12 col-xl-6 pl-xl-2' controlId='formEmail'>
                    <Form.Label className='label'>Your Email:</Form.Label>
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
                    <Form.Label className='label'>Your Message:</Form.Label>
                    <Form.Control 
                        required
                        as='textarea' 
                        rows={4} 
                        placeholder='Hello!' 
                        value={message} 
                        onChange={ e => setMessage(e.target.value)} />
                </Form.Group>
            </Form.Row>
            <Form.Row className='pt-5'>
                <button type='submit' className='btn btn-lg btn-outline-accent mx-auto'>Send Email</button>
                { show && 
                <Alert 
                    variant='danger' 
                    onClose={() => {
                        setShow(false);
                        resetForm();
                        }} 
                    dismissible
                >
                    <Alert.Heading>Thanks, {fullName}, your message has been sent.</Alert.Heading> 
                </Alert>}
            </Form.Row>  
        </Form>
    );
}

export default ContactForm;

