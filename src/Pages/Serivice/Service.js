import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
        const { id, name, img, discreption } = service;
        return (

                <div className="col-xl-12 m-2 bg-secondary p-2 rounded" style={{ width: "18rem" }}>
                        <img src={img} className="card-img-top rounded" alt="..." />
                        <div className="">
                                <h5>{name}</h5>
                                <p className="text-white">{discreption}</p>
                                <Link to={`/booking/${id}`}>
                                        <p className='btn bg-warning text-center align-items-center'>
                                                Booking
                                        </p>
                                </Link>
                        </div>
                </div>


        );
};

export default Service;