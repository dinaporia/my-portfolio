import React, {useState} from 'react';
import { Dropdown,  Container } from "react-bootstrap";


const NavHeader = (props) => {
    const [showMenu, setShowMenu] = useState(false);


    return (
        <Container id="nav-container">
        <Dropdown 
            className="nav-dropdown"
        >
            <Dropdown.Toggle as="div" id="nav-header-toggle" onClick={() => setShowMenu(!showMenu)}
            >
                DM
            </Dropdown.Toggle>
        {showMenu && 
            <div 
            className="drop-menu"
            >
            <Dropdown.Item href="/about">About</Dropdown.Item>
            <Dropdown.Item href="/projects">Projects</Dropdown.Item>
            <Dropdown.Item href="/contact">Contact</Dropdown.Item>
        </div>
        }
        
</Dropdown>

        </Container>
        
    );
}

export default NavHeader;