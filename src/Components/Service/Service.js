import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, placeName, cost, speciality, image } = service;
    return (
        <div  className="service pb-3 col-lg-3 my-4 mx-lg-5">

            <div>
            <img className='img-fluid' src={image} alt="" />
            <h3>{placeName}</h3>
            <h5>Package: {cost} /=</h5>
            <p className="px-3">{speciality}</p>
            <Link to={`/placeorder/${_id}`}>
                <button className="book-btn">Book {placeName.toLowerCase()}</button>
            </Link></div>
        </div>
    );
};

export default Service;