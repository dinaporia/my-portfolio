This app was created using Create React App. Dependencies include:
    "@fortawesome/fontawesome-free": "^5.15.2",
    "bootstrap": "^4.6.0",
    "emailjs-com": "^2.6.4",
    "node-sass": "^5.0.0",
    "react": "^17.0.1",
    "react-bootstrap": "^1.5.0",
    "react-dom": "^17.0.1",
    "react-popper": "^2.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
   
You can view the deployed site at dinamuhic.com. 

Feel free to use the code as a template, make sure to run yarn install for all dependencies and provide your own content and images.

Reusable components include:
Contact     -   responsive collection of social network buttons created with Font Awesome icons
NavHeader   -   responsive, animated navigation bar that opens on hover
ProjectCard -   responsive cards, based on Bootstrap card component
                props: header, image, code, demo, blurb
                Boolean props html, sass, css, bootstrap, js, react can be used to show icons on hover over image
PostIt      -   customizable wrapper styled like a post-it note
                props:  color - green, blue, purple, yellow (default)
                    title - text to go in header
                    text  - array of bullet points
ProjectBoard -  styled like a dry-erase board, contains 3 PostIts
                props: object with details to pass along to carousel and post-its, and text to go on board
                note: carousel background image is currently declared in css