import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import SocialNavbar from '../../components/SocialNavbar/SocialNavbar';
import AllPost from '../AllPost/AllPost';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SocialNavbar></SocialNavbar>
            <AllPost></AllPost>
        </div>
    );
};

export default Home;