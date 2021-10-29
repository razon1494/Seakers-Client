import React from 'react';
import CustomTour from '../CustomTour/CustomTour';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Offers></Offers>
            <CustomTour></CustomTour>
        </div>
    );
};

export default Home;