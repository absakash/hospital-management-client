import React from "react";

const ConfirmModal = ({closeModal,title,successAction,data}) => {
  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor="confirm_modal" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirm_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{title}</p>
          <div className="modal-action">
            <label onClick={()=>successAction(data)} htmlFor="confirm_modal" className="btn">
              yes
            </label>
          <button onClick={closeModal} className="btn btn-outline">
            Close modal

          </button>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
