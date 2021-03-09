import React, { useState, Fragment } from 'react';
import { Card, Modal } from 'react-bootstrap';


const ProjectCard = (props) => {
    const { header, subTitle, image, code, demo = false,
        html = false, sass = false, css = false, bootstrap = false, js = false, react = false } = props;
    
    const [ showText, setShowText ] = useState(false);
    const [ showModal, setShowModal ] = useState(false);
    const demoLink = (demo) ? {href: demo, target: '_blank'} : {onClick: () => setShowModal(true)};

    return (
        <Fragment>
            <Card className="text-center h-100">
                <Card.Header>
                    <h5>{header}</h5>
                    <p className='text-muted fs-5'>{subTitle}</p>
                </Card.Header>
                <Card.Body className='project-card' onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)} >
                    <div className={`project-card-overlay row row-cols-4 row-cols-md-2 ${(showText)? 'show' : ''}`}>
                        {html &&
                            <i className='fab fa-4x fa-html5 col' />
                        }
                        {js && 
                            <i className='fab fa-4x fa-js-square col' />
                        } 
                        {react && 
                            <i className='fab fa-4x fa-react col' />
                        } 
                        {css && 
                            <i className='fab fa-4x fa-css3 col' />
                        }
                        {sass &&
                            <i className='fab fa-4x fa-sass col' />
                        }
                        {bootstrap && 
                            <i className='fab fa-4x fa-bootstrap col' />
                        }        
                    </div>
                    <img className="project-card-image" src={image.url} alt={image.alt}/>
                </Card.Body>
            
                <Card.Footer className='d-flex justify-content-around p-0'>
                    <Card.Link href={code} target="_blank">CODE</Card.Link>
                    <Card.Link {...demoLink}>DEMO</Card.Link>
                </Card.Footer>
            </Card>
            <Modal show={showModal} onHide={()=>setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>You're looking at it!</Modal.Title>
                </Modal.Header>
                <Modal.Body>This website was created using React and Sass, with a dash of Bootstrap thrown in. It features two types of reusable project-demo components and a responsive, css-animated navigation bar. In fact, the entire site is fully responsive - feel free to resize your browser to check it out!</Modal.Body>
                <Modal.Footer>
                    <button type='button' className='btn btn-lg btn-primary mx-auto' onClick={()=>setShowModal(false)}>Got it!</button>
                </Modal.Footer>
            </Modal>
        </Fragment>

    )




}

export default ProjectCard;