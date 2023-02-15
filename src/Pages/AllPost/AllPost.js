import React, { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import '../AllPost/AllPost.css'
import { FaMapMarkerAlt, FaEyeDropper, FaBan } from 'react-icons/fa'

const AllPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`/news.json`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    console.log(posts)


    return (
        <div className='container'>
            <div className='row'>
                {/* all post container */}
                <div className='col-md-9 AllPostContainer'>
                    {posts.map(post => <PostCard key={post.id} post={post}></PostCard>)}
                </div>

                {/* location area start  */}
                <div className='col-md-3'>
                    <div className='flex flex-column'>
                        {/* location info */}
                        <div className='d-flex justify-content-between align-items-center mb-3 locationInfo'>
                            <div className='d-flex align-items-center'>
                                <span><FaMapMarkerAlt /></span>
                                <span className='ps-2'>Noida, India</span>
                            </div>
                            <div className='ps-3'>
                                <span style={{ cursor: 'pointer' }}><FaEyeDropper size={16} /></span>
                            </div>
                        </div>
                        {/* Ban area */}
                        <div className='d-flex justify-content-between align-items-center BanContainer'>
                            <div className='d-flex align-items-center BanIcon'>
                                <span><FaBan size={16} /></span>
                            </div>
                            <div className='ps-3 banTitle'>
                                <span>Your location will help us serve better and extend a personalised experience.</span>
                            </div>
                        </div>

                        {/* REcommended Groups */}
                        <div className='d-flex align-items-center justify-content-center REcommendedContainer'>
                            <p className='me-2'>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black" />
                                </svg>
                            </p>
                            <h3 style={{textTransform: 'uppercase', fontSize: '14px'}}>REcommended Groups</h3>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center BanIcon'>
                                <img src="alkdsjkd" alt="userImg" />
                                <span>NAME</span>
                            </div>
                            <div className='ps-3 banTitle'>
                                <button>Follow</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPost;