import React from 'react';

import { ProjectBoard, ProjectCard } from './common';

const Projects = (props) => {


    const smarTask = {
        green: {
            title: "Features",
            text: ['Add detailed tasks', 'Personalize preferences', 'Sort and filter tasks', 'Automatically generated daily schedule']
        },
        yellow: {
            title: 'Technologies',
            text: ['React Native', 'Redux Toolkit', 'React Animatable', 'Expo SDK']
        },
        blue: {
            title: 'Plans',
            text: ['Appointment scheduling', 'Recurring Tasks', 'User-defined categories']
        },
        images: [
            { src: 'images/smartask-slides/add.png', alt: 'Add a new task'},
            { src: 'images/smartask-slides/details.png', alt: 'Add or edit task details'},
            { src: 'images/smartask-slides/list.png', alt: 'View task list'},
            { src: 'images/smartask-slides/schedule.png', alt: 'View daily schedule'},
            { src: 'images/smartask-slides/settings.png', alt: 'Edit user settings'},
        ]
    };



    return (
        <div className='bg-dark row py-7 px-2'>
            <div className='col-12 p-5'>
                <ProjectBoard 
                    project={smarTask}
                    featured
                />
            </div>
            <div className='col-12 col-md-4 p-5 p-md-3'>
                <ProjectCard 
                    header='Cinema Art'
                    subTitle='Fully Responsive Educational Website'
                    image={{url: 'images/cinema-art.jpg', alt: 'mockup of website on 3 different screen sizes'}}
                    html sass bootstrap js
                    code='#'
                    demo='#'
                    details='#'
                />
            </div>
            <div className='col-12 col-md-4 p-5 p-md-3'>
                <ProjectCard 
                    header="You Don't Know Film!"
                    subTitle='Jeopardy-style Trivia Game'
                    image={{url: 'images/film-trivia.jpg', alt: 'mockup of game on laptop and tablet'}}
                    html css js
                    code='#'
                    demo='#'
                    details='#'
                />
            </div>
            <div className='col-12 col-md-4 p-5 p-md-3'>
                <ProjectCard 
                        header="This Very Site"
                        subTitle="Responsive Single Page App"
                        image={{url: 'images/portfolio.jpg', alt: 'homepage of this site with a you-are-here pointer'}}
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