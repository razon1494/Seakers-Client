import React from 'react';
import './AddService.css';
import { useForm} from "react-hook-form";
import axios from 'axios';
const AddService=() => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit=data => {
        console.log(data);
        axios.post(`https://peaceful-temple-09783.herokuapp.com/addservice `, data)
            .then(res => {
                if(res.data.insertedId) {
                    alert('Data Added SuccessFully');
                    reset()

                }
            })

  }
    return (
        <div>
            <h2>Wanna Add A new Service</h2>
            <br /><br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h6 className='d-inline'>Place Name : </h6>

                <input {...register("placeName", {required: true, maxLength: 20})} placeholder='Place Name' />
                <br /><br />
        <h6 className='d-inline'>Speciality  :   </h6>
                <input {...register("speciality", {required: true, maxLength: 20})} placeholder='speciality' />
                <br /><br />
        <h6 className='d-inline'>Duration :   </h6>
                <input {...register("duration", {required: true, maxLength: 20})} placeholder='duration' />
                <br /><br />
        <h6 className='d-inline'>Distance :   </h6>
                <input type="number" {...register("distance", {required: true})} placeholder='Distance From Dhaka' />
                <br /><br />
                <h6 className='d-inline'>Transport  :   </h6>
                <input {...register("transport", {required: true})} placeholder='Transport' />
                <br /><br />
                <h6 className='d-inline'>Package Fee :   </h6>
                <input type="number" {...register("cost", {required: true})} placeholder='Cost' />
                <br /><br />
                 <h6 className='d-inline'>Season :   </h6>
                <input  {...register("season", {required: true})} placeholder='Season' />
                <br /><br />
                 <h6 className='d-inline'>Photo URL :   </h6>
                <input {...register("image", {required: true})} placeholder='Photo URL' />
                <br /><br />
                 <h6 className=''>Description   </h6>
                <textarea className="form-control container"{...register("details", {required: true})} placeholder='Details' />
                <br /><br />
      <input type="submit" />
    </form>

        </div>
    );
};

export default AddService;