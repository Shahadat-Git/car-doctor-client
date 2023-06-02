import React from 'react';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className='w-[1140px] mx-auto'>
            <Slider></Slider>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;