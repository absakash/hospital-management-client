import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Myappointment = () => {
    const {user}=useContext(AuthContext)
    const url=`http://localhost:4000/booking?email=${user?.email}`


    const {data: booked=[],isLoading}=useQuery({
        queryKey:['bookings',user?.email],
        queryFn: async()=>{
            const res=await fetch(url,{
              // headers:{
              //   authorization:`bearer ${localStorage.getItem('access_token')}`
              // }
            })
            const data=await res.json()
            console.log("'appointment ",data);
            return data;
        }
    })
    if(isLoading){
      return <h2>loading mer.......</h2>
    }
  return (
    <div>
      <h3 className="text-3xl mb=5">My appointments</h3>

      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          {
           booked && booked.map((book,i)=>  <tr
            key={i}
            >
                <th>{1+i}</th>
                <th>{book.patientName}</th>
                <td>{book.tname}</td>
                <td>{book.data}</td>
                <td>{book.slot}</td>
                <td>

                  {
                    book.price && !book.paid && <Link
                    to={`/dashboard/payment/${book._id}`}
                    >
                    <button
                    className="btn btn-primary btn-sm">
                      Pay
                    </button>
                    </Link>
                  }
                  {
                    book.price && book.paid && <button
                    className="btn btn-primary">
                      Paid
                    </button>
                  }
                </td>
              
              </tr>)
          }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myappointment;
