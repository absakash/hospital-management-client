import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import toast from "react-hot-toast";

const Login = () => {
    const navigate=useNavigate()
    const location=useLocation()
  const from = location.state?.from?.pathname || "/";
    const {LoginIn}=useContext(AuthContext)
    const [loginError,setLoginError]=useState('')
  
    const [loginEmail,setLoginEmail]=useState('');

    const [token]=useToken(loginEmail)
    if(token){
      // navigate('/');
      navigate(from, { replace: true });

    }
    const handleLogin=data=>{
        console.log(data)
        LoginIn(data.email,data.password)
        .then(result=>{
            const user= result.user;
            console.log(user)
            setLoginError('')
            toast.success('logged in......')
            setLoginEmail(data.email)

        }).catch(error=>{
            console.log(error)
            setLoginError(error.message)
        })
        
    }


  const { register, handleSubmit } = useForm();
//   const [data, setData] = useState("");
  return (
    <div className="h-[700px] flex justify-center items-center ">
      <div className="w-96 p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-semibold">Login now</h2>

        <form className="" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs mt-2">
            <label className="label">
              <span className="label-text">Email : </span>
            </label>
            <input
              type="email"
             
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
              placeholder="Enter mail"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password : </span>
            </label>
            <input
              type="password"
             
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
              placeholder="Enter Password"
            />
             <label className="label">
              <span className="label-text">forget password </span>
            </label>
          </div>

          <input className="mt-3 btn btn-accent w-full" type="submit" value='Login'/>
          <div>
            {loginError && <span className="text-red-600">{loginError} </span>}
          </div>
        </form>


        <p className="mt-3">New to Doctors portal <Link to='/register' className="text-primary">Create a new Account</Link> </p>
      
        <div className="divider">OR</div>
        <button className="btn w-full btn-outline">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
