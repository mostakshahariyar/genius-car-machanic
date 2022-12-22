import React, { useEffect, useState } from 'react';
import Expert from './Expert';
import '../Serivice/service.css'

const Esperts = () => {
        const [experts, setExperst] = useState();
       useEffect( ()=>{
        fetch('experts.json')
        .then( res => res.json())
        .then( data => setExperst(data))
       },[])
        return (
                <div>
                        <h2 className='text-center text-primary' id='expert'>Our experts..</h2>
                       <div className="row container service">
                       {
                        experts?.map(expert => <Expert
                                key = {expert.id}
                                expert = {expert}
                        ></Expert>)
                       } 
                       </div>
                </div>
        );
};

export default Esperts;