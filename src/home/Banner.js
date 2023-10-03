import React from "react";
import banner from '../assets/images/chair.png'
import Battun from "../components/Battun";

import bg from '../assets/images/bg.png'

const Banner = () => {
  return (
    <div className="hero p-5"
    style={
      {
        background: `url(${bg})`
        
      }
    }
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="lg:w-1/2 md:w-1/2 rounded-lg shadow-2xl" alt=""
        />
        <div>
          <h1 className="md:text-5xl text-2xl font-bold">Your new Smile Starts <br /> Here </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>



         <Battun>Get Started</Battun>
        </div>
      </div>
    </div>
  );
};

export default Banner;
