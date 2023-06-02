import React from 'react';
import Slider from '../Slider/Slider';
import About from '../About/About';

const Home = () => {
    return (
        <div className='w-[1140px] mx-auto'>
            <Slider></Slider>
            <About></About>
        </div>
    );
};

export default Home;