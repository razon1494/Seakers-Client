import React, {useEffect} from 'react';
import {useState} from 'react';
import useAuth from '../../context/useAuth';
import './MyOrders.css';
const MyOrders=() => {
    const {user}=useAuth();
    const [bookings, setBookings]=useState();
     const [control, setConrol] = useState(false);
      useEffect(() => {
    fetch(`http://localhost:5000/mybookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
      }, [control]);


    const handleDelete=(id) => {
        var sure=window.confirm(`Are you sure you want to cancel this trip?`);
        if(sure) {
            fetch(`http://localhost:5000/deletebooking/${id}`, {
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
    return (
        <div>
            <h2>Your Total Bookings are {bookings?.length}</h2>
            {
                bookings?.map(item => <div key={item._id}>
                    {item.placeName}
                    <button
                onClick={()=> handleDelete(item._id)}
                className="btn bg-danger p-2"
              >
                Delete
              </button>
                    <button>Confirm</button>
                </div> )
            }
        </div>
    );
};

export default MyOrders;