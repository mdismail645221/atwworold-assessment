import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEllipsisH, FaEye } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// FaEllipsisH

const PostCard = (post) => {
    console.log(post.post)
    const { img, profesion, title, description, location, time, views, website, authorName, authorImg } = post.post;
    console.log(description.length)
    return (
        <Card style={{ width: '692px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <div>{profesion}</div>
                <div className='d-flex'>
                    <Card.Title className='w-100'>{title}</Card.Title>
                    <DropdownButton id="dropdown-basic-button" title={<><FaEllipsisH/></>}>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                    </DropdownButton>
                    {/* {< />} */}
                    {/* <p className='flex-shrink-1'></p> */}
                </div>
                {/* time & location info */}
                {location &&
                    <div className='d-flex'>
                        <p className='me-5'>{time}</p>
                        <p>{location}</p>
                    </div>
                }
                {/* website & templeles button */}
                <div>
                    {website && <button>{website}</button>}
                </div>
                {/* author info */}
                <div className='d-flex justify-content-between align-items-center'>
                    {/* author name & img */}
                    <div className='d-flex align-items-center' style={{ paddingTop: '2rem', paddingBottom: '1.25rem'}}>
                        <img src={authorImg} alt="" />
                        <span className='ps-3'>{authorName}</span>
                    </div>
                    {/* views & share */}
                    <div className='d-flex  align-items-center'>
                        <span style={{ marginRight: '3.375rem'}}><FaEye />  {views}</span>
                        <button>share</button>
                    </div>
                </div>
                <Card.Text>
                    {description.length > 50 ? `${description} .....` : `${description}`}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default PostCard;