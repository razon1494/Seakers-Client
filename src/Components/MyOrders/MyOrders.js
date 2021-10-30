import React, {useEffect} from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../../context/useAuth';
import FlyDubai from '../FlyDubai/FlyDubai';
import './MyOrders.css';
const MyOrders=() => {
    const {user}=useAuth();
    const [bookings, setBookings]=useState();
    const [control, setConrol] = useState(false);
      useEffect(() => {
    fetch(`https://peaceful-temple-09783.herokuapp.com/mybookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
      }, [control]);


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
        <div className='container'>
        <h2 className='booking-title my-4'>YOU HAVE {bookings?.length} BOOKINGS</h2>
        <p className='booking-sub'>Manage tour bookings here. Here we showing you all the bookings you have made. You can Delete any one. It's totally upto you. But all the orders are now pending to confirm the order please click on the confirm button it will redirect you to our manage bookings page where you will see all bookings of people. Just find your desire on and click for approval. Our all services process will beactivated after your approval. Any question feel free to contact us. We are always there for serve you.</p>
        <h2 className='booking-title my-4'>{user?.displayName}'s Order List</h2>

        <table className="table table-hover">
          <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Place Name</th>
      <th scope="col">Budget</th>
      <th scope="col">Delete</th>
      <th scope="col">Confirm</th>
    </tr>
  </thead>
            {
            bookings?.map(item => <tbody key={item._id}>
              <tr>
                <th scope="row">{index++}</th>
                <td>{item.placeName}</td>
                <td>{item.cost}</td>
                <td><button
                onClick={()=> handleDelete(item._id)}
                className="btn p-2"
              >
                <i class="fas fa-times cross"></i>
              </button></td>
                <td><Link to='/manageorders'> <button className='btn'><i class="fas fa-arrow-right arrow"></i></button></Link></td>
              </tr>
                </tbody> )
          }
        </table>
        <FlyDubai></FlyDubai>

        </div>
    );
};

export default MyOrders;