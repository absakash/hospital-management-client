import React from 'react';

const Service = ({card}) => {
    const {img,description,name}=card
    return (
        <div className="card card-compact text-center bg-base-100 shadow-2xl p-2">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold">{name} </h2>
    <p>{description} </p>
   
  </div>
</div>
    );
};

export default Service;