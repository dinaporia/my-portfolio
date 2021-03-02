import React, { Fragment } from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <Fragment>
             <div className="row h-100">
                <div className="col-lg-6 p-0">
                    <div className="contact-wrapper bg-dark pt-lg-7">
                    <h2 className="wrapped-title mb-lg-auto">Contact Me</h2>
                        <div className='w-75 align-self-center mb-auto'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="contact-wrapper bg-light pt-lg-7">
                        <h2 className="wrapped-title mb-lg-auto">Find Me Elsewhere</h2>
                        <div className=' align-self-center mb-2 mb-lg-auto'>
                        <div className="row">
                            <div className="col-12 col-sm-4 col-lg-12 col-xl-4 p-2">
                                <a className="btn btn-outline-secondary social-button " href="http://instagram.com/aporiart"><i className="fa fa-5x fa-instagram " /> </a>
                            </div>
                            <div className="col-12 col-sm-4 col-lg-12 col-xl-4 p-2">
                                <a className="btn btn-outline-secondary social-button" href="https://www.linkedin.com/in/dinamuhic"><i className="fa fa-5x fa-linkedin" /></a>
                            </div>
                            <div className="col-12 col-sm-4 col-lg-12 col-xl-4 p-2">
                                <a className="btn btn-outline-secondary social-button" href="https://github.com/dinaporia"><i className="fa fa-5x fa-github " /></a>
                            </div>
                        </div>
                    </div>
                        
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;