import React, {useEffect, useState} from 'react';
import './ManageOrders.css'
const ManageOrders=() => {
    const [services, setServices]=useState([]);
    const [check, setCheck] = useState(true);
        useEffect(() => {
        fetch('https://peaceful-temple-09783.herokuapp.com/managebookings')
            .then(res => res.json())
            .then(data => setServices(data));
        }, [check])
    console.log(services);
    console.log("Aaageee  ",check);
    //status update
    const handleApprove=id => {
        const url=`https://peaceful-temple-09783.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                setCheck(!check)
                console.log('Poree',check);
            })
        .finally()
    }
    return (
        <div>
            {
                services.map(service => <div>
                    <p>{service.placeName} ------ {service.email}</p>
                    {
                        service.status ? <button>Approved</button> : <button  onClick={()=> handleApprove(service._id)}>Pending! Click to Approve</button>
                    }

                </div>)
            }
        </div>
    );
};

export default ManageOrders;