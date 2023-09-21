import React from 'react';
import { useForm, UseFormReset } from "react-hook-form";
import './AddService.css';
import axios from 'axios';

const AddServices = () => {

        const { register, handleSubmit, reset } = useForm();
        const onSubmit = (data) => {
                const { serviceName, description, price, imageUrl } = data;
                // console.log(serviceName, description, price, imageUrl);
                axios.post('https://geniyascarmechanisserver-production.up.railway.app/services', { serviceName, description, price, imageUrl })
                        .then(res => {

                                if (res.data.acknowledged) {

                                        alert("Services updated successfully");
                                        reset();
                                }
                        });
        }

        return (
                <div>
                        <h1>Add Services</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='form-group'>
                                <input {...register("serviceName", { required: true })} placeholder='Service Name' />
                                <input {...register("description",)} placeholder='Description' />
                                <input {...register("price")} type="number" placeholder='price' />
                                <input {...register("imageUrl")} type="text" placeholder='Image url' />
                                <input type="submit" />
                        </form>
                </div>
        );
};

export default AddServices;