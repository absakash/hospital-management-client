import React from 'react';
import { Link, NavLink } from "react-router-dom";
const Service = ({card}) => {
    const {img,description,name}=card
    return (
        <Link to='/appointment' className="card card-compact text-center bg-base-300 shadow-2xl p-5 hover:bg-sky-300 hover:scale-105">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold">{name} </h2>
    <p>{description} </p>
    
   
  </div>
</Link>
    );
};

export default Service;