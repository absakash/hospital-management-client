import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const MyModal = ({treatment}) => {
    console.log(treatment)
    // const {name}=treatment
   const {user}=useContext(AuthContext)
    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value;
        const name=form.name.value
       
        console.log(email,name)

    }
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>

         <form onSubmit={handleSubmit} className="mt-10" action="">
            
         <input
                type="text"
                placeholder="Enter your name " name="name"
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
            
            
            
            </form> 
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
