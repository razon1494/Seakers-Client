import React, {useEffect, useState} from 'react';
import './ManageOrders.css'
const ManageOrders=() => {
      const [services, setServices]=useState([]);
        useEffect(() => {
        fetch('http://localhost:5000/managebookings')
            .then(res => res.json())
            .then(data => setServices(data));
        }, [])
    console.log(services);
    return (
        <div>
            <h2>hi</h2>
            {
                services.map(service => <div>
                    <p>{service.placeName} ------ {service.email}</p>
                    <button>Pending Click to Approve</button>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;