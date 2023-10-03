import React from "react";



const ServiceData = ({ sir, setTreatment,treatment }) => {
  const { name, slots, price } = sir;
  // console.log(treatment)
  return (
    <div className="card w-96  text-black shadow-2xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{name} </h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Avilable now
        </p>
        <p>Price : $ {price}</p>

        <label
          disabled={slots.length===0}
          onClick={() => setTreatment(sir)}
          htmlFor="samma"
          className="btn bg-primary"
        >
          Book Now
        </label>

        {/* <label  htmlFor="my_modal_6" className="btn bg-primary">open modal</label> */}
        {/* <label onClick={() => setTreatment(sir)} htmlFor="my_modal_6" className="btn">open modal</label> */}
      
      
      </div>
     {/* <MyModal></MyModal> */}
    </div>
  );
};

export default ServiceData;
