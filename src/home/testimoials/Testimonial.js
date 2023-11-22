import React from "react";

const Testimonial = ({ reveiw }) => {
  const { img, name, location, review } = reveiw;
  return (
    <div className="card bg-base-100 shadow-xl mb-4">
      <div className="card-body bg-primary rounded-3xl hover:bg-sky-700 hover:scale-105">
        <p className="text-left">{review}</p>

        <div className="flex items-center ">
          <div className="avatar mx-6 mt-6 ">
            <div className="w-20 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>

          <div>
        <h2 className="card-title">{name}</h2>

            <h3 className="text-xl ">{location}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
