import React, {useEffect, useState} from 'react';
import './ManageOrders.css'
const ManageOrders=() => {
    const [services, setServices]=useState([]);
    const [check, setCheck]=useState(true);
    const [control, setConrol] = useState(false);
        useEffect(() => {
        fetch('https://peaceful-temple-09783.herokuapp.com/managebookings')
            .then(res => res.json())
            .then(data => setServices(data));
        }, [check, control])
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
     const handleDelete=(id) => {
        var sure=window.confirm(`Are you sure you want to cancel this trip?`);
        if(sure) {
      fetch(`https://peaceful-temple-09783.herokuapp.com/deletebooking/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
        }
    console.log(id);
    };
    let index=1;
    return (
        <div className='admin container mt-4 mb-5'>
            <h1 className='admin-title'>Hello Admin</h1>
            <h5 className='admin-warn' >*Be Very Careful and read below before operating the dashboard</h5>
            <h2 className='text-start my-3 direction' >Direction to access the admin dashboard</h2>
            <ul className='text-start' >
                <li>Check & Verify Email address Before Approve Any order</li>
                <li>Approve Only If Payment is clear</li>
                <li>If you click for approve it will be approved instantly.</li>
                <li>Be careful to click on delete button it will delete the order forever</li>
                <li>If the order is in pending status it is hanging for approval</li>
            </ul>

            <h1 className='admin-title my-4'>Admin Dashboard</h1>

            <table class="table table-hover table-dark">
<thead>
    <tr>
      <th scope="col">Order No</th>
      <th scope="col">Place</th>
      <th scope="col">email</th>
      <th scope="col">Cost</th>
      <th scope="col">Status</th>
      <th scope="col">Processing</th>
      <th scope="col">Delete</th>
    </tr>
                </thead>
                 <tbody>
            {
                        services.map(service => <tr>
                            <th scope="row">{index++}</th>
                            <td>{service.placeName}</td>
                            <td>{service.email}</td>
                            <td>{service.cost}</td>
                            <td>
                                {
                        service.status? <button disabled className='btn btn-success'>Approved</button>:<button className='btn btn-success' onClick={() => handleApprove(service._id)}>Pending! Click to Approve</button>
                    }
                            </td>
                            <td>
                                {
                        service.status? <i class="fas fa-check tik"></i>:<i class="fas fa-times cross"></i>
                    }

                            </td>
                            <td>
                                <button
                onClick={()=> handleDelete(service._id)}
                className="btn btn-danger"
              >Delete</button>
                            </td>

                </tr>)
                }</tbody>
                </table>
        </div>
    );
};

export default ManageOrders;