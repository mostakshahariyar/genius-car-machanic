import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {
        const {name, img, expert_in} = expert;
        return (
                <div className="col-xl-12 m-2 bg-secondary p-2 rounded" style={{ width: "18rem" }}>
                        <img src={img} className="card-img-top rounded" alt="..." />
                        <div className="">
                                <h5 className='text-center fs-2'>{name}</h5>
                                <p className="text-danger fs-3 text-center">{expert_in}</p>
                        </div>
                </div>
        );
};

export default Expert;