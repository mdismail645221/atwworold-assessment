import React from 'react';
import '../SocialNavbar/SocialNavbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

const SocialNavbar = () => {
    return (
        <nav className='socialNavBar container'>
            <ul className='socialMenu'>
                <li><a href="#">All Posts(32)</a></li>
                <li><a href="#">Article</a></li>
                <li><a href="#">Event</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Job</a></li>
            </ul>
            <div className='socialButtonGroup'>
                {/* dropdown react components */}
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* join group button */}
                <div>
                    <Button variant="primary">Primary</Button>
                </div>

            </div>
        </nav>
    );
};

export default SocialNavbar;