import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
             <div className="row h-100">
                <div className="col-lg-5 p-0">
                    <div color='medium' className="about-wrapper bg-light pt-4 pt-lg-7 px-2 pb-0 pb-lg-4 flex-lg-column justify-content-evenly">
                        <h2 className="about-title-one responsive-title">JACK OF ALL TRADES</h2>
                        <div className='profile-wrapper'>
                        <div className='img-wrapper-outer'>
                            <div className='img-wrapper-inner'>
                            <img src='images/genre.jpg' className='profile-image' alt='A photograph of Dina' />
                            </div>
                        </div>
                        
                        </div>
                       
                    </div>
                </div>

                <div className="col-lg-7 p-0">
                    <div color='medium' className="about-wrapper bg-dark pt-0 pt-lg-7 px-2 pb-2 justify-content-end justify-content-lg-center">
                        <div className='about-text p-1 p-md-3 px-md-4 py-lg-1'>

                            <p className="p-3 mb-0">I am currently a front-end web developer, working towards learning the full stack. I am especially interested in mastering algorithms and learning more about ARIA specifications. My previous lives have included:</p>

                            <ul className='px-4 mb-0 fa-ul'>
                                <li><span className='fa-li'><i className='far fa-sm fa-check-square'/></span>a PhD in Media Studies, where I wrote part of my dissertation as an interactive <a href='https://dinamuhic.com/previous-life/Ring-Around-the-Rosie.html' target='_blank' rel='noreferrer'>choose-your-own-adventure digital module</a>
                                </li>
                                <li><span className='fa-li'><i className='far fa-sm fa-check-square'/></span>a scholarly <a href='http://www.tandfonline.com/eprint/aSEEIhgxnwFy3dVwyzah/full' target='_blank' rel='noreferrer'>article on Bosnian cinema</a> published in <em>Third Text</em>, a leading international journal dedicated to the critical analysis of contemporary art
                                </li>
                                <li><span className='fa-li'><i className='far fa-sm fa-check-square'/></span>promotional posters for the 2nd annual <a href='https://www.instagram.com/p/BgHugKUl_m6/?igshid=118y3i5acszoy' target='_blank' rel='noreferrer'>Emerald Earth Film Festival</a> and Eugene's <a href='https://www.instagram.com/p/Bd53N9IFfns/' target='_blank' rel='noreferrer'>Unveiled</a> burlesque troupe, merchandise designs for Sarajevo Open Center's 2020 <a href='https://soc.ba/en/merlinka-in-sarajevo-2020-freedom-follows-the-brave/' target='_blank' rel='noreferrer'>Merlinka Film Festival</a>, and artwork for <a href='https://www.ridingupfront.org/daniel-singapore-singapore/' target='_blank' rel='noreferrer'>Riding Up Front</a>, a blog dedicated to promoting the rights of immigrants in the US
                                </li>
                                <li><span className='fa-li'> <i className='far fa-sm fa-check-square'/></span>working as director of photography for <a href='https://www.youtube.com/watch?v=q6jFSizoiXg' target='_blank' rel='noreferrer'>The Leprous Menace</a>, a short student film parodying the zombie genre
                                </li>
                            </ul>

                            <p className="p-3">I am pretty good at everything I do, with the notable exceptions of singing and dancing (alas!).</p>

                        </div>
                        
                        <h2 className="about-title-two responsive-title mt-2 mt-lg-0">MASTER OF SOME</h2>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default About;