import React from 'react';

const Contact = ({mail = false, insta = false}) => {
    return(
        <div className=' align-self-center mb-2 my-lg-auto'>
            <div className="row">
            {mail &&
                <div className="col-12 col-sm-4 col-lg-12 p-2">
                    <a className="btn btn-outline-accent social-button " href="mailto:dmuhic@gmail.com" target="_blank" rel="noreferrer" ><i className="far fa-5x fa-envelope " /> </a>
                </div>}
                <div className="col-12 col-sm-4 col-lg-12 p-2">
                    <a className="btn btn-outline-accent social-button" href="https://www.linkedin.com/in/dinamuhic" target="_blank" rel="noreferrer" ><i className="fab fa-5x fa-linkedin" /></a>
                </div>
                <div className="col-12 col-sm-4 col-lg-12 p-2">
                    <a className="btn btn-outline-accent social-button" href="https://github.com/dinaporia" target="_blank" rel="noreferrer"><i className="fab fa-5x fa-github " /></a>
                </div>
            {insta &&
                <div className="col-12 col-sm-4 col-lg-12 p-2">
                    <a className="btn btn-outline-accent social-button " href="http://instagram.com/aporiart" rel="noreferrer" target="_blank" ><i className="fab fa-5x fa-instagram " /> </a>
                </div>}
            </div>
        </div>
    );
}

export default Contact;