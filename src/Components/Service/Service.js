import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, placeName, cost, speciality, image } = service;
    return (
        <div className="service pb-3 col-md-3 my-4 mx-2">
            <img className='img-fluid' src={image} alt="" />
            <h3>{placeName}</h3>
            <h5>Price: {cost}</h5>
            <p className="px-3">{speciality}</p>
            <Link to={`/placeorder/${_id}`}>
                <button className="btn btn-warning">Book {placeName.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;