import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    // form fields
    const [ fullName, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
  
    // form validation
    const [validEmail, setValidEmail] = useState(true);
    const [validName, setValidName] = useState(true);
    const [validMessage, setValidMessage] = useState(true);

    // show email sent modal
    const [ show, setShow ] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
        setValidEmail(true);
        setValidName(true);
        setValidMessage(true);
    };

    const checkValidity = () => {
        const emailCheck = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        const nameCheck = val => /^[A-Z-]{2,}\s[A-Z-]{2,}$/i.test(val);

        const emailIsValid = (emailCheck(email)) ? true : false;
        const nameIsValid = (nameCheck(fullName)) ? true : false;
        const msgIsValid = (message.length > 5) ? true : false;

        setValidEmail(emailIsValid);
        setValidName(nameIsValid);
        setValidMessage(msgIsValid);

        return (emailIsValid && nameIsValid && msgIsValid);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const templateParams = {
            name: fullName,
            email: email,
            subject: 'Portfolio Inquiry',
            message: message
            };   

        if (checkValidity()) {
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            setShow(true);
        } else {
            e.stopPropagation();
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
                        onChange={ e => setName(e.currentTarget.value)} 
                        isInvalid={!validName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Please enter your full name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='col-12 col-xl-6 pl-xl-2' controlId='formEmail'>
                    <Form.Label className='label'>Your Email:</Form.Label>
                    <Form.Control 
                        required
                        type='email' 
                        placeholder='example@domain.org' 
                        value={email} 
                        onChange={ e => setEmail(e.target.value)} 
                        isInvalid={!validEmail}
                        />
                      
                    <Form.Control.Feedback type='invalid'>
                        Please enter a valid email.
                    </Form.Control.Feedback>
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
                        onChange={ e => setMessage(e.target.value)} 
                        isInvalid={!validMessage}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Please enter a longer message.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row className='pt-5'>
                <button type='submit' className='btn btn-lg btn-outline-accent mx-auto'>Send Email</button>
                { show && 
                <Alert 
                    variant='success' 
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

