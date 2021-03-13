import React, {useState} from 'react';
import { Dropdown,  Container } from "react-bootstrap";
import { withRouter, NavLink } from 'react-router-dom';

const NavHeader = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    
    // if hover not available, clicking toggle opens the menu
    const hoverHandler = () => {
        if (window.matchMedia( "(hover: none)" ).matches) { 
            setShowMenu(!showMenu) 
        } else {
            props.history.push('/home')}
        };

    return (
        <Container id="nav-container" onMouseLeave={() => setShowMenu(false)}>
            <Dropdown className="nav-dropdown"  >
                <Dropdown.Toggle 
                    as="div" 
                    id="nav-header-toggle" 
                    className="d-none d-sm-block"
                    onMouseEnter={() => setShowMenu(true)}
                    onClick={hoverHandler}
                >
                    DM
                </Dropdown.Toggle>
               
                <div className={`drop-menu ${(showMenu)? 'open' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                    <NavLink className='w-50' to="/home" ><i className='fa fa-lg fa-home' /></NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/projects" >Projects</NavLink>
                    <NavLink to="/contact" >Contact</NavLink>
                </div>
   
            </Dropdown>
        </Container>
    );
}

export default withRouter(NavHeader);