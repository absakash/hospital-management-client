import React from "react";
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import Battun from "../../components/Battun";
const Appointment = () => {
  return ( 
    <section className="mt-32 mb-10"
    style={
        {
            background:`url(${appoinment})`
        }
    }
    >
      <div className="hero py-5">
        {/* <img src={appoinment} alt="" /> */}
        <div className="hero-content flex-col lg:flex-row">
          <img alt=""
            src={doctor} 
            className="md:w-1/2 -mt-32 hidden md:block  rounded-lg"
          />
          <div>
            <h4 className="text-lg text-primary font-bold">Appintment</h4>
            <h1 className="text-4xl text-white">Make an Appointment !</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Battun>Appoinment</Battun>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
