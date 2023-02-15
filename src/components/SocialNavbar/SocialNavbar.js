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
                    <Dropdown.Toggle className='wriatePost' variant="success" id="dropdown-basic">
                        Write a Post
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* join group button */}
                <div className='leaveGroupBtn'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.24917 12.2908L8.54167 13.5833L13.125 9L8.54167 4.41667L7.24917 5.70917L9.61417 8.08333H0.75V9.91667H9.61417L7.24917 12.2908ZM15.4167 0.75H2.58333C1.56583 0.75 0.75 1.575 0.75 2.58333V6.25H2.58333V2.58333H15.4167V15.4167H2.58333V11.75H0.75V15.4167C0.75 16.425 1.56583 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75Z" fill="#6A6A6B" />
                    </svg>
                    <Button variant="primary">Leave a Group</Button>
                </div>

            </div>
        </nav>
    );
};

export default SocialNavbar;