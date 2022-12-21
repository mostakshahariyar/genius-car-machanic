import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
        const {serviceId} = useParams();
        return (
                <div>
                        this is booking site {serviceId}.
                </div>
        );
};

export default Booking;