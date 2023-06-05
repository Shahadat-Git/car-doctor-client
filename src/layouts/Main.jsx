import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[1140px] mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;