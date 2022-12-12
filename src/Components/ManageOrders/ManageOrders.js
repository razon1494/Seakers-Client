import React, { useEffect, useState } from "react";
import "./ManageOrders.css";
const ManageOrders = () => {
  //changing title
  // This effect runs once, after the first render
  useEffect(() => {
    document.title = "ADMIN SEAKERS";
  }, []);
  //state declare
  const [services, setServices] = useState([]);
  const [check, setCheck] = useState(true);
  const [control, setConrol] = useState(false);
  //Getting Booking Data
  useEffect(() => {
    fetch("https://peaceful-temple-09783.herokuapp.com/managebookings")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [check, control]);
  //status update
  const handleApprove = (id) => {
    const url = `https://peaceful-temple-09783.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        setCheck(!check);
        console.log("Poree", check);
      })
      .finally();
  };
  //deleting the specific item
  const handleDelete = (id) => {
    var sure = window.confirm(`Are you sure you want to cancel this trip?`);
    if (sure) {
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
  //table index variable
  let index = 1;
  return (
    <div className="admin container mt-4 mb-5">
      <h1 className="admin-title">Hello Admin</h1>
      <h5 className="admin-warn">
        *Be Very Careful and read below before operating the dashboard
      </h5>
      <h2 className="text-start my-3 direction">
        Direction to access the admin dashboard
      </h2>
      <ul className="text-start">
        <li>Check & Verify Email address Before Approve Any order</li>
        <li>Approve Only If Payment is clear</li>
        <li>If you click for approve it will be approved instantly.</li>
        <li>
          Be careful to click on delete button it will delete the order forever
        </li>
        <li>If the order is in pending status it is hanging for approval</li>
      </ul>

      <h1 className="admin-title my-4">Admin Dashboard</h1>
      <div className="table-responsive">
        <table class="table table-hover table-dark table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Place</th>
              <th scope="col">User Info</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr>
                <th scope="row">{index++}</th>
                <td>{service.placeName}</td>
                <td>
                  {service.displayName} <br /> {service.email} <br />{" "}
                  {service.phonenumber}
                </td>
                {/* <td>{service.email} <br /> {service.phonenumber}</td> */}
                {/* <td>{service.phonenumber}</td> */}
                <td>
                  {service.status ? (
                    <button disabled className="btn btn-success">
                      Approved
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => handleApprove(service._id)}
                    >
                      Pending! Click to Approve
                    </button>
                  )}
                </td>
                {/*  <td>
                                {
                        service.status? <i class="fas fa-play tik"></i>:<i class="fas fa-ban cross"></i>
                    }

                            </td> */}
                <td>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
