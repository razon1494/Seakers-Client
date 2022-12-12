import React, {useEffect} from 'react';
import CustomTour from '../CustomTour/CustomTour';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import './Home.css';
const Home=() => {
     //changing title
    // This effect runs once, after the first render
    useEffect(() => {
        document.title="SEAKERS HOME";
    }, []);
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