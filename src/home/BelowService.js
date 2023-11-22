import React from "react";
import treatment from '../assets/images/treatment.png'
import { Link } from "react-router-dom";
const BelowService = () => {
  return (
    <div className="hero py-10 ">
      <div className="  hero-content flex-col lg:flex-row p-10 gap-10">
        <img
          src={treatment} alt=""
          className="md:w-2/5 rounded-3xl"
        />
        <div className="">
          <h1 className="text-5xl font-xl">Exceptional Dental Care on
          <br /> 
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam et, aspernatur, dolor nemo culpa porro velit commodi, nostrum autem molestiae nobis hic consequatur consectetur assumenda voluptatum non. Dicta, deleniti.
           
          </p>
          <Link to='/appointment' className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default BelowService;
