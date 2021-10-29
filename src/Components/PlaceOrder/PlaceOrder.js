import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Link, useParams} from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './PlaceOrder.css';
const PlaceOrder=() => {
    const {user}=useAuth();
    const {id}=useParams();
    const history=useHistory();
    console.log(id);
    const [service, setService]=useState();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
        .then(data => setService(data))
    }, []);
    const handlePlaceOrder=() => {
        service.email=user?.email;
        console.log(service);
        fetch("http://localhost:5000/placeorder", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
            .finally(alert('Item Booked. Please Confirm on manage booking page'));
        history.push('/')
    }



    return (
        <div>
            <img className='img-fluid' src={service?.image} alt="" />
            <h3>{service?.placeName}</h3>
            <h5>Price: {service?.cost}</h5>
            <p className="px-3">{service?.speciality}</p>
            <button onClick={handlePlaceOrder} className="btn btn-danger">Place Your Order</button>
            <Link to={`/`}>

            </Link>
        </div>
    );
};

export default PlaceOrder;