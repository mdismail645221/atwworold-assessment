import React, { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import '../AllPost/AllPost.css'

const AllPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(`/news.json`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    console.log(posts)


    return (
        <div className='container'>
            <div className='row'>
                {/* all post container */}
                <div className='col-md-6'>
                    {posts.map(post => <PostCard key={post.id} post={post}></PostCard>)}
                </div>
                {/* location area  */}
                <div>
                    654613464
                </div>
            </div>
        </div>
    );
};

export default AllPost;