import React, { useEffect, useState } from 'react';
import Expert from './Expert';

const Esperts = () => {
        const [experts, setExperst] = useState();
       useEffect( ()=>{
        fetch('experts.json')
        .then( res => res.json())
        .then( data => setExperst(data))
       },[])
        return (
                <div className='row'>
                        <h2 className='text-center text-primary' id='expert'>Our experts..</h2>
                       {
                        experts?.map(expert => <Expert
                                key = {expert.id}
                                expert = {expert}
                        ></Expert>)
                       } 
                </div>
        );
};

export default Esperts;