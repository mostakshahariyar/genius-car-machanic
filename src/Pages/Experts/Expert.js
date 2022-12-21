import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {
        const {name, img} = expert;
        return (
                <div className='col-lg-4 col-12 col-md-6'>
                        <img className='expert-img' src={img} alt="" />
                        <h3 className='text-danger'>{name}</h3>


                </div>
        );
};

export default Expert;