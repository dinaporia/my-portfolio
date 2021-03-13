import React from 'react';

const Contact = () => {
    return(
        <div className='contact-wrapper mb-lg-auto'>
            <div className="row h-100">
            
                <div className="col-12 col-sm-3 col-lg-12 p-2">
                    <a className="btn social-button" href="mailto:dmuhic@gmail.com" target="_blank" rel="noreferrer" ><i className="far fa-5x fa-envelope m-auto d-block" /> </a>
                </div>
                <div className="col-12 col-sm-3 col-lg-12 p-2">
                    <a className="btn social-button" href="https://www.linkedin.com/in/dinamuhic" target="_blank" rel="noreferrer" ><i className="fab fa-5x fa-linkedin" /></a>
                </div>
                <div className="col-12 col-sm-3 col-lg-12 p-2">
                    <a className="btn social-button" href="https://github.com/dinaporia" target="_blank" rel="noreferrer"><i className="fab fa-5x fa-github " /></a>
                </div>
           
                <div className="col-12 col-sm-3 col-lg-12 p-2">
                    <a className="btn social-button" href="http://instagram.com/aporiart" rel="noreferrer" target="_blank" ><i className="fab fa-5x fa-instagram " /> </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;