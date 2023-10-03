import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const imgbbKey='0bb9ffb81c76c662ba12686eae5e5c16'
    const {data:specialities=[],isLoading}=useQuery({
        queryKey:['speciality'],
        queryFn:async()=>{
           const res=await fetch('http://localhost:4000/appointmentSpecialist')
           const data=res.json()
           return data;
        
        }
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handleSign=(data)=>{
            // console.log(data);
            const image=data.image[0]
            const formData=new FormData()
            formData.append('image', image);
            const url=`https://api.imgbb.com/1/upload?key=${imgbbKey}`
            fetch(url,{
                method:'POST',
                body:formData,
            })
            .then(res=>res.json())
            .then(imageData=>{
                if(imageData.success){
                console.log("img url : ",imageData.data.url)
                const doctor={
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    image: imageData.data.url
                }

                console.log("doctorsInfo : ",doctor);

                //save the information into the database

                fetch('http://localhost:4000/doctors',{
                    method:'POST',
                    headers:{
                        'content-type':"application/json"
                    },
                    body:JSON.stringify(doctor)

                })
                .then(res=>res.json())
                .then(data=>{
                      console.log(data);
                      if(data.acknowledged){
                        toast.success('successfully updated ......')
                        navigate('/dashboard/manageDoctors')
                      }
                })

                }
            })
      }
    return (
        <div className="flex h-[700px] items-center justify-center">
        <div className="w-96 p-6">
          <h2 className="text-4xl font-semibold">Add a doctor </h2>
  
          <form className="mt-5" onSubmit={handleSubmit(handleSign)}>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="">
                <span className="label-text">Enter Name of the doctor : </span>
              </label>
              <input
                {...register("name", { required: "enter name first" })}
                type="name"
                className="input input-bordered"
                placeholder="Enter your name : "
              />
              {errors.name && (
                <span className="text-red-600">{errors.name?.message} </span>
              )}
            </div>
  



            <div className="form-control w-full max-w-xs">
              <label
                className="label"
                htmlFor="
              "
              >
                <span className="label-text">Email : </span>
              </label>
              <input
                {...register("email", { required: "email" })}
                type="email"
                className="input input-bordered"
                placeholder="Enter your email : "
              />
              {errors.email && (
                <span className="text-red-500">{errors.email?.message} </span>
              )}
            </div>




            <div className="form-control w-full max-w-xs">
              <label
                className="label"
                htmlFor="
              "
              >
                <span className="label-text">spaciality : </span>
              </label>

              <select
                {...register("speciality", { required: "choice speciality" })}
              className="select select-primary w-full max-w-xs">
                    {/* <option disabled selected>specialist at </option> */}
                    {
                        specialities.map(special=><option
                        special={special}
                        value={special.name}
                        key={special._id}
                        >
                         {special.name}
                        </option>)
                    }
                   
              </select>
              {/* <input
                {...register("speciality", { required: "spacialist at " })}
                type="text"
                className="input input-bordered"
                placeholder="spacialist  : "
              /> */}
              {/* {errors.email && (
                <span className="text-red-500">{errors.email?.message} </span>
              )} */}
            </div>





            <div className="form-control w-full max-w-xs">
              <label
                className="label"
                htmlFor="
              "
              >
                <span className="label-text">photo : </span>
              </label>
              <input
                {...register("image", { required: "image is required" })}
                type="file"
                className="input input-bordered"
                placeholder="Enter your email : "
              />
              {errors.email && (
                <span className="text-red-500">{errors.image?.message} </span>
              )}
            </div>
  

  
            <input className="mt-7 w-full btn btn-primary" value='Add a Doctor' type="submit" />
            <div>
              {error && <span className="text-center text-red-600">{error}</span>}
            </div>
            {/* <div className="text-center">
              <Link to='/login' className="text-primary text-center ">go to login</Link>
            </div> */}
          </form>
        </div>
      </div>
    );
};

export default AddDoctor;