import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
        const {serviceId} = useParams();
        return (
                <div className='fw-bold fs-1 text-center'>
                        this is booking site {serviceId}.
                </div>
        );
};

export default Booking;