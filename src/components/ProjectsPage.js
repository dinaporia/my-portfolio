import React, { Fragment } from 'react';

import { ProjectCard } from './common';
import ProjectBoard from './ProjectBoard';

const Projects = () => {

    const smarTask = {
        title: 'SmarTask Mobile',
        subtitle: 'SmarTask takes care of organizing and scheduling your to-dos so you can focus on completing them!',
        blurb: 'SmarTask Mobile provides all the standard features of a to-do list app, along with an algorithm to automatically generate a daily schedule based on user preferences. Built with React Native, this app takes advantage of Redux for state management.',
        links: {
            code: 'https://github.com/dinaporia/smartask-mobile',
            demo: 'https://expo.io/@dinaporia/projects/smartask-mobile'
        },
        cards: {
            right: {
                title: "Features",
                text: ['Add & edit detailed tasks', 'Set preferences', 'Sort & filter tasks', 'Algorithmically generate daily schedule']
            },
            middle: {
                title: 'Technologies',
                text: ['React Native', 'Redux Toolkit', 'React Animatable', 'Expo SDK']
            },
            left: {
                title: 'Plans',
                text: ['Express & MongoDB back-end', 'Appointments', 'Recurring tasks', 'User-defined categories']
            }
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
        <Fragment>
        <div className='bg-medium row pt-6 px-3'>
            <div className='col-12 px-2 py-3 pb-sm-5 px-sm-5'>
            <h4 className='wrapped-title text-light'>Featured Project</h4>
                <ProjectBoard 
                    project={smarTask}
                    featured
                />
            </div>
        </div>
        <div className='bg-medium row'>
        <h4 className='wrapped-title text-light mb-0'>Other Projects</h4>
        </div>
        <div className='bg-medium row pb-7 px-5 px-lg-7 px-xl-8'>
            <div className='col-12 col-md-6 py-4 p-sm-5 px-md-4'>
                <ProjectCard 
                    number={1}
                    header='Cinema Art'
                    subTitle='Responsive Educational Website'
                    image={{url: 'images/cinema-art.jpg', alt: 'mockup of website on 3 different screen sizes'}}
                    html sass bootstrap js
                    code='https://github.com/dinaporia/cinema-art'
                    demo='https://cinema-art.dinaporia.repl.co/'
                    blurb='Cinema Art is a fully responsive educational website created in HTML and Sass. It makes use of customized Bootstrap for layout and styling, with a helping of Javascript for bottom navbar and tab navigation.'
                />
            </div>
            <div className='col-12 col-md-6 py-4 p-sm-5 px-md-4'>
                <ProjectCard 
                    number={2}
                    header="Do the Slide"
                    subTitle='Slide-15 Puzzle Game'
                    image={{url: 'images/do-the-slide.jpg', alt: 'screencap of game'}}
                    react sass
                    code='https://github.com/dinaporia/do-the-slide'
                    demo='https://dinaporia.github.io/do-the-slide'
                    blurb="Created for Mintbean's JS GameHacks Desktop Puzzles hackathon, this slide-15 puzzler was made with React and Sass, using no external libraries. It contains an algorithm to ensure all shuffled puzzles are solvable by checking for inversion polarity. All images used are my own."
                />
            </div>
            <div className='col-12 col-md-6 py-4 p-sm-5 px-md-4'>
                <ProjectCard 
                    number={3}
                    header="Film Trivia"
                    subTitle='Jeopardy-style Trivia Game'
                    image={{url: 'images/film-trivia.jpg', alt: 'mockup of game on laptop and tablet'}}
                    html css js
                    code='https://github.com/dinaporia/cinema-art/blob/main/js/games.js'
                    demo='https://cinema-art.dinaporia.repl.co/learning/games.html'
                    blurb='Hosted on the Cinema Art website, this interactive film trivia game was built using object-oriented JavaScript. It contains 25 questions in 5 categories, laid out on a Jeopardy-style score board.'
                />
            </div>
            <div className='col-12 col-md-6 py-4 p-sm-5 px-md-4'>
                <ProjectCard 
                    number={4}
                    header="Portfolio Site"
                    subTitle="Responsive Single Page App"
                    image={{url: 'images/portfolio.jpg', alt: 'homepage of this site with a you-are-here pointer'}}
                    react sass bootstrap
                    code='https://github.com/dinaporia/my-portfolio'
                    modal={{
                        title: 'You\'re looking at it!', 
                        }}
                    blurb='This single page app was created using React and Sass, with a dash of Bootstrap. It features 2 types of reusable project-demo components: a project board and a project card. The hover-activated navigation bar component is animated with pure CSS. The entire site is fully responsive - feel free to resize your browser to check it out!'
                />
                
            </div>   
           
        </div>
        </Fragment>
    );
}

export default Projects;