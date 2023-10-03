import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error=useRouteError()
    return (
        <div>
            <p className="text-red-500">something went wrong </p>
            <i className='text-red-400'>{error.statusText || error.message}</i>
       
        </div>
    );
};

export default DisplayError;