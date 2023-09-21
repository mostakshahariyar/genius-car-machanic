import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Booking = () => {
        const { serviceId } = useParams();
        const [service, setService] = useState({});
        useEffect(() => {
                axios.get(`https://geniyascarmechanisserver-production.up.railway.app/services/${serviceId}`)
                        .then(res => setService(res.data));
        }, [])
        return (
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={service.imageUrl} />
                        <Card.Body>
                                <Card.Title>{service.serviceName}</Card.Title>
                                <Card.Text>
                                        {service.description}
                                </Card.Text>
                                <Card.Text>
                                        price: ${service.price}
                                </Card.Text>
                                <Button variant="primary">Place Order</Button>
                        </Card.Body>
                </Card>
        );
};

export default Booking;