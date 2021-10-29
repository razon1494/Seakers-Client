import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
const Services=() => {
    const [services, setServices]=useState([]);
    const [loading, setLoading]=useState(true);
        useEffect(() => {
        fetch('https://peaceful-temple-09783.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            });
        }, [])
    console.log(services)
    return (
        <div id="services">
            <h2 className="services-title mt-5">TOUR PACKAGES</h2>
            {
                loading && <Spinner animation="grow" variant="warning" />
            }
            <div className="container row mx-auto">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;