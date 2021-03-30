import React, { useState, Fragment } from 'react';
import { Card, Modal } from 'react-bootstrap';

const ProjectCard = (props) => {
    const { 
        // required props
        header, image, code, blurb,
        // optional props
        number = 0,
        demo = false, 
        modal = {title: '', body: ''},
        // binary props conditionally render fa icons
        html = false, sass = false, css = false, bootstrap = false, js = false, react = false 
        } = props;

    // fa icons show on hover over card body
    const [ showText, setShowText ] = useState(false); 

    // modal activated on DEMO link click, if no demo prop passed
    const [ showModal, setShowModal ] = useState(false);
    const demoLink = (demo) ? {href: demo, target: '_blank'} : {onClick: () => setShowModal(true)};

    // determine margin based on odd/even number
    const placement = (number === 0)
        ? '' 
        : (number%2 === 0)
            ? 'mr-md-auto'
            : 'ml-md-auto';

    return (
        <Fragment>
            <Card className={`text-center h-100 mx-auto ${placement}`}>
                <Card.Header>
                    <h5>{header}</h5>
                </Card.Header>
                <Card.Body 
                    className='project-card' 
                    onMouseEnter={() => setShowText(true)} 
                    onMouseLeave={() => setShowText(false)} 
                    // touch replaces hover on mobile
                    onTouchStart={() => setShowText(true)} 
                    onTouchEnd={() => setShowText(false)}
                >
                    <div className={`project-card-overlay row row-cols-4 row-cols-md-2 ${(showText)? 'show' : ''}`}>
                        {html && <i className='fab fa-4x fa-html5 col' /> }
                        {js &&  <i className='fab fa-4x fa-js-square col' /> } 
                        {react &&  <i className='fab fa-4x fa-react col' /> } 
                        {css && <i className='fab fa-4x fa-css3 col' /> }
                        {sass && <i className='fab fa-4x fa-sass col' /> }
                        {bootstrap && <i className='fab fa-4x fa-bootstrap col' /> }        
                    </div>

                    <img className={`project-card-image ${(showText) ? 'active' : ''}`} src={image.url} alt={image.alt} draggable={false}/>

                </Card.Body>
                <Card.Body className='card-blurb'>
                <div>
                {blurb}
                </div>
                    
                </Card.Body>
                <Card.Footer className='d-flex justify-content-around p-0'>
                    <Card.Link href={code} target="_blank">CODE</Card.Link>
                    <Card.Link {...demoLink}>DEMO</Card.Link>
                </Card.Footer>

            </Card>

            <Modal show={showModal} onHide={()=>setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button type='button' className='btn btn-lg btn-outline-primary mx-auto' onClick={()=>setShowModal(false)}>Got it!</button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default ProjectCard;