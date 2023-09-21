import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
        const { _id, serviceName, imageUrl, description } = service;
        return (

                <div className="col-xl-12 m-2 bg-secondary p-2 rounded" style={{ width: "18rem" }}>
                        <img src={imageUrl
                        } className="card-img-top rounded" alt="..." />
                        <div className="">
                                <h5>{serviceName}</h5>
                                <p className="text-white">{description}</p>
                                <Link to={`/booking/${_id}`}>
                                        <p className='btn bg-warning text-center align-items-center'>
                                                Booking
                                        </p>
                                </Link>
                        </div>
                </div>


        );
};

export default Service;