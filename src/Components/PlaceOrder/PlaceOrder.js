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
    const [address, setAddress]=useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
        .then(data => setService(data))
    }, []);
    const handlePlaceOrder=() => {
        service.email=user?.email;
        service.status=false;
        service.address=address;
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

    const handleAddress=e => {
        console.log(e.target.value);
        const adrs=e.target.value;
        setAddress(adrs);
}

    return (
        <div>
            {/* <img className='img-fluid' src={service?.image} alt="" /> */}
            <h3>{service?.placeName}</h3>
            <h5>Price: {service?.cost}</h5>
            <p className="px-3">{service?.speciality}</p>
            <p>Your Email: {user.email}</p>
            <p>Your Name: {user.displayName}</p>
            <p>Hello, {user.displayName} Please Put Your address so that we can send you all booking details, Hardcopy of tickets to your address. Also All documents will also be mailed to your email address {user.email} </p>
            <p className=''>Your Address</p>
            <textarea onBlur={handleAddress} className="form-control container w-50 my-3" placeholder='Address' />
            {
               (address === '') ? <button onClick={handlePlaceOrder} className="btn btn-danger disabled">Place Your Order</button> : <button onClick={handlePlaceOrder} className="btn btn-danger">Place Your Order</button>
            }

            <Link to={`/`}>

            </Link>
        </div>
    );
};

export default PlaceOrder;