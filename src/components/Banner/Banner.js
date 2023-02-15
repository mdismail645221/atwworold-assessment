import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bannar from '../../assets/images/bannar.png'
import bannarBglogo from '../../assets/images/bannarBglogo.png'
import '../Banner/Banner.css'

const Banner = () => {

    const gradinatBg = <><div className='BgGradianColorImg'>
        <img src={bannarBglogo} alt="background gradiann imgage" />
    </div></>

    const cwlCaption = <Carousel.Caption>
        <h3>Computer Engineering</h3>
        <p>142,765 Computer Engineers follow this</p>
    </Carousel.Caption>

    return (
        <Carousel className='slider-container'>
            <Carousel.Item>
                {gradinatBg}
                <img
                    className="d-block w-100"
                    src={bannar}
                    alt="First slide"
                />
                {cwlCaption}
            </Carousel.Item>
            <Carousel.Item>
                {gradinatBg}
                <img
                    className="d-block w-100"
                    src={bannar}
                    alt="Second slide"
                />

                {cwlCaption}
            </Carousel.Item>
            <Carousel.Item>
                {gradinatBg}
                <img
                    className="d-block w-100"
                    src={bannar}
                    alt="Third slide"
                />

                {cwlCaption}
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;