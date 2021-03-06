import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

const Service = ({ service }) => {
    // destructuring
    const { _id, placeName, cost, speciality, image,duration } = service;
    return (
        <div  className="service pb-3 col-lg-3 my-4 mx-lg-5">
            <div>
            <img className='img-fluid' src={image} alt="" />
            <h3>{placeName}</h3>

                <h5 className="px-3 place-spot text-start"> Spots : <span className='spot'>{speciality}</span> </h5>
                <h6 className="px-3 duration"> Duration : {duration}</h6>
            <h5>Package: {cost} /=</h5>
            <Link to={`/placeorder/${_id}`}>
                <button className="book-btn">Book {placeName.toLowerCase()}</button>
            </Link></div>
        </div>
    );
};

export default Service;