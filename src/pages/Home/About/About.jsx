import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='my-32'>
            <div className='flex h-[557px] gap-5 items-center'>
                <div className='w-6/12 relative'>
                    <img className='w-[460px] h-[473px] rounded-lg' src={img1} alt="" />
                    <img className='absolute top-1/2 left-[194px] w-[327px] h-[332px] border-8 border-white rounded-lg' src={img2} alt="" />
                </div>
                <div className='w-6/12'>
                    <h4 className='text-main text-2xl font-semibold'>About Us</h4>
                    <h2 className='text-3xl font-semibold my-5'>We are qualified <br /> & of experience <br /> in this field</h2>
                    <p className='text-gray-500'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className='text-gray-500 my-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='btn bg-main text-white hover:bg-[#e2592faf]'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;