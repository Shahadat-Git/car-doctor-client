import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';

const Slider = () => {
    return (
        <div className='w-[1140px] mx-auto'>
            <div className="carousel  w-full h-[600px] rounded-lg">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img className='w-full' src={banner1} />
                    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                        <div className='w-5/12 ml-20 h-full flex flex-col justify-center  gap-10'>
                            <h1 className='text-white text-6xl font-semibold'> Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn btn-ghost hover:bg-transparent hover:border-white bg-main text-white'> Discover More</button>
                                <button className='btn btn-ghost btn-outline outline-white text-white hover:bg-main'> Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute transform -translate-y-1/2  bottom-2 right-10">
                        <a href="#slide3" className="btn btn-ghost btn-circle mr-5  text-white bg-[#ffffff3b] hover:bg-main ">❮</a>
                        <a href="#slide2" className="btn btn-ghost btn-circle mr-5  text-white bg-[#ffffff3b] hover:bg-main ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img className='w-full' src={banner2} />
                    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                        <div className='w-5/12 ml-20 h-full flex flex-col justify-center  gap-10'>
                            <h1 className='text-white text-6xl font-semibold'> Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn btn-ghost hover:bg-transparent hover:border-white bg-main text-white'> Discover More</button>
                                <button className='btn btn-ghost btn-outline outline-white text-white hover:bg-main'> Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute transform -translate-y-1/2  bottom-2 right-10">
                        <a href="#slide1" className="btn btn-ghost btn-circle mr-5  text-white bg-[#ffffff3b] hover:bg-main ">❮</a>
                        <a href="#slide3" className="btn btn-ghost btn-circle mr-5  text-white bg-[#ffffff3b] hover:bg-main ">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img className='w-full' src={banner3} />
                    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full'>
                        <div className='w-5/12 ml-20 h-full flex flex-col justify-center  gap-10'>
                            <h1 className='text-white text-6xl font-semibold'> Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn btn-ghost hover:bg-transparent hover:border-white bg-main text-white'> Discover More</button>
                                <button className='btn btn-ghost btn-outline outline-white text-white hover:bg-main'> Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute transform -translate-y-1/2  bottom-2 right-10">
                        <a href="#slide2" className="btn btn-ghost btn-circle mr-5  text-white bg-[#ffffff3b] hover:bg-main ">❮</a>
                        <a href="#slide1" className="btn btn-ghost btn-circle mr-5  text-white bg-[#ffffff3b] hover:bg-main ">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Slider;