import React from "react";
import m1 from '../../../assets/medicnes/m1.jpeg'
import m2 from '../../../assets/medicnes/m2.jpeg'
import m3 from '../../../assets/medicnes/m3.jpeg'
import m4 from '../../../assets/medicnes/m4.jpg'
import m5 from '../../../assets/medicnes/m5.jpeg'
const Medicines = () => {
  return (
    <div>
      <div className="mt-5 text-4xl font-serif font-bold text-center text-primary">
        Our Stores Provided
      </div>

      <div className="py-10"></div>

      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-5">
        <div className="card w-96 bg-base-300 rounded-3xl shadow-3xl border-2">
          <figure>
            <img className=""
              src={m1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Maalox Plus
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>More preferable to rid of pain </p>
            <div className="card-actions justify-between ml-5 mr-5">
              <div className="text-3xl">$ 5 </div>
              <div className="btn bg-primary">Buy Now</div>
            </div>
          </div>
        </div>



        <div className="card w-96  bg-base-300 shadow-xl">
          <figure>
            <img
              src={m2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Amocicillin
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>rid of from heavy pain of teeth </p>
            <div className="card-actions justify-between ml-5 mr-5">
              <div className="text-3xl">$ 1 </div>
              <div className="btn bg-primary">Buy Now</div>
            </div>
          </div>
        </div>
     
     
     
        <div className="card w-96  bg-base-300 shadow-3xl">
          <figure>
            <img
              src={m3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              SetMax-50
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>prefered by doctors</p>
            <div className="card-actions justify-between ml-5 mr-5">
              <div className="text-3xl">$ 5 </div>
              <div className="btn bg-primary">Buy Now</div>
            </div>
          </div>
        </div>


        <div className="card w-96  bg-base-300 shadow-3xl">
          <figure>
            <img
              src={m4}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Yuna white
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>freshnes cleans and cool</p>
            <div className="card-actions justify-between ml-5 mr-5">
              <div className="text-3xl">$ 3 </div>
              <div className="btn bg-primary">Buy Now</div>
            </div>
          </div>
        </div>


        <div className="card w-96  bg-base-300 shadow-3xl">
          <figure>
            <img
              src={m5}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Emla cream
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>the cream is useful for teeth hole prevent</p>
            <div className="card-actions justify-between ml-5 mr-5">
              <div className="text-3xl">$ 4 </div>
              <div className="btn bg-primary">Buy Now</div>
            </div>
          </div>
        </div>















      </div>
    </div>
  );
};

export default Medicines;
