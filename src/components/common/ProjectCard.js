import React, { useState } from 'react';
import { Card } from 'react-bootstrap';


const ProjectCard = (props) => {
    const { header, subTitle, image, code, demo, details, 
        html = false, sass = false, css = false, bootstrap = false, js = false, react = false, reactNative = false} = props;

    const [ showText, setShowText ] = useState(false);

    return (
        <Card className="text-center h-100">
            <Card.Header>
                <h5>{header}</h5>
                <h6 className='text-muted'>{subTitle}</h6>
            </Card.Header>
            <Card.Body className='project-card' onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)} >
                <div className={`project-card-overlay row row-cols-4 row-cols-md-2 ${(showText)? 'show' : ''}`}>
                    {html &&
                        <i className='fab fa-4x fa-html5 col' />
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
                    {js && 
                        <i className='fab fa-4x fa-js-square col' />
                    } 
                    {react && 
                        <i className='fab fa-4x fa-react col' />
                    } 
                    {reactNative && 
                        <i className='fab fa-4x fa-react-native col' />
                    }                
                </div>
                <img className="project-card-image" src={image.url} alt={image.alt}/>
            </Card.Body>
        
            <Card.Footer className='d-flex justify-content-around p-0'>
                <Card.Link href={code}>CODE</Card.Link>
                <Card.Link href={demo}>DEMO</Card.Link>
                <Card.Link href={details}>DETAILS</Card.Link>
            </Card.Footer>
        </Card>


    )




}

export default ProjectCard;