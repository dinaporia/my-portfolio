import React, { Fragment } from 'react';
import ContactForm from './ContactForm';
import { Contact } from './common';

const ContactPage = () => {
    return (
        <Fragment>
             <div className="row h-100">
                <div className="col-lg-6 p-0">
                    <div className="contact-wrapper bg-dark pt-lg-7">
                    <h2 className="wrapped-title responsive-title mb-lg-auto">Contact Me</h2>
                        <div className='w-75 align-self-center mb-auto'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="contact-wrapper bg-light pt-lg-7">
                        <h2 className="wrapped-title responsive-title mb-lg-auto">Find Me Elsewhere</h2>
                        <Contact insta />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactPage;