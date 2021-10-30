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
    const [addedService, setAddedService]=useState({});
    const [address, setAddress]=useState('');
    useEffect(() => {
        fetch(`https://peaceful-temple-09783.herokuapp.com/services/${id}`)
            .then(res => res.json())
        .then(data => setService(data))
    }, []);
    const handlePlaceOrder=() => {
        addedService.email=user?.email;
        addedService.status=false;
        addedService.address=address;
        addedService.placeName=service.placeName;
        addedService.speciality=service.speciality;
        addedService.distance=service.distance;
        addedService.cost=service.cost;
        addedService.image=service.image;
        addedService.season=service.season;
        console.log(service);
        fetch("https://peaceful-temple-09783.herokuapp.com/placeorder", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(addedService),
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
            <h1 className='book-title'>You Want To Book {service?.placeName} Package</h1>
        <div className='row my-5 mx-auto container align-items-center justify-content-center'>
            <div className='col-md-6'>
            <img className='img-fluid' src={service?.image} alt="" /></div>
            <div className='details text col-md-6'>
            <h3 className='details-title'>{service?.placeName}</h3>
            <h5 className='price'>Price: {service?.cost}/person</h5>
            <h5 className="text-start spots"> <span className='span'> Spots Will Be visited:</span> {service?.speciality}</h5>
            <p className='text-start'>Your Email: {user.email}</p>
            <p className='text-start'>Your Name: {user.displayName}</p>
            <p className='text-start'>Hello, {user.displayName} Please Put Your addressbelow. Hardcopy of tickets to your address. Also All documents will also be mailed to your email address {user.email} </p>
            <h5 className='address'>Your Address</h5>
            <textarea onChange={handleAddress} className="form-control container my-3" placeholder='Address' />
            {
               (address === '') ? <button onClick={handlePlaceOrder} className="btn btn-danger disabled">Place Your Order</button> : <button onClick={handlePlaceOrder} className="btn btn-danger">Place Your Order</button>
            }

            <Link to={`/`}>

                </Link>
            </div>
            <div className='more my-5'>
                <h2 className='details-head'>More About {service?.placeName}</h2>
                <p className='details-p'>{service?.details}</p>

            </div>
        </div></div>
    );
};

export default PlaceOrder;