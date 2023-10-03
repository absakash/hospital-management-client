import React, { useState } from "react";
import { useQuery } from "react-query";
import ConfirmModal from "./ConfirmModal";
import toast from "react-hot-toast";

const ManageDoctors = () => {
  const [deletingDoctor, SetDeletingDoctor] = useState(null);
  const closeModal=()=>{
    SetDeletingDoctor(null)
  }


  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:4000/doctors", {
          headers: {},
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDelete=(doc)=>{
    fetch(`http://localhost:4000/doctors/${doc._id}`,{
       method: 'DELETE',
      
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.deletedCount>0){
        refetch()
        toast.success(`Doctor ${doc.name} deleted succesfully ....`)
       }
     
    })
 }
  return (
    <div>
      here i will manage the doctors ----- {doctors?.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* body parts */}

            {doctors.map((doctor) => (
              <tr key={doctor._id} doctor={doctor}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doctor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{doctor.name}</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td>Red</td>
                <th>
                  <label
                    onClick={()=>SetDeletingDoctor(doctor)}
                    htmlFor="confirm_modal"
                    className="btn btn-error btn-xs"
                  >
                    delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfirmModal
        closeModal={closeModal}
        title={`Are you want to delete doctor ${deletingDoctor.name}`}
        successAction={handleDelete}
        data={deletingDoctor}
        >

        </ConfirmModal>
      }
    </div>
  );
};

export default ManageDoctors;
