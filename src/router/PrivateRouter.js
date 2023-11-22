import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
   const {user,loading}=useContext(AuthContext)
   const location=useLocation();

   if(loading){
    setTimeout(() => {

    }, 200);
    return <progress className="progress w-56"></progress>

   }


   if(user){
    return children
   }
   return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;