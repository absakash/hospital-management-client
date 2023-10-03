import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Fotter from '../shared/Fotter';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;