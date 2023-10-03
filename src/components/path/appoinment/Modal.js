
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { format } from "date-fns";

const Modal = ({ treatment, selected, data , setTreatment,refetch}) => {

  const { name, slots,price } = treatment;
  const date=format(selected,'PP')
  console.log('dd',date)
  const {user}=useContext(AuthContext)
  console.log("hey the modal",name)
 

  const handleSubmit=event=>{
            event.preventDefault()
            const form=event.target
            const email=form.email.value;
            const pname=user?.displayName
            const phone=form.phone.value;
            const slot=form.slot.value;
            const booking={
                tname:name,email,phone,slot,data,
                patientName:pname,
                appointDate:data,
                price
            }

            
            fetch(`http://localhost:4000/booking?date=${date}`,{
              method:"POST",
              headers:{
                
                "content-type":"application/json"
              },
              body:JSON.stringify(booking)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
              form.reset()
              toast.success("booked your appointment")
              refetch()
              
            })




           
  }

  return (
    <>
      <input type="checkbox" id="samma" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
        <div className="modal-action">
            <label htmlFor="samma" className="btn">
              X
            </label>
          </div>
          {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleSubmit} className="mt-0">
            <div className="grid grid-cols-1 gap-7 justify-center">
              <input
                type="text" placeholder=""
                value={data}
                className="input input-ghost w-full bg-base-200"
              />

              <select name="slot" className="select select-bordered w-full ">
               
                {
                    slots.map((slot,ii)=><option key={ii}  slot={slot}>{slot}</option>)
                }
                {/* <option>Han Solo</option>
                <option>Greedo</option> */}
              </select>

              <input
                type="text"
                placeholder="Enter your name " name="pname"
                className="input input-ghost w-full " defaultValue={user?.displayName}  disabled
              />
              <input
                type="email" name="email"
                placeholder="Enter your mail "
                className="input input-ghost w-full " defaultValue={user?.email} disabled
              />
              <input
                type="text" name="phone"
                placeholder="Enter your Phone : "
                className="input input-ghost w-full "
                
              />
              <br />
              <input type="submit" value='submit' className="btn btn-primary" />
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Modal;
