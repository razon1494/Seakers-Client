import React from 'react';
import './AddService.css';
import { useForm} from "react-hook-form";
import axios from 'axios';
//sending the added data to server
const AddService=() => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit=data => {
        console.log(data);
        axios.post(`https://peaceful-temple-09783.herokuapp.com/addservice `, data)
            .then(res => {
                if(res.data.insertedId) {
                    //confirmation
                    alert('Data Added SuccessFully');
                    //reset the form
                    reset()
                }
            })

  }
    return (
        <div className='container'>
            <h2 className='add-title my-4'>You Can Add or Custom Your Tour Here</h2>
            <h5 className='admin-warn' >*Read below list carefully before starting the form fill up</h5>
            <h2 className='text-start my-3 direction' >Direction to access the admin dashboard</h2>
            <ul className='text-start' >
                <li>You Must Have to Fill up all the fields</li>
                <li>If you put irrelevant data our admin panel can change or delete your tour without notice</li>
                <li>Please use hosted image url we do not allow copyright images</li>
                <li>Once you have added all these you can see the card of your tour on home page click there to place your order</li>
                <li>You can not change or modify after adding the tour</li>
                <li>Please contact with us to update or modify your trip</li>
                <li>Your given package fee can be changed or modified. We will let you know</li>
            </ul>
            <div className='add-container p-4'>
            <h2 className='add-now'>ADD NOW</h2>

                <br /><br />
                {/* ******* Add form starts here *********/}
            <form className='form row align-items-center justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                <h5 className='d-inline col-md-4'>Place Name : </h5>

                <input className='col-md-8 py-3 my-3' {...register("placeName", {required: true})} placeholder='Place Name' />
                <br /><br />
        <h5 className='d-inline col-md-4'>Spots  :   </h5>
                <input className='col-md-8 py-3 my-3' {...register("speciality", {required: true})} placeholder='spots list' />
                <br /><br />
        <h5 className='d-inline col-md-4'>Duration :   </h5>
                <input className='col-md-8 py-3 my-3' {...register("duration", {required: true})} placeholder='duration' />
                <br /><br />

                <h5 className='d-inline col-md-4'>Package Fee :   </h5>
                <input className='col-md-8 py-3 my-3' type="number" {...register("cost", {required: true})} placeholder='Cost' />
                <br /><br />
                 <h5 className='d-inline col-md-4'>Season :   </h5>
                <input className='col-md-8 py-3 my-3'  {...register("season", {required: true})} placeholder='Season' />
                <br /><br />
                 <h5 className='d-inline col-md-4'>Photo URL :   </h5>
                <input className='col-md-8 py-3 my-3' {...register("image", {required: true})} placeholder='Photo URL' />
                <br /><br />
                 <h3 className='my-4'>Write Description About Your Tour below   </h3>
                <textarea  className="form-control m-3 p-4 w-75"{...register("details", {required: true})} placeholder='Details' />
                <br /><br />
      <input className='w-25 submit-part py-2 my-3 fs-3' type="submit" />
    </form></div>

        </div>
    );
};

export default AddService;