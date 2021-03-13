import React, { Fragment } from 'react';
import ContactForm from './ContactForm';

import { Contact } from './common';

const ContactPage = () => {
    return (
        <Fragment>
             <div className="row h-100">
                <div className="col-lg-6 p-0">
                    <div className="home-wrapper bg-dark pt-lg-6">
                    <h2 className="wrapped-title responsive-title text-light mb-lg-auto">Contact Me</h2>
                        <div className='align-self-center mb-auto contact-wrapper'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="home-wrapper bg-light pt-lg-6">
                        <h2 className="wrapped-title responsive-title text-medium mb-lg-auto">Find Me Elsewhere</h2>
                        <Contact />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactPage;