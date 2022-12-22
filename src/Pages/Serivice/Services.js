import React, { useEffect, useState } from 'react';
import Service from './Service';
import './service.css'

const Services = () => {
        const [services, setServices] = useState();
        useEffect(() => {
                fetch('services.json')
                        .then(res => res.json())
                        .then(data => setServices(data));
        }, [])
        //console.log(services);
        return (
                <div className="service container row" id='service'>
                        {
                                services?.map(service => <Service
                                        key={service.id}
                                        service={service}
                                >

                                </Service>)
                        }
                </div>
        );
};

export default Services;