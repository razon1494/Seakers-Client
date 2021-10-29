import React from 'react';
import {Link} from 'react-router-dom';
import './CustomTour.css'
const CustomTour = () => {
    return (
        <div className='custom-container py-1'>
            <div className="container">
            <h2 className='custom-title my-5'>CUSTOMIZE YOUR TOUR </h2>
            <div className="row justify-content-center align-items-center mt-5">
                <div className="custom col-md-6">
                    <h4 className='custom-head'>Only we offer you to custom your tour plan by yourself</h4>
                    <p>We offer you to send all details about your tour plan with places name, duration and some other requirments. You can set all by yourself. Our Expert tour guide will analyze your data and give you a feedback with email</p>
                    <p>The email will contain the best way time of your tour. As well as our tour experts also provide a breakdown of estimate so that you can be clear about your cost. </p>
                    <p>We will provide all kinds of support to fullfill your travel dream. All the requirments of your custom tour will be full filled here. All type of plans you will get from us</p>
                    <h5>So? Why thinking? Just start Planning Your Tour</h5>
                    <Link to='/addservice'>
                    <button className='book-btn my-2'>
                        Plan Now
                    </button></Link>
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/p34ykbn/custom.webp" className='img-fluid' alt="" />
                </div>
            </div>
</div>
        </div>
    );
};

export default CustomTour;