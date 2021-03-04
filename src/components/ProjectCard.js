import React, { useState } from 'react';
import { Card } from 'react-bootstrap';



const ProjectCard = (props) => {
    const { header, subTitle, image, code, demo, details, html = false, sass = false, css = false, bootstrap = false, js = false, react = false, reactNative = false} = props;


    const [ showText, setShowText ] = useState(false);



    return (
        <Card className="text-center h-100">
            <Card.Header>
                <h5>{header}</h5>
                <h6 className='text-muted'>{subTitle}</h6>
            </Card.Header>
            <Card.Body className='project-card' onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)} >
                <div className={`project-card-overlay ${(showText)? 'show' : ''}`}>
                    {html &&
                        <i className='fab fa-3x fa-html5 p-sm-1 p-md-0' />
                    }
                    {css && 
                        <i className='fab fa-3x fa-css3' />
                    }
                    {sass &&
                        <i className='fab fa-3x fa-sass' />
                    }
                    {bootstrap && 
                        <i className='fab fa-3x fa-bootstrap' />
                    } 
                    {js && 
                        <i className='fab fa-3x fa-js-square' />
                    } 
                    {react && 
                        <i className='fab fa-3x fa-react' />
                    } 
                    {reactNative && 
                        <i className='fab fa-3x fa-react-native' />
                    }                
                </div>
                <img className="project-card-image" src={image.url} alt={image.alt}/>
            </Card.Body>
        
            <Card.Footer>
                <Card.Link href={code}>Code</Card.Link>
                <Card.Link href={demo}>Demo</Card.Link>
                <Card.Link href={details}>Details</Card.Link>
            </Card.Footer>
        </Card>


    )




}

export default ProjectCard;