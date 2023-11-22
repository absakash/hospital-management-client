import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user ,userOut} = useContext(AuthContext);

  // dark theme


  // .............................
  
  const Out=()=>{
    userOut()
    .then(()=>{

    }).catch(error=>console.log(error))
  }

  const menuIteam = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="mr-2 ml-2">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          dashboard
        </NavLink>
      </li>
      <li className="mr-2 ml-2">
        <NavLink
          to="/medicines"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Medicines
        </NavLink>
      </li>






      <li className="mx-2">
        <NavLink
          to="/appointment"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Appointment
        </NavLink>
      </li>

     
    

    
        {user?.uid ?
          <li>
            {" "}
            <NavLink onClick={Out}
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              logout
            </NavLink>{" "}
          </li>
        : 
          <li className="flex flex-row gap-2">
            {" "}
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Register
            </NavLink>
          </li>

          
        }

        <li>
          <Link>{user?.displayName}</Link>
           </li>
    
    </>
  );
  return (
    <div className="navbar bg-base-200 flex justify-between gap-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuIteam}
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Doctors-Portal
        </Link>
      
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuIteam}</ul>
      </div>
      <label htmlFor="my-drawer-2" tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
    </div>
  );
};

export default Header;
