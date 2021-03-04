import React from 'react';

import { ProjectBoard } from './common';
import ProjectCard from './ProjectCard';

const Projects = (props) => {


    const smarTask = {
        green: {
            title: "Features",
            text: ['clickable', 'fast', 'this', 'that']
        },
        yellow: {
            title: 'Technologies',
            text: ['React Native', 'Redux Toolkit', 'Expo SDK']
        },
        blue: {
            title: 'Plans',
            text: ['Scheduling', 'Server']
        }
    };



    return (
        <div className='bg-dark row pt-5'>
            <div className='col-12 p-5'>
                <ProjectBoard 
                    project={smarTask}
                />
            </div>
            <div className='col-12 col-md-4 p-5 p-md-3'>
                <ProjectCard 
                    header='Cinema Art'
                    subTitle='Fully Responsive Educational Website'
                    image={{url: 'images/placeholder.png', alt: 'cinema'}}
                    html sass bootstrap js
                    code='#'
                    demo='#'
                    details='#'
                />
            </div>
            <div className='col-12 col-md-4 p-5 p-md-3'>
                <ProjectCard 
                    header="You Don't Know Film!"
                    subTitle='Jeopardy!-style Film Trivia Game'
                    image={{url: 'images/placeholder.png', alt: 'cinema'}}
                    html css js
                    code='#'
                    demo='#'
                    details='#'
                />
            </div>
            <div className='col-12 col-md-4 p-5 p-md-3'>
                <ProjectCard 
                        header="Dina's Portfolio Page"
                        subTitle="Responsive Single Page App"
                        image={{url: 'images/placeholder.png', alt: 'cinema'}}
                        react sass bootstrap js
                        code='#'
                        demo='#'
                        details='#'
                    />
            </div>
                
        </div>
    );
}

export default Projects;