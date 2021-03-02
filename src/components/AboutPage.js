import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';


const About = () => {
    return (
        <Fragment>
             <div className="row h-100">
                <div className="col-lg-6 p-0">
                    <div color='medium' className="about-wrapper bg-light pt-4 pt-lg-7 px-2 pb-0 pb-lg-4 flex-lg-column justify-content-evenly">
                        <h2 className="about-title-one ">JACK OF ALL TRADES</h2>
                        <Image src='images/genre.jpg' className='profile-image' />

                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div color='medium' className="about-wrapper bg-dark pt-0 pt-lg-7 px-2 pb-2 justify-content-end justify-content-lg-center">
                        <p className="wrapped-text">Soluta aut minus incidunt harum accusamus. Ipsa soluta est voluptas facere. Quasi temporibus voluptas qui est. Qui explicabo eaque quaerat eaque ipsum.</p>
                        <h2 className="about-title-two ">MASTER OF SOME</h2>
                    </div>
                </div>
            </div>
        </Fragment>
       
    );
}

export default About;