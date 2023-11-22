import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createdUseremail, setCreatedUseremail] = useState("");
  const [token] = useToken(createdUseremail);

  if (token) {
    //     navigate("/");
    console.log("tokenoo", token);
  }

  const handleSign = (data) => {
    // console.log(data);
    setError("");

    createUser(data.email, data.password,data.name)
      .then((result) => {
        const user = result.user;
        toast.success("Registered successfully ......");

        const userinfo = {
          displayName: data.name,
        };
        updateUser(userinfo)
          .then(() => {
            saveUserDatabase(data.email, data.name);

          })
          .catch((error) => {
            console.log(error);
            // navigate('/')
          });
        // updating profile from here

        // console.log(user)
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const saveUserDatabase = (email, name) => {
    const user = { name, email };
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user ", data);
        setCreatedUseremail(email);
      })
      .catch((error) => console.log(error));
  };

  // const getUserToken=email=>{
  //   fetch(`http://localhost:4000/jwt?email=${email}`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     if(data.access_token){
  //       localStorage.setItem('access_token',data.access_token)
  //       navigate('/')
  //     }
  //   })
  // }

  return (
    <div className="flex h-[700px] items-center justify-center">
      <div className="w-96 p-10 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-semibold">Register here </h2>

        <form className="mt-5" onSubmit={handleSubmit(handleSign)}>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="">
              <span className="label-text">Enter your Name : </span>
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
              {...register("email", { required: "enter your email" })}
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
              <span className="label-text">Password : </span>
            </label>
            <input
              {...register("password", {
                required: "password",
                minLength: {
                  value: 6,
                  message: "password must be 6 characeters",
                },
              })}
              type="password"
              className="input input-bordered"
              placeholder="Create your password  :  "
            />
            {errors.password && (
              <span className="text-red-700">{errors.password?.message} </span>
            )}
          </div>

          <input className="mt-7 w-full btn btn-primary" type="submit" />
          <div>
            {error && <span className="text-center text-red-600">{error}</span>}
          </div>
          <div className="text-center">
            <Link to="/login" className="text-primary text-center ">
              go to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
